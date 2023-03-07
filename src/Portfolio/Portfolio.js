import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section
      className="main-content is-medium py-4 project-color"
      id="portfolio"
    >
      <h2 className="has-text-centered has-text-white title is-3">Projects</h2>
      <div className="columns is-centered">
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Login/Signup Sample Stack</p>
                  <p className="subtitle is-6">PHP , mySQL , bulma</p>
                </div>
              </div>

              <div className="content">
                Login/Signup Example using Apache , mySQL , PHP and Bulma.
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Sales Tracking Web App</p>
                  <p className="subtitle is-6">
                    Angular 4 with Angular Material
                  </p>
                </div>
              </div>

              <div className="content">
                Sales tracking web app made with React,
                JavaScript and Nodejs
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="column is-3 ">
          <div className="card">
            <div className="card-image">
             
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left"></div>
                <div className="media-content">
                  <p className="title is-4">Restuarant Welcome Page</p>
                  <p className="subtitle is-6">Bulma CSS Site</p>
                </div>
              </div>

              <div className="content">
                Restaurant website made with HTML,CSS,JavaScript and Bulma CSS.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
