import React, { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import bsLogo from "../assets/img/BaseScriptProj.png";
import fundus from "../assets/img/OcularProjLogo.png";
import mealPlan from "../assets/img/MSAMealPlanProjNew.png";
import makeCloud from "../assets/img/MakeCloudProj.png";
import Timestamps from "../assets/img/TimestampsProj.png";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (!projectsRef.current) return;
      const rect = projectsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "BaseScript",
      description: "An open-source programming database founded by me :)",
      stacks: "· typescript · react · python · C ·",
      image: bsLogo,
    },
    {
      title: "MSA Meal Plan ",
      description: "Finalizing the meal plan checkout system for the MSA",
      stacks: "· typescript · firebase · react ·",
      image: mealPlan,
    },
    {
      title: "Ocular Disease Identifier",
      description:
        "API and front-end for our GDSC's ocular disease identifier project",
      stacks: "· flask · react ·",
      image: fundus,
    },
    {
      title: "MakeCloud",
      description:
        "An AI-powered cloud assistant that simplifies cloud resource provisioning",
      stacks: "· typescript · gemini ai · python ·",
      image: makeCloud,
    },
    {
      title: "Timestamps",
      description:
        "A VR game allowing users to speak a moment of history into existence",
      stacks: "· unity · gemini ai · c# · skybox ai ·",
      image: Timestamps,
    },
  ];

  return (
    <div
      id="projects"
      className={`projects-carousel ${isVisible ? "visible" : ""}`}
      ref={projectsRef}
    >
      <h2 className="section-title animated-underline">— projects? —</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={index}>
              <div className="project-item">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-stacks">{project.stacks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="projects-button" onClick={scrollPrev}>
        prev
      </button>
      <button className="projects-button" onClick={scrollNext}>
        next
      </button>
    </div>
  );
};
