import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <section className="mb-10">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">About</h1>
          </header>
          <p className="font-serif">This is a placeholder for the About section.</p>
        </section>
        <section className="mb-10">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">Education</h1>
          </header>
          <Link href="/utd">
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">University of Texas at Dallas</h2>
            <p className="text-xl font-serif">B.S. Finance</p>
            <p className="mt-1 font-serif">Academic Excellence Scholarship</p>
            <p className="mt-1 font-serif font-semibold">Fall 2019 - Fall 2023</p>
          </article>
          </Link>
        </section>
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Experience / Projects</h1>
          </header>
          <p className="font-serif mb-2 italic text-xs">Click on each item for a more detailed description.</p>
          <Link href="/mygreek">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">MyGreek.us</h2>
              <p className="text-xl font-serif">Software Engineering and Business Development</p>
              <p className="mt-2 font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
              <p className="mt-2 font-serif">Oct 2023 - Present</p>
            </article>
          </Link>
          <Link href="/athena">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Athena</h2>
              <p className="text-xl font-serif">Software Engineering</p>
              <p className="mt-2 font-serif">React Native developement for an unreleased AI health application. Frontend development in React Native / Expo. </p>
              <p className="mt-2 font-serif">August 2023 - December 2023</p>
            </article>
          </Link>
          <Link href="/politeia">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Politeia</h2>
              <p className="text-xl font-serif">Software Engineer</p>
              <p className="mt-2 font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
              <p className="mt-2 font-serif">May 2022 - August 2022</p>
            </article>
          </Link>
          
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">Experience Title</h2>
            <p className="mt-2 font-serif">Description of experience</p>
            <p className="mt-2 font-serif">May 2020 - May 2023</p>
          </article>
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">Experience Title</h2>
            <p className="mt-2 font-serif">Description of experience</p>
            <p className="mt-2 font-serif">May 2020 - May 2023</p>
          </article>
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">Experience Title</h2>
            <p className="mt-2 font-serif">Description of experience</p>
            <p className="mt-2 font-serif">May 2020 - May 2023</p>
          </article>
        </section>
        <section className="mb-10">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">Other</h1>
          </header>
          <p className="font-serif">This is a placeholder for the Other section.</p>
        </section>
      </div>
  )
}
