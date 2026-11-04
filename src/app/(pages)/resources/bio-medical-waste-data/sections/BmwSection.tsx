import { GUTTER } from "@/constants";

import { BMW_DATA } from "../components";

const HEADERS = [
  "No",
  "Red/M",
  "Yellow/M",
  "Blue/M",
  "Sharp/White/M",
  "Total Kg/M",
];

const ARCHIVE = [
  { year: "2026", months: ["March", "February", "January"] },
  {
    year: "2025",
    months: [
      "December",
      "November",
      "October",
      "September",
      "August",
      "July",
      "June",
      "May",
      "April",
    ],
  },
] as const;

const BmwSection = () => (
  <section className={`bg-white pt-8 pb-24 lg:pt-10 lg:pb-30 ${GUTTER}`}>
    <div className="mb-12">
      <h2 className="font-cormorant text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.015em] text-black">
        BMW Data
      </h2>
    </div>

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_150px]">
      <div>
        {BMW_DATA.map((region) => (
          <div key={region.region}>
            <h3 className="mt-4 bg-[#23adc6] px-5 py-2.5 font-roboto text-2xl font-semibold text-white capitalize">
              {region.region}
            </h3>

            <div className="overflow-x-auto">
              <table className="mb-2 w-full min-w-[640px] border-collapse text-left font-roboto">
                <tbody>
                  <tr>
                    <td className="border border-[#ccc] bg-white p-2.5 font-bold">
                      No
                    </td>
                    <td className="border border-[#ccc] bg-white p-2.5 font-bold">
                      {region.monthLabel}
                    </td>
                    {HEADERS.slice(1).map((head) => (
                      <td
                        key={head}
                        className="border border-[#ccc] bg-white p-2.5 font-bold"
                      >
                        {head}
                      </td>
                    ))}
                  </tr>

                  {region.rows.map((row) => (
                    <tr key={row.no + row.name}>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.no}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.name}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.red}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.yellow}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.blue}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.sharpWhite}
                      </td>
                      <td className="border border-[#ccc] bg-white p-2.5">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky top-34 self-start">
        {ARCHIVE.map((branch) => (
          <div key={branch.year}>
            <div className="font-roboto text-lg leading-[1.15] font-semibold text-secondary">
              {branch.year}
            </div>
            <ul className="my-0 px-5.5 py-3 pb-5">
              {branch.months.map((month, index) => (
                <li
                  key={month}
                  className={`relative mt-0.5 pl-5 before:absolute before:top-0 before:bottom-0 before:left-1 before:w-[1.5px] before:bg-[rgb(223,223,223)] before:content-[''] after:absolute after:top-4 after:left-1 after:h-[1.5px] after:w-[11px] after:bg-[rgb(223,223,223)] after:content-[''] ${
                    index === branch.months.length - 1 ? "before:h-[17px]" : ""
                  }`}
                >
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 rounded-md px-1 py-1.5 font-roboto text-[17px] font-semibold text-[#393f42] hover:text-primary-subtle"
                  >
                    {month}
                    <span className="text-primary-subtle opacity-0 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BmwSection;
