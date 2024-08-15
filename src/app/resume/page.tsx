import HighlightedText from "@/components/HighlightedText";
import Navbar from "@/components/Navbar";

const Resume = () => (
  <main className="flex min-h-screen flex-col items-start justify-between">
    <Navbar page="/resume" />
    <div className="mt-28 flex flex-col gap-5 px-48 font-semibold tracking-wide text-white">
      <h2 className="inline-block bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text py-1 text-5xl font-extrabold text-transparent">
        Santiago Vegega
      </h2>
      <p>Full Stack Engineer / Minneapolis, MN / santivegega@gmail.com</p>
      <div className="border-1 h-96 min-w-max border border-white">
        <p>asd</p>
      </div>
    </div>
  </main>
);

export default Resume;
