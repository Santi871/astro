import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-black via-black to-indigo-800 p-24">
      <header className="fixed top-0 w-screen p-10 text-center text-white">
        Asd
      </header>
      <div className="gap-5flex-col ml-96 mt-32 flex h-1/2 w-1/2 border text-white">
        <h2 className="text-5xl font-extrabold">Hello, I'm Santiago</h2>
        <p className="font-semibold">
          I'm a Full Stack Engineer from Argentina with a passion for music,
          creative coding and information visualization. Previously at Intercom,
          Teamwork.com. Currently available for hire.
        </p>
      </div>
    </main>
  );
}
