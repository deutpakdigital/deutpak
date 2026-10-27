export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover opacity-90 brightness-105"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
