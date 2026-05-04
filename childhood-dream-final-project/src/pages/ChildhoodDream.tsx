/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Page that explains the childhood dream and personal interest.
*/

import { dreamFacts } from "../data/dreamData";
import dreamAvatar from "../assets/dream-avatar.png";

function ChildhoodDream() {
  return (
    <section className="page-section">
      <div className="container content-box">
        <h1>My Childhood Dream</h1>
        <div className="page-avatar-wrapper">
            <img src={dreamAvatar} alt="Childhood dream avatar" className="page-avatar" />
        </div>

        <p>
          When I was younger, I imagined having a career where I could be
          creative, helpful, and confident. I wanted to do something that made
          people feel supported and made a real difference.
        </p>

        <p>
          As I grew older, that dream started connecting with technology.
          Software development gives me a way to create tools, solve problems,
          organize information, and build something useful from scratch.
        </p>

        <p>
          This project represents that connection: the childhood dream of doing
          something meaningful and the adult goal of becoming a strong,
          creative, and capable software developer.
        </p>

        <h2>Why This Dream Still Matters</h2>

        <ul className="styled-list">
          {dreamFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ChildhoodDream;