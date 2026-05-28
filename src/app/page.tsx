import Link from "next/link";
import Carousel from "./carousel";

const projects = [
  { src: "/web/Gustaf.png", alt: "Apple Notes" },
  { src: "/web/Gustaf-1.png", alt: "Pinterest Pin" },
  { src: "/web/Gustaf-2.png", alt: "Pinterest Profile" },
  { src: "/web/Gustaf-3.png", alt: "Messenger Status" },
  { src: "/web/Gustaf-4.png", alt: "Cash App Savings" },
  { src: "/web/Gustaf-5.png", alt: "Cash App Card" },
  { src: "/web/Gustaf-6.png", alt: "Cash App Cash Card" },
  { src: "/web/Gustaf-7.png", alt: "Square Family" },
];

export default function Home() {
  return (
    <main className="page">
      <header className="header">
        <h1 className="name">Gustaf Engström</h1>
        <nav className="contact">
          <Link
            href="https://www.linkedin.com/in/gustafengstrom/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </Link>
          <Link href="mailto:gustafengstrom@gmail.com" className="contact-link">
            Email
          </Link>
        </nav>
      </header>

      <p className="bio">
        Product Designer based in New York. I began as a graphic designer in
        Stockholm, Sweden, but moved to the US in 2011 to join Apple. Since then
        I&apos;ve worked at Pinterest, Facebook Messenger, Cash App and now at
        Square, where I lead the POS Design Team.
      </p>

      <section className="projects">
        <h2 className="section-heading">Selected projects 2011–2024:</h2>
      </section>

      <Carousel projects={projects} />

    </main>
  );
}
