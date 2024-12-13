import AvailableCompanies from "./Company/AvailableCompanies";
import CompanyAdd from "./Company/CompanyAdd";
import CompanyForm from "./Form/CompanyForm";
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

          {/* Company Add section component */}
          <CompanyAdd />

          {/* Company Form Section Component */}
          <CompanyForm />

          {/* Companies Data */}
          <AvailableCompanies />
        </section>
      </main>
    </div>
  );
}
