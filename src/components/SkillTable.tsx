/*
  Name: Woodna Adrien
  Date: May 2026
  Assignment: Week 7 Final Project
  Description:
  Table component that displays skill records and allows users to add
  and remove records using React state.
*/

import { useState } from "react";
import { type DreamSkill, startingSkills } from "../data/dreamData";

function SkillTable() {
  const [skills, setSkills] = useState<DreamSkill[]>(startingSkills);
  const [skillName, setSkillName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [importance, setImportance] = useState<string>("");

  /*
    addSkill creates a new skill record and adds it to the table.
    The function checks that each input has text before adding the record.
  */
  function addSkill(): void {
    if (skillName.trim() === "" || category.trim() === "" || importance.trim() === "") {
      alert("Please complete all fields before adding a skill.");
      return;
    }

    const newSkill: DreamSkill = {
      id: Date.now(),
      skillName: skillName,
      category: category,
      importance: importance
    };

    setSkills([...skills, newSkill]);
    setSkillName("");
    setCategory("");
    setImportance("");
  }

  /*
    removeSkill removes a record from the table by using the selected id.
  */
  function removeSkill(id: number): void {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
  }

  return (
    <div className="content-box">
      <h1>Skills Table</h1>

      <p>
        This table stores temporary data using React state. New records can be
        added, and existing records can be removed.
      </p>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Skill name"
            value={skillName}
            onChange={(event) => setSkillName(event.target.value)}
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Why it matters"
            value={importance}
            onChange={(event) => setImportance(event.target.value)}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100" onClick={addSkill}>
            Add
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Skill</th>
              <th>Category</th>
              <th>Importance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id}>
                <td>{skill.skillName}</td>
                <td>{skill.category}</td>
                <td>{skill.importance}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeSkill(skill.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SkillTable;