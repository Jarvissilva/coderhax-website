import Link from "next/link";
import Head from "components/head";

export default function AboutUs() {
  return (
    <>
      <Head
        title="About Us - Coderhax"
        description="Welcome to coderhax the ultimate code snippets website! We are a team
        of developers who are passionate about coding and believe in the power
        of sharing knowledge and collaborating with others."
        url="/about-us"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <h1 className="text-center text-[clamp(2rem,5vw,2.5rem)] font-black">
          About Us
        </h1>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Welcome to coderhax the ultimate code snippets website! We are a team
          of developers who are passionate about coding and believe in the power
          of sharing knowledge and collaborating with others.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our platform was created with the goal of making it easy for
          developers of all levels to share and discover code snippets, and to
          connect with like-minded individuals from all over the world.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          At our core, we believe that the open sharing of code is crucial to
          the growth and advancement of the tech industry. We strive to create
          an environment that is inclusive, collaborative, and supportive of all
          members of our community.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We are committed to providing a user-friendly and secure platform that
          prioritizes the privacy and security of our users' personal
          information.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We are constantly working to improve and enhance our platform to meet
          the evolving needs of our community. We welcome your feedback and
          suggestions on how we can make our platform better.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Thank you for being a part of our community and for sharing your
          passion for coding with us. Together, we can create a brighter future
          for the tech industry!
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If you have any questions or concerns about coderhax then feel free to
          ask using our{" "}
          <Link
            href="/contact-us"
            className="text-blue-600 hover:text-blue-400"
          >
            contact us page.
          </Link>
        </p>
      </div>
    </>
  );
}
