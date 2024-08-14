import Navbar from "@/components/Navbar";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-black via-black to-blue-800 p-24">
    <Navbar page="/" />
    <div className="ml-96 mt-32 flex h-1/2 w-1/2 flex-col gap-5 border text-white">
      <h2 className="text-5xl font-extrabold">Hello, I'm Santiago</h2>
      <p className="font-semibold">
        I'm a Full Stack Engineer living in the United States with a passion for
        astrophotography, creative coding and information visualization.
        Previously at Despegar. Currently available for hire.
      </p>
    </div>
  </main>
);

export default Home;
