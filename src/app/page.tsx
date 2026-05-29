import Link from "next/link";
import Carousel from "./carousel";

const projects = [
  { src: "/web/Web1.jpg", alt: "Cash App – Savings", label: "Cash App – Savings" },
  { src: "/web/Web2.jpg", alt: "Cash App – Card Studio", label: "Cash App – Card Studio" },
  { src: "/web/Web3.jpg", alt: "Cash App – Card Tab", label: "Cash App – Card Tab" },
  { src: "/web/Web4.jpg", alt: "Cash App – Teens", label: "Cash App – Teens" },
  { src: "/web/Web5.jpg", alt: "Messenger – Status/Friends Tab Concept", label: "Messenger – Status/Friends Tab Concept" },
  { src: "/web/Web6.jpg", alt: "Pinterest – Tried-It", label: "Pinterest – Tried-It" },
  { src: "/web/Web7.jpg", alt: "Pinterest – Business Profiles", label: "Pinterest – Business Profiles" },
  { src: "/web/Web8.jpg", alt: "Apple – Notes (iOS 7 to 13)", label: "Apple – Notes (iOS 7 to 13)" },
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
        Product Designer based in New York. I started as a graphic designer in
        Stockholm before moving to the US in 2011 to join Apple. Since then
        I&apos;ve worked at Pinterest, Facebook Messenger, Cash App, and most
        recently Square.
      </p>

      <section className="projects">
        <h2 className="section-heading">Selected projects 2011–2025:</h2>
      </section>

      <Carousel projects={projects} />

    </main>
  );
}
