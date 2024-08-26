import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Card from "@/components/card";

export default function Privacy() {
  return (
    <div className="relative bg-blue-950 text-white">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <div className="container mx-auto pt-36 p-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            luctus urna sed urna ultricies ac tempor dui sagittis. In
            condimentum facilisis porta.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            dui lacus. Cras ultricies ligula sed magna dictum porta. Donec
            rutrum congue leo eget malesuada.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-lg">
              Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
            </li>
            <li className="text-lg">In condimentum facilisis porta.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Information
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget
            felis porttitor volutpat.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            4. Sharing of Information
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            5. Your Privacy Choices
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            porttitor accumsan tincidunt. Donec rutrum congue leo eget
            malesuada.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lorem ut libero malesuada feugiat.
          </p>
        </section>
      </div>
      <Card />
      <Footer />
    </div>
  );
}
