import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
  return (
      <div>
        <section className="mb-10">
          <article className="mb-8">
          <h1 className="text-2xl font-serif font-bold">McGuire Memorial</h1>
            <p className="text-xl font-serif">Direct Care Staff</p>
            <p className="mt-1 font-serif">Part of direct care staff at several community homes providing healthcare services to disabled individuals. Involved in medication administration, individual behavior assistance and general care. Received significant employer training as well as all necessary state certifications.</p>
            <p className="mt-1 font-serif font-semibold">April 2020 - August 2020</p>
          </article>
        </section>
        <section className="mb-10">
          <p className="font-serif">Part of direct care staff at several community homes providing healthcare services to disabled individuals. Involved in medication administration, individual behavior assistance and general care. Received significant employer training as well as all necessary state certifications.</p>
        </section>
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Links</h1>
          </header>
          <Link href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=234ac0c8-f04c-49d0-8cc8-cf17c6ccb448&ccId=19000101_000001&lang=en_US&jobId=484755">
          <article className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-semibold underline text-[#000080]">Direct Support Professional</h2>
            <p className="mt-2 font-serif">McGuire Memorial</p>
            {/*<p className="mt-2 font-serif">May 2020 - May 2023</p>*/}
          </article></Link>
          <Link href="https://mcguirememorial.org/mcguire-memorial-residential-services/community-homes/">
          <article className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-semibold underline text-[#000080]">Community Homes</h2>
            <p className="mt-2 font-serif">McGuire Memorial</p>
            {/*<p className="mt-2 font-serif">May 2020 - May 2023</p>*/}
          </article></Link>
          </section>
      </div>
  )
}
