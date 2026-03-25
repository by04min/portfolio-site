import { SECTION_SCROLL_CLASS } from "./constants";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className={`${SECTION_SCROLL_CLASS} flex flex-col space-y-[24px]`}
    >
      <p className="text-[16px]">
        I&apos;m a junior at UCLA, studying Computer Science & Linguistics with
        a Data Science Engineering minor. I care about building accessible,
        impact-driven products that scale — not just technically, but for all
        communities.
      </p>
      <p className="text-[16px]">
        I grew up with Korean immigrant parents in a small Bay Area community,
        where being bilingual was my primary connection to my family and our
        heritage. In 3rd grade, when &quot;Gangnam Style&quot; went viral, my
        friends sent me Kik messages in broken Google Translate Korean for the
        first time. It was sweet (and funny), and I&apos;d correct them each
        time. Nearly 10 years later, I was volunteering as a translator, writing
        letters from around the world into Korean. I watched as families waited
        months on end for their stories to be shared, as the same tools from my
        childhood remained unreliable for non-mainstream languages, and resulted
        in larger, manual systems as a workaround. Language barriers didn&apos;t
        stop at conversation, they lived in software, too. And they were no
        longer just a reason for a laugh.
      </p>
      <p className="text-[16px]">
        We&apos;re often lost in the excitement of what technology can do and
        how it can evolve, but fail to answer whether it truly empowers
        everyone. This is what drives me as a developer.
      </p>
      <p className="text-[16px]">
        At UCLA, I&apos;ve had the opportunity to explore applications of
        tech beyond what I&apos;ve seen growing up, and I&apos;m inspired by how
        software can create or improve opportunities for anyone, anywhere.
        I&apos;ve ideated and shipped products for non-profits and student
        communities, each with different stories, workflows, and challenges.
        Every project has reinforced my belief that good engineering isn&apos;t
        just about performance or scalability. It&apos;s about listening - to
        peers, mentors, designers, product designers, and most importantly, to
        the people we&apos;re building for.
      </p>
      <p className="text-[16px]">
        Today, I&apos;m a software engineer who speaks through empathy and code,
        and I&apos;m on a mission to close the gap between what technology can do and who gets
        to use it. When I&apos;m not on my laptop, music on blast, you can find
        me taking walks around campus (& logging them on Strava), saving my next at-home recipe, or
        rewatching my favorite shows for the 100th time.
      </p>
    </section>
  );
}
