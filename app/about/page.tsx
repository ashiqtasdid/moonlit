import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function About() {
  return (
    <div className="relative bg-blue-950 text-white">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-center"
        style={{
          backgroundImage: "url(/assets/about.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950"></div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-0">
          <span className="bg-gradient-to-b from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
            Lilypad
          </span>
        </h1>
        <p className="mt-4 text-lg md:mx-36 md:text-xl lg:text-2xl max-w-3xl mx-auto relative z-0">
          Providing affordable, high-performance game servers to customers
          around the world
        </p>
      </div>

      {/* Mission Section */}
      <div className="px-4 py-20 bg-blue-950 text-center">
        <h2 className="text-3xl font-semibold">Our mission</h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg max-w-4xl mx-auto text-gray-400">
          At Lilypad, our mission is to empower communities by providing
          high-performance game servers that are not only affordable but also
          reliable and scalable. We understand the importance of a seamless
          gaming experience, and we are dedicated to ensuring that our servers
          run smoothly 24/7, allowing you to focus on what matters most—playing
          and growing your community.
          <br />
          <br />
          We believe that every gamer deserves the best possible infrastructure,
          regardless of their budget. That&apos;s why we&apos;ve designed our
          services to be flexible and accessible, catering to both small private
          servers and large public communities. Our commitment to innovation
          drives us to continually improve our technology, ensuring that we stay
          ahead of the curve in an ever-evolving industry.
          <br />
          <br />
          Beyond just providing servers, we aim to create a support network that
          stands by you every step of the way. Our team of experts is always
          ready to assist with any challenges you may face, offering guidance
          and solutions to keep your server running at its best. We take pride
          in the trust our customers place in us, and we work tirelessly to
          maintain that trust through exceptional service and a relentless focus
          on quality.
          <br />
          <br />
          Join us in our mission to build stronger, more connected gaming
          communities. Together, we can create a world where every player has a
          place to call home, and every server owner has the tools they need to
          succeed.
        </p>
      </div>
      <Card />
      <Footer />
    </div>
  );
}
