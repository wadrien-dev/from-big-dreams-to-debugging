/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Reusable hero section component for the main page introduction.
*/

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="hero-section text-center">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default HeroSection;