function HeroSection() {
  return (
    <div>
      <video
        className=" h-full w-full object-cover object-center"
        src="/public/hero_video.mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
}

export default HeroSection;
