/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Home page that introduces the childhood dream final project.
*/

import HeroSection from "../components/HeroSection";
import InfoCard from "../components/InfoCard";
import avatarImage from "../assets/software-developer-avatar.png";

function Home() {
  return (
    <section className="page-section">
      <div className="container">
        <HeroSection
          title="From Big Dreams to Debugging"
          subtitle="A React TypeScript final project about creativity, problem-solving, leadership, and growing into a future software developer."
        />

        <div className="avatar-wrapper mt-4">
          <img
            src={avatarImage}
            alt="Software developer avatar"
            className="developer-avatar"
          />
        </div>

        <div className="quote-box mt-4">
          “Keep showing up. Keep learning. Keep improving.”
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <InfoCard
              title="Creative Spark"
              description="As a child, I was drawn to careers that felt meaningful, creative, and helpful. That same spark now connects to building web applications."
            />
          </div>

          <div className="col-md-4">
            <InfoCard
              title="Problem Solver Energy"
              description="Software development is not just typing code. It is troubleshooting, organizing ideas, fixing errors, and finding better ways to help people."
            />
          </div>

          <div className="col-md-4">
            <InfoCard
              title="Final Project Build"
              description="This app uses React Router, TypeScript, reusable components, temporary data, and a skills table with add and remove features."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;