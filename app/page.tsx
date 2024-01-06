import Image from 'next/image'

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
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">School of Name</h2>
            <p className="text-xl font-serif">Degree</p>
            <p className="mt-1 font-serif">Academic Excellence Scholarship</p>
            <p className="mt-1 font-serif font-semibold">May 2023 - May 2026</p>
          </article>
        </section>
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Experience / Projects</h1>
          </header>
          <p className="font-serif mb-2 italic text-xs">Click on each item for a more detailed description.</p>
          <article className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
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
