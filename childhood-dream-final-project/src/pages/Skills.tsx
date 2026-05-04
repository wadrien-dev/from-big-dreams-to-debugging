/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Page that displays the skill table component.
*/

import SkillTable from "../components/SkillTable";
import skillsAvatar from "../assets/skills-avatar.png";

function Skills() {
  return (
    <section className="page-section">
      <div className="container">
        <SkillTable />
        <div className="page-avatar-wrapper">
            <img src={skillsAvatar} alt="Skills lab avatar" className="page-avatar" />
        </div>
      </div>
    </section>
  );
}

export default Skills;