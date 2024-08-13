import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-black via-black to-indigo-800">
      <header className="fixed top-0 w-screen p-10 text-center text-white">
        Asd
      </header>
      <div className="flex h-1/2 w-1/2 flex-col gap-5 border text-white ml-96 mt-32">
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
