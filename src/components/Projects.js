import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import bsLogo from "../assets/img/bsLogo 3000x2244.png";
import fundus from "../assets/img/fundus.jpg";
import mealPlan from "../assets/img/mealPlan.png";

/* 
TODO:
- Still have to hyperlink the Projects section into this
- then have transitions on refresh for it
- hyperlink project images to the github repo
- reduce line spacing in footer
*/

export const Projects = () => {
  const projects = [
    {
      title: "BaseScript",
      description: "An open-source programming database founded by me :)",
      stacks: "· typescript · react · python · C ·",
      image: bsLogo,
    },
    {
      title: "Ocular Disease Identifier",
      description:
        "API and front-end for our GDSC's ocular disease identifier project",
      stacks: "· flask · react ·",
      image: fundus,
    },
    {
      title: "MSA Meal Plan ",
      description: "Finalizing the meal plan checkout system for the MSA",
      stacks: "· typescript · firebase · react ·",
      image: mealPlan,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="projects-carousel">
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
      {/* Add navigation buttons */}
      <button className="projects-button" onClick={scrollPrev}>
        prev
      </button>
      <button className="projects-button" onClick={scrollNext}>
        next
      </button>
    </div>
  );
};
