import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { type: 'link', name: 'Dashboard', to: '/' },
  {
    type: 'dropdown',
    title: 'Layout',
    items: [
      { label: 'aspect-ratio', to: '/AspectRatio' },
      { label: 'columns', to: '/Columns' },
    ],
  },
  {
    type: 'dropdown',
    title: 'Flexbox & Grid',
    items: [
      { label: 'flex-basis', to: '/subpage1' },
      { label: 'flex-direction', to: '/subpage2' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown({ title, items }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex w-full justify-between rounded-md bg-gray-800 px-3 py-2 text-white hover:bg-gray-700 focus:outline-none">
        {title}
        <ChevronDownIcon className="h-5 w-5 text-white" />
      </Menu.Button>

      <Menu.Items className="absolute left-0 mt-2 w-full max-w-xs origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <div className="py-1">
          {items.map((item, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    classNames(
                      active || isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm truncate'
                    )
                  }
                  style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {item.label}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Disclosure as="nav" className="w-64 bg-gray-800">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between px-4 py-4 sm:hidden">
              <span className="text-white text-lg font-semibold">Menu</span>
              <DisclosureButton className="text-gray-400 hover:text-white">
                {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </DisclosureButton>
            </div>

            <div className="hidden sm:block px-4 py-6">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Logo"
                />
                <span className="text-white font-bold text-xl">Belajar React JS</span>
              </div>
              <nav className="space-y-1">
                {navigation.map((item) =>
                  item.type === 'link' ? (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <Dropdown key={item.title} title={item.title} items={item.items} />
                  )
                )}
              </nav>
            </div>

            <DisclosurePanel className="sm:hidden px-4 pb-4">
              <nav className="space-y-1">
                {navigation.map((item) =>
                  item.type === 'link' ? (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <Dropdown key={item.title} title={item.title} items={item.items} />
                  )
                )}
              </nav>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Konten akan ditampilkan di sini */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet /> {/* Ini adalah tempat di mana konten akan muncul */}
      </main>
    </div>
  )
}
