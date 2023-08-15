import { Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { ProjeCard, Title } from "../../../../components";
import useStyle from "./stylesheet";

const PortfolioSection = ({ sectionRef }) => {
  const { colors } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors });

  return (
    <div id="portfolio" className={classes.container} ref={sectionRef}>
      <div className={classes.title}>
        <Title title={localize("portfolio")} />
        <Text variant="title1">{localize("recentProject")}</Text>
      </div>
      <div className={classes.content}>
        <ProjeCard
          icon={"fa-solid fa-display fa-4x"}
          imgUrl={"./assets/images/personel-website.png"}
          title={"myPersonelWebsite"}
          description={"reactProject"}
        />
        <ProjeCard
          icon={"fa-solid fa-mobile-screen-button fa-4x"}
          imgUrl={"./assets/images/ygt.png"}
          title={"softwareDevelopmentCommunity"}
          description={"kotlinProject"}
        />
        <ProjeCard
          icon={"fa-solid fa-mobile-screen-button fa-4x"}
          imgUrl={"./assets/images/devCommunity.jpg"}
          title={"devCommunity"}
          description={"reactNativeProject"}
        />
      </div>
    </div>
  );
};
export default PortfolioSection;
