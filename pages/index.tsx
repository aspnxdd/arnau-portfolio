import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="m-10">
        <h1 className="text-3xl  font-bold text-gray-200">
          Hi, I am <span className="text-sky-600">Arnau</span>.{" "}
          <p>I am a Full Stack Developer based in Spain.</p>
        </h1>
        <h1 className="mt-10 w-[17ch] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl   text-white font-bold">
          Wanna know more?
        </h1>
        <p className="mt-10 text-xl text-gray-200 max-w-[60ch] leading-8">
          I am an electronics engineer who totally moved to software
          development, web development and lately blockchain technology
          development. I am quite profficient at JavaScript/TypeScript ✔ and
          React ⚛️ and lately I am diving into the Rust programming language 🦀.
          <br />
          <br />I have over 3 years of experience in web development and I have
          worked with technologies such as Node.js, Express, MongoDB,
          PostgreSQL, React, Vue, Typescript, Next.js, TailwindCSS, GraphQL...
          <br />
          <br />I have over 1 year of experience in blockchain development and I
          have worked mainly in Solana.
        </p>
        <h1 className="mt-10 text-3xl font-bold text-gray-200">Contact</h1>
        <ul className="mt-2 text-xl text-gray-200 list-disc ml-10 font-bold leading-10">
          <li>
            <a
              className="text-sky-600 hover:text-sky-700 ease-in-out duration-200"
              href="https://www.linkedin.com/in/arnau-espin-23789980/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-sky-600 hover:text-sky-700 ease-in-out duration-200"
              href="
              https://github.com/aspnxdd
              "
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:esarnau21@gmail.com"
              className="text-sky-600 hover:text-sky-700 ease-in-out duration-200"
            >
              Email: esarnau21@gmail.com
            </a>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
