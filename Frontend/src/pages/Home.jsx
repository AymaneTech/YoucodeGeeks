import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main className="grid grid-cols-12 grid-rows-auto">
        <Navbar />
      <div className="col-span-12 md:col-span-2">
        <Sidebar />
      </div>


    </main>
  );
};

export default Home;
