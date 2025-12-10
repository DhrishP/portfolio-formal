import Navbar from "./(Header)/Navbar";
import Herobody from "./(Header)/Herobody";
import Skill from "./(Skills)/Skill";
import Project from "./(Projects)/Project";
import Contact from "./(Contact)/Contact";
import AppNavbar from "@/components/app-navbar";
import Experience from "./(Experience)/Experience";
import BlogPreview from "./(Blogs)/BlogPreview";
import VideoPreview from "./(Videos)/VideoPreview";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-primary-foreground">
        <Navbar />
        <Herobody />
        <AppNavbar />
      </div>
      <div className="h-full w-screen">
        <Skill />
      </div>
      <div className="h-full w-screen">
        <Experience />
      </div>
      <div className="h-full w-screen pb-24">
        <Project />
      </div>
      <div className="w-screen bg-background">
        <BlogPreview />
      </div>
      <div className="w-screen bg-secondary/20">
        <VideoPreview />
      </div>
      <div className="h-[80vh] md:h-full translate-y-24 w-screen">
        <Contact />
      </div>
    </>
  );
}
