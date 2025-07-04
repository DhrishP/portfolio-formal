import VideoGallery from "./components/VideoGallery";
import Navbar from "../(Header)/Navbar";
import AppNavbar from "@/components/app-navbar";

export const metadata = {
  title: 'Videos - Dhrish Parekh Portfolio',
  description: 'Watch project demonstrations and learn more about my development journey through video content.',
}

export default function VideosPage() {
  return (
    <>
      <div className="min-h-screen bg-primary-foreground">
        <Navbar />
        <div className="pt-20 md:pt-24">
          <VideoGallery />
        </div>
        <AppNavbar />
      </div>
    </>
  );
}