import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
  return (
      <div>
        <section className="mb-10">
          <article className="mb-8">
          <h2 className="text-xl font-serif font-bold underline text-[#000080]">SmartVenue</h2>
              <p className="text-xl font-serif">Project</p>
              <p className="mt-2 font-serif">Spin off of MyGreek providing mobile ticketing solutions for live events. Will be piloting with Post Genre for their Spring concert series in Pittsburgh. Built on React, Express, Mongo stack.</p>
              <p className="mt-2 font-semibold font-serif">Fall 2023 - Present</p></article>
        </section>
        <section className="mb-10">
          <p className="font-serif">Detail to be added.</p>
        </section>
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Links</h1>
          </header>
          <Link href="https://smartvenue.one">
          <article className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-semibold underline text-[#000080]">SmartVenue explainer landing page</h2>
            <p className="mt-2 font-serif">smartvenue.one</p>
            {/*<p className="mt-2 font-serif">May 2020 - May 2023</p>*/}
          </article></Link>
          </section>
      </div>
  )
}
