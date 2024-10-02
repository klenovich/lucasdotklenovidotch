import Link from 'next/link';

export default function Home() {
  return (
      <div>


        <section className="mb-10">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">About</h1>
          </header>
          <p className="font-serif"> Recently graduated with a Bachelors of Science in Finance at the University of Texas at Dallas with relevant coursework mostly in investment management and real estate. Significant academic experience in computer science, with coursework taken in Python, Java, C++, and others. Self taught with varying levels of proficiency in TypeScript / JavaScript (React, ReactNative, Next.js, Express, +more), PHP, and many other webdev languages / frameworks. Work experience garnered mainly in the startup field. Currently building <Link className='underline text-[#000080]' href="/mygreek">MyGreek</Link> and a couple spin off apps (<Link className='underline text-[#000080]' href="/smartvenue">SmartVenue</Link> and <Link className='underline text-[#000080]' href="/fundcodes">fund.codes</Link>). Did some ReactNative development for <Link className='underline text-[#000080]' href="/athena">Athena</Link> Fall 2023 and some React + Django work for <Link className='underline text-[#000080]' href="/politeia">Politeia</Link> in Summer 2022. I enjoy taking up a variety of projects outside these as well, some are included below or at <Link className='underline text-[#000080]' href="/projects/#more">Even More Projects</Link>.</p>
        </section>


        <section className="mb-10" id="education">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">Education</h1>
          </header>
          {/*<Link href="/utd">*/}
          <article className="mb-8 cursor-pointer hover:bg-blue-200 rounded">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">University of Texas at Dallas</h2>
            <p className="text-xl font-serif">B.S. Finance</p>
            <p className="mt-1 font-serif">Academic Excellence Scholarship</p>
            <p className="mt-1 font-serif font-semibold">Fall 2019 - Fall 2023</p>
          </article>
          {/*</Link>*/}
        </section>

        {/*
        <section className="mb-10">
          <header className="mb-1">
            <h1 className="text-2xl font-serif font-bold">Experience / Projects</h1>
          </header>
          <p className="font-serif mb-2 italic text-xs">Click on each item for a more detailed description.</p>

          <Link href="/politeia">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Politeia</h2>
              <p className="text-xl font-serif">Software Engineer</p>
              <p className="mt-2 font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
              <p className="mt-2 font-semibold font-serif">May 2022 - August 2022</p>
            </article>
          </Link>

          <Link href="/mygreek">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">MyGreek.us</h2>
              <p className="text-xl font-serif">Software Engineering and Business Development</p>
              <p className="mt-2 font-serif">Assisted in software development at Politeia, a governance risk modeling startup building a management platform for Decentralized Autonomous Organizations. My role included work in frontend and backend web development, using React.js and Django (Python). Worked with a small team to develop out a product that was shown to investors and led to the startup being acquired by Halborn Labs in late 2022.</p>
              <p className="mt-2 font-semibold font-serif">Oct 2023 - Present</p>
            </article>
          </Link>

          <Link href="/athena">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Athena</h2>
              <p className="text-xl font-serif">Software Engineer</p>
              <p className="mt-2 font-serif">React Native developement for an unreleased AI health application. Frontend development in React Native / Expo. </p>
              <p className="mt-2 font-semibold font-serif">August 2023 - December 2023</p>
            </article>
          </Link>

          <Link href="/mcguire">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">McGuire Memorial</h2>
              <p className="text-xl font-serif">Direct Care Staff</p>
              <p className="mt-2 font-serif">Part of direct care staff at several community homes providing healthcare services to disabled individuals. Involved in medication administration, individual behavior assistance and general care. Received significant employer training as well as all necessary state certifications.</p>
              <p className="mt-2 font-semibold font-serif">April 2020 - August 2020</p>
            </article>
          </Link>

          <Link href="/redriver">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Red River Partnership</h2>
              <p className="text-xl font-serif">Business Co-Founder</p>
              <p className="mt-2 font-serif">Started an event management company to provide event space and transportation rental services to clients in the Dallas-Fort Worth area. As co-founder/partner directly involved with all legal, financial, and operational facets of managing the business. Additionally building a SaaS (Software-as-a-service) management panel to automate most aspects of the business and expand to clients in additional markets.</p>
              <p className="mt-2 font-semibold font-serif">March 2023 - Present</p>
            </article>
          </Link>

          <Link href="/imperfect">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">IMPERFECT</h2>
              <p className="text-xl font-serif">Business Development</p>
              <p className="mt-2 font-serif">Provided business development expertise for a startup building a new e-commerce platform and mobile application. Recruited a team of independent clothing producers with a combined revenue of over $2 million to join platform, spearheaded product development and worked with prominent music artists in the Pittsburgh region to create and manage a series of charity concerts during Summer 2021.</p>
              <p className="mt-2 font-semibold font-serif">April 2020 - August 2020</p>
            </article>
          </Link>

          <Link href="#projects">
            <h2 className="text-xl font-serif font-bold underline text-[#000080]">More Projects</h2>
          </Link>

        </section>


        <section className="mb-10">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">Other</h1>
          </header>
          
          <Link href="/utdbox">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">UT-Dallas Box-A-Thon</h2>
              <p className="text-xl font-serif">Philantropy Director</p>
              <p className="mt-2 font-serif">Provided business development expertise for a startup building a new e-commerce platform and mobile application. Recruited a team of independent clothing producers with a combined revenue of over $2 million to join platform, spearheaded product development and worked with prominent music artists in the Pittsburgh region to create and manage a series of charity concerts during Summer 2021.</p>
              <p className="mt-2 font-semibold font-serif">2021 and 2022</p>
            </article>
          </Link>

          <Link href="/scouting">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Boy Scouts of America</h2>
              <p className="text-xl font-serif">Eagle Scout</p>
              <p className="mt-2 font-serif">Involved in scouting for most of my youth from the ages of 6 to 18. Fundraised for, constructed, and installed 24 bird houses as an Eagle Scout project.</p>
              <p className="mt-2 font-semibold font-serif">2007 - 2019</p>
            </article>
          </Link>


        </section>


        <section className="mb-10" id="projects">
          <header className="mb-4">
            <h1 className="text-2xl font-serif font-bold">More Projects</h1>
          </header>
          
          <Link href="/smartvenue" id="smartvenue">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">SmartVenue</h2>
              <p className="text-xl font-serif">Project</p>
              <p className="mt-2 font-serif">Spin off of MyGreek providing mobile ticketing solutions for live events. Will be piloting with Post Genre for their Spring concert series in Pittsburgh. Built on React, Express, Mongo stack.</p>
              <p className="mt-2 font-semibold font-serif">Fall 2023 - Present</p>
            </article>
          </Link>

          <Link href="/fundcodes" id="fundcodes">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <h2 className="text-xl font-serif font-bold underline text-[#000080]">Fund.Codes</h2>
              <p className="text-xl font-serif">Project</p>
              <p className="mt-2 font-serif">Spin off of MyGreek providing fundraising solutions for organizations and individuals raising for charitable or personal endeavors. Will be piloting with organizations at UT-Dallas this upcoming Spring. Built on React, Express, Mongo stack.</p>
              <p className="mt-2 font-semibold font-serif">Fall 2023 - Present</p>
            </article>
          </Link>

          <Link href="/projects/#more">
            <h2 className="text-2xl font-serif font-bold underline text-[#000080]">Even More Projects</h2>
          </Link>

          <section className="mb-10"></section>

          <Link href="/fundcodes" id="fundcodes">
            <article  className="mb-5 cursor-pointer hover:bg-blue-200 rounded">
              <p className="font-serif text-xs">2023 Lucas Klenovich</p>
              <p className="mt-1 font-serif text-xs">This site is built using Next.js and Tailwindcss.</p>
              <p className="font-serif text-xs">Project: <Link className='underline text-[#000080]' href="/lucasdotklenovidotch">lucasdotklenovidotch</Link></p>
              <p className="font-serif text-xs">Source: <Link className='underline text-[#000080]' href="http://github.com/klenovich/personalsite">klenovich/personalsite</Link></p>
            </article>
          </Link>

        </section>*/}

        
        <section className="mb-10"></section>
        
      </div>
  )
}
