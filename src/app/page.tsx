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
    <section className="bg-white p-4 md:col-span-1">
      <div>Hello, this is from Body</div>
    </section>
  </main>
</div>
  );
}
