// import { faCoffee } from "@fortawesome/fontawesome-svg-core";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <div className="drawer md:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-green-800 hover:bg-green-600 font-bold text-amber-600 drawer-button md:hidden w-full"
            >
              Dashboard
            </label>
          </div>
          <div className="drawer-side min-h-fit border border-black">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-black ps-5 min-h-full ">
              <div className="flex  items-center justify-center md:justify-between mb-7">
                <h2 className="text-xl md:text-4xl font-bold text-center ">
                  GENPOS
                </h2>
              </div>
              <ul>
                <li className="text-base md:text-lg font-medium my-2 flex flex-row  items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-12 h-12"
                  >
                    <path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z" />
                  </svg>
                  Dashboard
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary>Purchase</summary>
                  </details>
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary className="text-blue-600">Business unit</summary>
                    <ul className="list-disc marker:text-blue-500">
                      <li>
                        <a href="">Groups</a>
                      </li>
                      <li>
                        <a className="text-blue-600">Companies</a>
                      </li>
                      <li>
                        <a>Brands</a>
                      </li>
                      <li>
                        <a>Outlets</a>
                      </li>
                      <li>
                        <a>Warehouses</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary>Catalog</summary>
                  </details>
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary>User</summary>
                  </details>
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary> Configurations</summary>
                  </details>
                </li>
              </ul>
              <ul className="menu text-base md:text-lg font-medium ">
                <li>
                  <details>
                    <summary> System</summary>
                  </details>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
