/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Page that explains future goals connected to the childhood dream.
*/

import futureAvatar from "../assets/future-avatar.png";

function FuturePlan() {
  return (
    <section className="page-section">
      <div className="container content-box">
        <h1>Future Plan</h1>
        <div className="page-avatar-wrapper">
            <img src={futureAvatar} alt="Future plan avatar" className="page-avatar" />
        </div>

        <p>
          My future plan is to continue building confidence as a software
          developer. I want to keep improving my React, TypeScript, HTML, CSS,
          JavaScript, and troubleshooting skills while creating projects that
          show both technical growth and personality.
        </p>

        <p>
          This project is one step in that journey. It shows that I can create a
          routed React application, organize components, use TypeScript, manage
          data with state, and design a clean user experience.
        </p>

        <div className="plan-grid">
          <div className="plan-box">
            <h3>Step 1</h3>
            <p>Keep practicing React and TypeScript through small projects.</p>
          </div>

          <div className="plan-box">
            <h3>Step 2</h3>
            <p>Build a portfolio that shows creativity, leadership, and technical skills.</p>
          </div>

          <div className="plan-box">
            <h3>Step 3</h3>
            <p>Improve debugging skills by learning how to read errors and fix issues.</p>
          </div>

          <div className="plan-box">
            <h3>Step 4</h3>
            <p>Continue growing toward a software developer career with confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuturePlan;