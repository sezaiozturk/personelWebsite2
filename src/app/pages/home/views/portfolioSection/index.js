import { Text, useNCoreTheme } from "ncore-web";
import { ProjeCard, Title } from "../../../../components";
import useStyle from "./stylesheet";

const PortfolioSection = ({ sectionRef }) => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div id="portfolio" className={classes.container} ref={sectionRef}>
      <div className={classes.title}>
        <Title title={"Portfolio"} />
        <Text variant="title1">Some of my most recent projects</Text>
      </div>
      <div className={classes.content}>
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
        <ProjeCard imgUrl={"./assets/images/welcome-background.jpg"} />
      </div>
    </div>
  );
};
export default PortfolioSection;
