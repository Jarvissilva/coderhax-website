import Link from "next/link";
import Head from "components/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head
        title="Privacy Policy - Coderhax"
        description="We respect the privacy of our users and are committed to protecting
        their personal information. This privacy policy outlines the types of
        information we collect from users, how we use that information, and
        how we protect it."
        url="/privacy-policy"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <h1 className="text-center text-[clamp(2rem,5vw,2.5rem)] font-black">
          Privacy Policy
        </h1>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We respect the privacy of our users and are committed to protecting
          their personal information. This privacy policy outlines the types of
          information we collect from users, how we use that information, and
          how we protect it.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Information Collected
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may collect the following personal information from users who
          create an account on our website:
        </p>
        <ul className="list-disc text-[clamp(1rem,5vw,1.2rem)] font-normal pl-8">
          <li>Email address</li>
          <li>Username</li>
          <li>Name</li>
        </ul>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We also collect non-personal information such as IP address, browser
          type, operating system, and the pages you visit on our website.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Use of Information
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We use the personal information collected from users to:
        </p>
        <ul className="list-disc text-[clamp(1rem,5vw,1.2rem)] font-normal pl-8">
          <li>Create and manage user accounts</li>
          <li>Allow users to post code snippets on our website</li>
          <li>Send email notifications about account activity</li>
          <li>Improve our website and services</li>
          <li>Respond to user inquiries and support requests</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may also use non-personal information to analyze trends, administer
          the website, and track user behavior.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Sharing of Information
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We do not share or sell personal information with third parties,
          except in the following situations:
        </p>
        <ul className="list-disc text-[clamp(1rem,5vw,1.2rem)] font-normal pl-8">
          <li>With your consent</li>
          <li>To comply with legal obligations or law enforcement requests</li>
          <li>
            To protect our rights, property, or safety, or that of our users or
            others
          </li>
        </ul>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may share non-personal information with third-party service
          providers who assist us in operating our website and providing
          services to our users.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Security
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We take reasonable measures to protect the personal information of our
          users from unauthorized access, disclosure, alteration, and
          destruction. However, no security system is completely secure, and we
          cannot guarantee the absolute security of your personal information.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">Cookies</h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We use cookies to improve the user experience on our website. A cookie
          is a small text file that is stored on your device when you visit our
          website. Cookies help us remember your preferences, analyze how users
          interact with our website, and personalize your experience.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You can disable cookies in your browser settings, but this may affect
          your ability to use certain features of our website.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Third-Party Links
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our website may contain links to third-party websites that are not
          owned or controlled by us. We are not responsible for the privacy
          practices or content of these websites.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Children's Privacy
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our website is not intended for use by children under the age of 13.
          We do not knowingly collect personal information from children under
          the age of 13. If we become aware that we have collected personal
          information from a child under the age of 13, we will take steps to
          delete that information.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Changes to Privacy Policy
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may update this privacy policy from time to time. The most current
          version will be posted on our website, and we will notify you of any
          significant changes.
        </p>

        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Contact Us
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If you have any questions or concerns about these privacy policy then
          feel free to ask using our{" "}
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
