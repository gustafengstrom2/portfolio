"use client";

import Image from "next/image";
import { useRef, useCallback, useState, useEffect } from "react";

interface Project {
  src: string;
  alt: string;
}

export default function Carousel({ projects }: { projects: Project[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const track = container.firstElementChild;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;

    const scrollTarget = slide.offsetLeft - container.offsetLeft;
    container.scrollTo({ left: scrollTarget, behavior: "smooth" });
  }, []);

  const handleSlideClick = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const track = container.firstElementChild;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;

    const containerRect = container.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();

    const isFullyVisible =
      slideRect.left >= containerRect.left - 1 &&
      slideRect.right <= containerRect.right + 1;

    if (!isFullyVisible) {
      scrollToIndex(index);
    }
  }, [scrollToIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const track = container.firstElementChild;
      if (!track) return;

      const containerLeft = container.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Infinity;

      for (let i = 0; i < track.children.length; i++) {
        const slide = track.children[i] as HTMLElement;
        const dist = Math.abs(slide.getBoundingClientRect().left - containerLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }

      setCurrentIndex(closest);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < projects.length - 1;

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="carousel" ref={scrollRef}>
        <div className="carousel-track">
          {projects.map((project, index) => (
            <div
              key={project.src}
              className="carousel-slide"
              onClick={() => handleSlideClick(index)}
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={1600}
                height={900}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>

      {hovered && canGoLeft && (
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => scrollToIndex(currentIndex - 1)}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {hovered && canGoRight && (
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => scrollToIndex(currentIndex + 1)}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      )}
    </div>
  );
}
