import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import './profile.css'


function App() {
    const [time, setTime] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const timeString = `${now.toLocaleTimeString()}.${now.getMilliseconds()}`;
      setTime(timeString);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar />
    <main>
      <article class="test-profile-card">
        <div className="profile-card" data-testid="test-profile-card">
          <figure className="profileImage">
            <img
              src="/images/foide.jpg"
              alt="foide-pic"
              sizes=""
              srcset=""
              data-testid="test-user-avatar"
            />
          </figure>
          <h2 data-testid="test-user-name">Favour Evans</h2>
          <p class="bio" data-testid="test-user-bio">
            Crafting Pixels & Possibilities ✨
            Designing Calm Interfaces for a Loud World.
          </p>
          
          <div class="social-links">
            <nav>
              <ul>
                <li data-testid="test-user-social-links">
                  <a
                    href="https://x.com/foid_E?t=S_6RhcyBTaXNHGYYShavDA&s=09"
                    data-testid="test-user-social-twiter"
                    target="_blank"
                    >   <i class="fa-brands fa-x-twitter"></i></a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/foid_evans?igsh=MWE3ZW1ydzI3Zmw0ZQ=="
                    data-testid="test-user-social-instagram"
                    target="_blank"
                    ><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/favour-evans-552325359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                    data-testid="test-user-social-linkedin"
                    target="_blank"
                    ><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
             
              </ul>
            </nav>
          </div>
          <div className = "current-date" data-testid="test-user-time">{time}</div>
          <div class="hobbies-dislikes">
          <section class="hobbies">
            <ul data-testid="test-user-hobbies">
              <h3>Hobbies</h3>
              <li>Coding</li>
              <li>Music</li>
              <li>Sleeping</li>
              <li>Reading</li>
            </ul>
          </section>
          <section class="dislikes">
            <ul data-testid="test-user-dislikes">
              <h3>Dislikes</h3>
              <li>Sluggishness</li>
              <li>Bugs</li>
              <li>Lying</li>
            </ul>
          </section>
        
          </div>
            <section>
            <h3></h3>
          </section>
        </div>
      </article>
    </main>
    </>
  )
}

export default App
