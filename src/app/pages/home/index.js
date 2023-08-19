import { useEffect } from "react";
import {
  WelcomeSection,
  AboutSection,
  ResumeSection,
  HireSection,
  PortfolioSection,
  ContactSection,
} from "./views";
import { useInView } from "react-intersection-observer";
import { useNCoreTheme } from "ncore-web";
const Home = () => {
  const { colors } = useNCoreTheme();
  const width = window.innerWidth;
  const limit = 768;
  const { ref: welcomeRef, inView: welcomeIsVisible } = useInView({
    threshold: width < limit ? 0.2 : 0.8,
  });
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({
    threshold: width < limit ? 0.4 : 0.8,
  });
  const { ref: resumeRef, inView: resumeIsVisible } = useInView({
    threshold: width < limit ? 0.2 : 0.4,
  });
  const { ref: portfolioRef, inView: portfolioIsVisible } = useInView({
    threshold: width < limit ? 0.2 : 0.6,
  });
  const { ref: contactRef, inView: contactIsVisible } = useInView({
    threshold: width < limit ? 0.3 : 0.8,
  });

  useEffect(() => {
    /*welcomeIsVisible && window.location.replace("#");
    aboutIsVisible && window.location.replace("#about");
    resumeIsVisible && window.location.replace("#resume");
    portfolioIsVisible && window.location.replace("#portfolio");
    contactIsVisible && window.location.replace("#contact");*/
  }, [
    welcomeIsVisible,
    aboutIsVisible,
    resumeIsVisible,
    portfolioIsVisible,
    contactIsVisible,
  ]);
  return (
    <div style={{ backgroundColor: colors.secondary }}>
      <WelcomeSection sectionRef={welcomeRef} />
      <AboutSection sectionRef={aboutRef} />
      <ResumeSection sectionRef={resumeRef} />
      <HireSection />
      <PortfolioSection sectionRef={portfolioRef} />
      <ContactSection sectionRef={contactRef} />
    </div>
  );
};

export default Home;
