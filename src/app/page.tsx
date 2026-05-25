import Container from "@/components/Container";
import MyButton from "@/components/MyButton";
import SkillCard from "@/components/SkillCard";
import { ChartNoAxesGantt } from "lucide-react";

import { skills } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";
import FeaturesCard from "@/components/FeaturesCard";
import Navigation from "@/components/Navigation";
import { personal, realWorld } from "@/data/projects";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

const Page = () => {
  return (
    <>
      <header
        className="
          sticky top-0 z-40 text-foreground overflow-hidden
          p-5 shadow bg-background
        ">
        <div className="max-w-7xl mx-auto flex gap-6 items-center justify-between">
          <div className="flex gap-3 items-center">
            <Navigation />
            <h1 className="text-xl font-semibold tracking-wide">MKGNRL</h1>
          </div>

          <div className="flex items-center justify-center gap-3">
            <nav className="hidden sm:flex gap-3 text-sm tracking-wide">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Connect</a>
            </nav>

            {/* <button>
                  <Moon 
                    size={18}
                    className="text-primary cursor-pointer hover:scale-105 transition"
                  />
              </button> */}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="min-h-[60vh] sm:h-[70vh] scroll-mt-16 pt-32 sm:pt-0 px-12 sm:px-24">
          <Container className="relative -top-10 flex flex-col gap-3 items-center sm:items-start justify-center">
            <p className="text-md sm:text-xl sm:mb-4">
              <span className="text-primary/70">Hey there!</span>
              👋
            </p>
            <h1 className="text-3xl text-nowrap sm:text-4xl font-bold tracking-wide">
              I&apos;m Miko Generale,
            </h1>
            <p className="text-sm sm:text-lg sm:w-xl text-wrap text-center sm:text-start text-primary/70">
              An experienced Software Engineer crafting high-quality web,
              mobile, and backend solutions.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <MyButton type="outline">
                <a
                  href="#projects"
                  className="flex items-center py-3 px-5 justify-center gap-3">
                  <ChartNoAxesGantt />
                  <p className="text-nowrap">View My Projects</p>
                </a>
              </MyButton>

              <MyButton type="solid" className="w-full">
                <Link
                  href="https://github.com/mikogenerale"
                  target="_blank"
                  className="flex items-center justify-center gap-3 py-3 px-5">
                  <Image
                    src="../../svg/github-mark-white.svg"
                    width={25}
                    height={25}
                    alt="github"
                    className="white"
                  />
                  <p className="text-nowrap">Visit My Github</p>
                </Link>
              </MyButton>
            </div>
          </Container>
        </section>

        <section
          id="projects"
          className="relative h-fit scroll-mt-16 pt-8 md:pt-16 pb-24 bg-primary text-background">
          <Container className="flex flex-col items-center gap-24 sm:gap-36  justify-start relative z-30">
            <SectionHeader
              heading="Real-World Projects"
              subHeading="Projects that showcases my ability to turn business ideas into real products.">
              <FeaturesCard projects={realWorld} />
            </SectionHeader>

            <SectionHeader
              heading="Personal Projects."
              subHeading="Project I have built to improve my skills and explore new technologies.">
              <FeaturesCard projects={personal} />
            </SectionHeader>
          </Container>
        </section>

        <section
          id="skills"
          className="min-h-[90vh] scroll-mt-16 pt-8 md:pt-16">
          <Container className="flex flex-col items-center justify-start">
            <SectionHeader
              heading="Skills & Technologies"
              subHeading="Technologies I work to bring ideas to life."
              isLightMode={true}>
              <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </SectionHeader>
          </Container>
        </section>

        <section
          id="experience"
          className="scroll-mt-16 pt-16 md:pt-16 pb-24 cursor-grab">
          <Container className="flex flex-col items-center justify-start">
            <SectionHeader
              heading="Professional Experience"
              subHeading="My journey through the software engineering and development field."
              isLightMode={true}
            >
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {experience.map((exp) => (
                  <ExperienceCard key={exp.company} data={exp} />
                ))}
              </div>
            </SectionHeader>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
