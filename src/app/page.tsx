import HighlightedText from "@/components/HighlightedText";
import Navbar from "@/components/Navbar";

const Home = () => (
  <main className="flex min-h-screen flex-col items-center justify-between py-24 md:px-24">
    <Navbar page="/" />
    <div className="mt-32 flex w-5/6 flex-col gap-5 font-semibold tracking-wide text-white md:ml-96 md:h-1/2 md:w-1/2">
      <h2 className="inline-block bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text py-2 text-5xl font-extrabold text-transparent">
        Hello, I'm Santiago.
      </h2>
      <p>
        I'm a <HighlightedText>Full Stack Engineer</HighlightedText> living in
        the United States with a passion for astrophotography, creative coding
        and information visualization.
      </p>
      <p>
        Previously at Despegar.com. Currently{" "}
        <HighlightedText underlined>available for hire.</HighlightedText>
      </p>
    </div>
  </main>
);

export default Home;
