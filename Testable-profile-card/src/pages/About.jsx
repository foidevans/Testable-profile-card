import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
     <Navbar />
      <main data-testid="test-about-page" className="aboutContainer">
        <h1>About Me</h1>
        <div className="aboutCard">
          <figure className="aboutImage">
            <img
              src="/images/foide.jpg"
              alt="foide-pic"
              data-testid="test-user-avatar"
            />
          </figure>

          <div className="sectionContainer">
            <section className="bio" data-testid="test-about-bio">
              <h2>Bio</h2>
              <p>
                I'm Favour Evans, a creative front-end developer passionate
                about crafting beautiful, interactive, and accessible web
                experiences. I love bringing designs to life and making
                technology feel warm, fuzzy and human.
              </p>
            </section>
            <section className="goals" data-testid="test-about-goals">
              <h2>Goals in this Program</h2>
              <p>
                My main goal is to sharpen my React and project management
                skills, understand how the Web works, Network with like minded
                people and industry Leaders while learning to build scalable and
                user-friendly web applications.
              </p>
            </section>
            <section
              className="areasOfLowConfidence"
              data-testid="test-about-confidence"
            >
              <h2>Areas of Low Confidence</h2>
              <p>
                I'm scared of making mistakes so i tend not to try new things.
                I'm not too good at fetching API and i'm still a newbie when it comes
                to libraries, frameworks and complex React patterns, but I'm improving
                through consistent practice and mentorship.
              </p>
            </section>
            <section className="noteToFutureself data-testid='test-about-future-note'">
              <h2>Note to Future Self</h2>
              <p>
                You've come far, and you're still growing. Keep your curiosity,
                stay patient and persistent, stay kind, and never stop building
                things that make people smile.
              </p>
            </section>
            <section className="extraThoughts" data-testid="test-about-extra">
              <h2>Extra Thoughts</h2>
              <p>
                Repetiton is the Mother of Skill. 
                Document everything and take learning one step at a time.
                I believe design and
                development are two halves of creativity. Together, they tell
                stories that move people.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
