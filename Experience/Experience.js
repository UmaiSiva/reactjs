import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section main-content is-medium py-4 exp-color">
      <h2 className="has-text-centered has-text-white title is-3">
        Experience
      </h2>
      <div className="experience has-text-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4 ">
              <div>
                <strong className="has-text-white">
                  Web Developer at IFS Inc.
                </strong>
              </div>
              <div>
                <em>July 2022 - Present</em>
              </div>
            </div>
            <div className="column is-4">
              <div>
                <strong className="has-text-white">
                  Software Developer Intern at WSO2
                </strong>
              </div>
              <div>
                <em>September 2021 - February 2022</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
