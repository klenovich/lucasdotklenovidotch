import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
  return (
      <div>
        <section className="mb-10">
          <article className="mb-8">
          <h1 className="text-2xl font-serif font-bold">Politeia</h1>
            <p className="text-xl font-serif">Software Engineer</p>
            <p className="mt-1 font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
            <p className="mt-1 font-serif font-semibold">May 2022 - August 2022</p>
          </article>
        </section>
        <section className="mb-10">
          <p className="font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
        </section>
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Links</h1>
          </header>
          <Link href="https://www.linkedin.com/feed/update/urn:li:activity:6998022966085046272/">
          <article className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-semibold underline text-[#000080]">Halborn Acqusition</h2>
            <p className="mt-2 font-serif">LinkedIn Annoucement</p>
            {/*<p className="mt-2 font-serif">May 2020 - May 2023</p>*/}
          </article></Link>
          </section>
      </div>
  )
}
