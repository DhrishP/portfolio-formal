import Navbar from "./(Header)/Navbar";
import Herobody from "./(Header)/Herobody";
import About from "./(About)/About";
import Skill from "./(Skills)/Skill";
import Project from "./(Projects)/Project";
import Contact from "./(Contact)/Contact";
import AppNavbar from "@/components/app-navbar";
import Experience from "./(Experience)/Experience";
import VideoSection from "./(VideoSection)/VideoSection";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-primary-foreground">
        <Navbar />
        <Herobody />
        <AppNavbar />
      </div>
      <div className="h-full md:h-[85vh] w-screen">
        <About />
      </div>
      <div className="h-full w-screen">
        <Skill />
      </div>
      <div className="h-full w-screen">
        <Experience />
      </div>
      <div className="h-full w-screen">
        <Project />
      </div>
      <div className="h-full w-screen">
        <VideoSection />
      </div>
      <div className="h-[80vh] md:h-full translate-y-24 w-screen">
        <Contact />
      </div>
    </>
  );
}