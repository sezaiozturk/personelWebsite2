import {
  WelcomeSection,
  AboutSection,
  ResumeSection,
  HireSection,
} from "./views";
const Home = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <WelcomeSection />
      <AboutSection />
      <ResumeSection />
      <HireSection />
      <div style={{ height: 1000 }} />
    </div>
  );
};

export default Home;
