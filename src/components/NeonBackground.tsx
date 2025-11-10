import homeBg from "@/assets/placeholders/dark/home-bg.svg";

const NeonBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20">
      <img
        src={homeBg}
        alt="Neon Background"
        className="w-full h-full object-cover opacity-90 select-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.15),transparent_40%,rgba(167,139,250,0.15))] mix-blend-screen" />
    </div>
  );
};

export default NeonBackground;
