import CompanyAdd from "./Company/CompanyAdd";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] h-screen">
      <main className="grid md:grid-cols-[3fr_9fr] h-full">
        {/* Sidebar */}
        <aside className="">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <section className="bg-white md:col-span-1 mx-auto w-full">
          <Header />
          <CompanyAdd />
        </section>
      </main>
    </div>
  );
}
