import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const navigateToPokedex = () => {
    navigate("/find");
  };
  return (
    <section className="h-screen w-screen overflow-hidden  flex justify-center ">
      <div className=" flex flex-col  text-center absolute mt-40 z-40 ">
        <h2 className=" font-semibold text-5xl">Find your pokemon</h2>
        <div className="flex flex-row gap-5 justify-center py-8">
          <Button
            onClick={navigateToPokedex}
            colorScheme="grey"
            variant="outline"
            w={200}
          >
            Quick Find
          </Button>
          <Button colorScheme="grey" variant="outline" w={200}>
            Browse
          </Button>
        </div>
      </div>
      <video
        className=" h-full w-full object-cover object-center "
        src="/public/hero_video.mp4"
        autoPlay
        muted
        loop
      ></video>
    </section>
  );
}

export default HeroSection;
