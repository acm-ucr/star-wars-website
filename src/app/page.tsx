import About from "@/components/About";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import What from "@/components/What";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Landing />
      <About />
      <What />
      <Join />
    </div>
  );
};

export default Home;
