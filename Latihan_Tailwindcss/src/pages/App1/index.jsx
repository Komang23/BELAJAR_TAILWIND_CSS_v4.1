export default function App1() {
  return (
    <>
      <div className="bg-gray-100 font-sans">
        <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-100 to-white">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm text-center">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h1 className="text-2xl font-bold text-gray-800">Komang Redana</h1>
            <p className="text-gray-600 mt-2">
              Fronend Develover & UI/UX Learner
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Hubungi Saya
            </button>
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                Skill Saya
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-700 px-3 py-1  rounded-full text-sm">
                  HTML
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  CSS
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Javascript
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 ">
          <div>
            <h2>Tentang Saya</h2>
            <p>
              Saya adalah pengembang frond-end pemula yang sedang belajar
              membangun tampilan website modern mengunakan{" "}
              <span>Tailwind CSS</span>. Saya suka desain sederhana, bersih dan
              mudah digunakan
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
