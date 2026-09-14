import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import TechIcon from './TechIcon.jsx';

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="about">
      <div ref={sectionRef} className="about_upper scroll-animate">
        <h1>About</h1>
        <p>
          I&apos;m a passionate software developer with a strong focus on creating innovative and efficient
          solutions. With expertise in various programming languages and frameworks, I strive to build
          applications that make a positive impact on users&apos; lives.
        </p>
      </div>

      <section className="tech-section">
        <div className="top-technologies">
          <TechIcon className="figma">
            <i className="fa-brands fa-figma" />
          </TechIcon>
          <TechIcon className="react">
            <i className="fa-brands fa-react" />
          </TechIcon>
          <TechIcon className="c">
            <span>C</span>
          </TechIcon>
          <TechIcon className="node">
            <i className="fa-brands fa-node-js" />
          </TechIcon>
          <TechIcon className="redux">
            <span>⌘</span>
          </TechIcon>
          <TechIcon className="javascript">
            <span>JS</span>
          </TechIcon>
          <TechIcon className="css">
            <span>3</span>
          </TechIcon>
        </div>

        <div className="second-technologies">
          <TechIcon className="adobe">
            <span>Xd</span>
          </TechIcon>
          <TechIcon className="next">
            <span>
              NEXT<span className="small-dot">.</span>
            </span>
          </TechIcon>
          <TechIcon className="graphql">
            <span>G</span>
          </TechIcon>
          <TechIcon className="illustrator">
            <span>Ai</span>
          </TechIcon>
          <TechIcon className="express">
            <span>express</span>
          </TechIcon>
          <TechIcon className="mongodb">
            <span>●mongoDB</span>
          </TechIcon>
        </div>

        <svg className="connections" viewBox="0 0 1572 1154" preserveAspectRatio="none">
          <path d="M 545 145 C 650 290, 700 410, 720 630" />
          <path d="M 650 145 C 700 300, 715 450, 720 630" />
          <path d="M 750 145 C 735 300, 725 470, 720 630" />
          <path d="M 850 145 C 800 310, 750 470, 720 630" />
          <path d="M 950 145 C 850 320, 780 490, 720 630" />
          <path d="M 1050 145 C 900 320, 820 490, 720 630" />

          <path d="M 0 850 C 220 670, 450 730, 720 850" />
          <path d="M 0 950 C 260 700, 480 790, 720 850" />
          <path d="M 1572 850 C 1350 680, 1100 730, 720 850" />
          <path d="M 1572 950 C 1320 700, 1050 790, 720 850" />

          <ellipse cx="720" cy="790" rx="270" ry="120" />
          <ellipse cx="720" cy="790" rx="320" ry="145" />
        </svg>

        <div className="floating-icons">
          <span className="float-icon linkedin">in</span>
          <span className="float-icon ai">Ai</span>
          <span className="float-icon google">G</span>
          <span className="float-icon html">&lt;/&gt;</span>
          <span className="float-icon js">JS</span>
          <span className="float-icon react-small">⚛</span>
          <span className="float-icon xd">Xd</span>
          <span className="float-icon figma-small">F</span>
          <span className="float-icon css-small">3</span>
        </div>

        <div className="center-wrapper">
          <div className="center-glow" />
          <div className="center-circle">
            <div className="center-logo">
              <div className="logo-top" />
              <div className="logo-middle" />
              <div className="logo-bottom" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
