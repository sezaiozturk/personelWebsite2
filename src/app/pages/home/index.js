import {
  WelcomeSection,
  AboutSection,
  ResumeSection,
  HireSection,
  PortfolioSection,
  ContactSection,
} from "./views";
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <WelcomeSection />
      <AboutSection />
      <ResumeSection />
      <HireSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Home;
