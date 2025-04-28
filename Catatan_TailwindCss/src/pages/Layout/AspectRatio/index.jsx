const aspectData = [
  { className: "aspect-<ratio>", style: "aspect-ratio: <ratio>;" },
  { className: "aspect-square", style: "aspect-ratio: 1 / 1;" },
  {
    className: "aspect-video",
    style: "aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */",
  },
  { className: "aspect-auto", style: "aspect-ratio: auto;" },
  {
    className: "aspect-(<custom-property>)",
    style: "aspect-ratio: var(<custom-property>);",
  },
  { className: "aspect-[<value>]", style: "aspect-ratio: <value>;" },
];

export default function AspectRatio() {
  return (
    <div className="font-sans">
      <div className="mb-5">
        <h2 className="text-4xl mt-10 text-gray-800 mb-5">aspect-ratio</h2>
        <p className="text-xl text-gray-800 mb-5">
          Utilitas untuk mengendalikan rasio aspek suatu elemen.
        </p>
        <div className="overflow-x-auto bg-gray-100 p-4 rounded-lg">
        <table className="min-w-full table-auto bg-gray-100 border border-gray-200 shadow-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                Class
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">
                Styles
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {aspectData.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-800">
                  <code>{item.className}</code>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-800">
                  <code>{item.style}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <div>
        <h2 className="text-4xl mt-10 text-gray-800 mb-5">Basic example</h2>

        
      </div>
     
    </div>
  );
}
