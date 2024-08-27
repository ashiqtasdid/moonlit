import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Card from "@/components/card";

export default function Terms() {
  return (
    <div className="relative bg-blue-950 text-white">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <div className="container mx-auto pt-36 p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 lg:col-start-3">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-2xl pb-10 text-gray-300 font-semibold">
            Last amended 20/8/24
          </p>
      <hr className="my-4 text-gray-500"/>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Saple.Net Game Hosting! By accessing or using our game
              hosting services, you agree to comply with and be legally bound by
              the terms and conditions set forth in this legally binding
              contract (&quot;OS&quot;). It is imperative that you carefully
              read and understand these terms. If you do not agree with these
              terms, please refrain from using our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              2. Service Description
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Saple.Net offers game server hosting services to individuals and
              businesses. Our services encompass server hosting, server
              maintenance, technical support, and access to our billing portal,
              located at billing.saple.net.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              3. Billing and Payments
            </h2>
            <ul className="list-disc text-gray-300 list-inside mt-4 space-y-2">
              <li className="text-lg">
                3.1. Billing Portal: Our billing portal, available at
                billing.saple.net, allows you to manage your account, access
                invoices, and facilitate payments.{" "}
              </li>
              <li className="text-lg">
                3.2. Payment: Usage of our services obligates you to pay all
                relevant fees and charges, as specified on our website. Payment
                terms, including subscription fees and payment schedules, are
                subject to change. It is your responsibility to stay informed
                regarding pricing details.{" "}
              </li>
              <li className="text-lg">
                {" "}
                3.3. Payment Methods: We accept various payment methods, as
                detailed on our billing portal. You are accountable for
                maintaining up-to-date and accurate payment information.
              </li>
              <li className="text-lg">
                {" "}
                3.4. Refunds: Our refund policy, outlined on our website,
                delineates the conditions under which refunds may be granted. We
                retain the right to modify our refund policy without prior
                notice.
              </li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Use of Services</h2>
            <ul className="list-disc text-gray-300 list-inside mt-4 space-y-2">
              <li className="text-lg">
                4.1. Acceptable Use: Use of our services is contingent upon
                adherence to all pertinent laws and regulations in the United
                States and the European Union. You must not engage in any
                unlawful, harmful, or malicious activities, including hacking,
                cheating, or harassment.{" "}
              </li>
              <li className="text-lg">
                4.2. Server Content: You are solely responsible for all content
                you upload, store, or distribute via our servers. We reserve the
                right to remove any content that violates our policies,
                infringes upon the rights of others, or is considered
                inappropriate.
              </li>
            </ul>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              5. Service Availability and Support
            </h2>
            <ul className="list-disc text-gray-300 list-inside mt-4 space-y-2">
              <li className="text-lg">
                5.1. Uptime Guarantee: While we make reasonable efforts to
                maintain server uptime, we do not guarantee uninterrupted
                service. Downtime may occur for scheduled maintenance, server
                upgrades, or unforeseen circumstances.
              </li>
              <li className="text-lg">
                5.2. Support: We offer customer support services through various
                channels, including our website and support tickets. We aim to
                provide timely assistance, but we do not guarantee immediate or
                personalised support. Response times may fluctuate based on the
                nature and volume of inquiries.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We reserve the unequivocal right to terminate your access to our
              services at our discretion, with or without cause, and without
              prior notice. In instances of termination, we may or may not
              provide information regarding the reason for such action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
            <p className="text-lg leading-relaxed">
              Our commitment to protecting your personal information is detailed
              in our Privacy Policy, accessible on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We retain the right to update these terms periodically to reflect
              service changes or legal requirements. Material changes will be
              communicated, and your continued use of our services will indicate
              acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To the maximum extent permissible by applicable law, Saple.Net
              disclaims all liability for direct, indirect, incidental, special,
              consequential, or punitive damages arising from or related to the
              use of our services. This includes but is not limited to loss of
              data, service interruption, or financial losses.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              10. Governing Law and Jurisdiction
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              This agreement is governed by and construed in accordance with the
              laws of the United States and the European Union as applicable.
              Disputes arising from or related to this agreement fall under the
              exclusive jurisdiction of the competent courts within these
              jurisdictions.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you have any questions, concerns, or require further
              information regarding this TOS, please feel free to reach out to
              our dedicated legal team at legal@saple.net.
            </p>
          </section>
        </div>
      </div>
      <Card />
      <Footer />
    </div>
  );
}
