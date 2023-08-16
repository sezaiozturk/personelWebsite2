import { Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { Title } from "../../../../components";
import useStyle from "./stylesheet";

const AboutSection = ({ sectionRef }) => {
  const { colors } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors });

  return (
    <div id="about" className={classes.container} ref={sectionRef}>
      <div className={classes.title}>
        <Title title={localize("aboutMe")} />
        <Text variant="title1">{localize("knowMeMore")}</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <Text variant="title2">
            {localize("hi")}{" "}
            <Text variant="title8" className={classes.name}>
              Sezai Öztürk
            </Text>
          </Text>
          <Text variant="text1">{localize("whoAmI")}</Text>
        </div>
        <div className={classes.contentRight}>
          <img
            src="./assets/images/myPhoto.jpeg"
            className={classes.profilePhoto}
          />
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contact}>
          <div>
            <Text variant="title5" color="gray100">
              {localize("name")}:
            </Text>
            <Text variant="text2"> Sezai Öztürk</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              {localize("email")}:
            </Text>
            <Text variant="text2">ozturksezai52@gmail.com</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              {localize("dateOfBirth")}:
            </Text>
            <Text variant="text2">13 {localize("february")} ,1999</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              {localize("from")}:
            </Text>
            <Text variant="text2">Selçuklu, Konya</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
