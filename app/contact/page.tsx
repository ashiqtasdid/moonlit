import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactC from "@/components/contact";
import Plan from "@/components/plan";
import Card from "@/components/card";

export default function Contact() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <div className="pt-36 text-white mx-4 md:mx-28">
        <h1 className="text-6xl font-bold ">How can we help?</h1>
        <p className="pt-5 font-semibold text-lg">
          Any questions or concerns? Don&apos;t hesitate to get in touch!
        </p>
      </div>
      <ContactC />
      <Plan />
      <Card />
      <Footer />
    </div>
  );
}
