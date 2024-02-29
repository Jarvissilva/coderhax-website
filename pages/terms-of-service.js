import Link from "next/link";
import Head from "components/head";

export default function TermsOfService() {
  return (
    <>
      <Head
        title="Terms Of Service - Coderhax"
        description="Know about our terms of service"
        url="/terms-of-service"
        index={true}
      />
      <div className="bg-white p-[clamp(1.25rem,5vw,2rem)] space-y-[clamp(1.25rem,5vw,1.5rem)] border border-gray-200 rounded-md">
        <h1 className="text-center text-[clamp(2rem,5vw,2.5rem)] font-black">
          Terms Of Service
        </h1>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          These terms of service ("Terms") govern your use of our code sharing
          website ("Service"). By using our Service, you agree to these Terms.
          If you do not agree to these Terms, do not use our Service.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Use of Service
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You must be at least 13 years old to use our Service. You may use our
          Service only for lawful purposes and in accordance with these Terms.
          You are responsible for maintaining the confidentiality of your
          account and password, and for restricting access to your account. You
          agree to accept responsibility for all activities that occur under
          your account.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">Content</h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our Service allows you to post code snippets and other content. You
          retain ownership of your content, but by posting it on our Service,
          you grant us a non-exclusive, worldwide, royalty-free, transferable,
          and sublicensable license to use, copy, modify, distribute, publish,
          and process your content in any media or format.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You represent and warrant that you own or have the necessary licenses,
          rights, consents, and permissions to use and authorize us to use your
          content as necessary to operate our Service and to provide the
          features and functionality of our Service.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We reserve the right to remove any content that violates these Terms
          or is otherwise objectionable.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Intellectual Property
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our Service and its entire contents, features, and functionality are
          owned by us or our licensors and are protected by United States and
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You may not copy, modify, distribute, sell, or lease any part of our
          Service, nor may you reverse engineer or attempt to extract the source
          code of our Service.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Prohibited Conduct
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You may not use our Service for any illegal or unauthorized purpose.
          You may not:
        </p>
        <ul className="list-disc text-[clamp(1rem,5vw,1.2rem)] font-normal pl-8">
          <li>
            Use our Service in any way that violates these Terms or any
            applicable law or regulation
          </li>
          <li>
            Use our Service to transmit any viruses, malware, or other harmful
            code
          </li>
          <li>
            Interfere with or disrupt the operation of our Service or the
            servers or networks used to make our Service available
          </li>
          <li>
            Harass, bully, intimidate, or harm any other user of our Service
          </li>
          <li>
            Impersonate any person or entity or falsely state or misrepresent
            your affiliation with a person or entity
          </li>
          <li>
            Collect or store personal information about other users of our
            Service without their consent
          </li>
          <li>
            Engage in any other conduct that restricts or inhibits any other
            person from using or enjoying our Service
          </li>
        </ul>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our total liability to you for any claims arising out of or in
          connection with these Terms or your use of our Service shall not
          exceed the amount paid by you, if any, to us for the use of our
          Service.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Indemnification
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You agree to indemnify, defend, and hold us harmless from and against
          any claims, liabilities, damages, losses, costs, expenses, or fees
          arising out of or in connection with your use of our Service or your
          violation of these Terms.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Modifications to Terms
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may modify these Terms from time to time. The most current version
          will be posted on our website, and we will notify you of any
          significant changes.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Termination
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may terminate your access to our Service at any time and for any
          reason, without prior notice.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Governing Law
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          These Terms shall be governed by and construed in accordance with the
          laws of the State of [insert state], without giving effect to any
          principles of conflicts of law.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Dispute Resolution
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If you have any concerns or disputes about our Service or these Terms,
          please contact us first. We will attempt to resolve any issues
          informally and in good faith.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If we cannot resolve any disputes informally, any claim or dispute
          arising out of or in connection with these Terms or your use of our
          Service shall be finally settled by arbitration administered by the
          American Arbitration Association ("AAA") in accordance with the AAA's
          Commercial Arbitration Rules. The arbitration shall be conducted in
          the English language and shall be held in [insert city and state]. The
          arbitration award shall be final and binding, and judgment on the
          award rendered by the arbitrator(s) may be entered in any court having
          jurisdiction.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Miscellaneous
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          These Terms constitute the entire agreement between you and us with
          respect to your use of our Service, and supersede all prior or
          contemporaneous communications and proposals, whether oral or written,
          between you and us.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If any provision of these Terms is held to be invalid or
          unenforceable, such provision shall be struck and the remaining
          provisions shall be enforced.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          Our failure to enforce any right or provision of these Terms will not
          be deemed a waiver of such right or provision.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          You may not assign these Terms or your rights or obligations under
          these Terms without our prior written consent.
        </p>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          We may assign these Terms or any of our rights or obligations under
          these Terms without your prior written consent.
        </p>
        <h2 className="text-[clamp(1.5rem,5vw,2rem)] font-semibold">
          Contact Us
        </h2>
        <p className="text-[clamp(1rem,5vw,1.2rem)] font-normal space-y-4 leading-loose">
          If you have any questions or concerns about these terms of service
          then feel free to ask using our{" "}
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
