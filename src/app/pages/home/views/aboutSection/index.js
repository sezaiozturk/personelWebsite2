import { Text, useNCoreTheme } from "ncore-web";
import { Title } from "../../../../components";
import useStyle from "./stylesheet";

const AboutSection = () => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div id="about" className={classes.container}>
      <div className={classes.title}>
        <Title title={"About Me"} />
        <Text variant="title1">Know Me More</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <Text variant="title2">Hi I'm Sezai Öztürk</Text>
          <Text variant="text1">
            Hi, I'm Callum Smith I'm a designer & developer with a passion for
            web design. I enjoy developing simple, clean and slick websites that
            provide real value to the end user. Thousands of clients have
            procured exceptional results while working with me. Delivering work
            within time and budget which meets client’s requirements is our
            moto.
          </Text>
        </div>
        <div className={classes.contentRight}>
          <div>
            <span>22</span>
          </div>
          <span>Years of Experianse</span>
        </div>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.contact}>
          <div>
            <Text variant="title5" color="gray100">
              Name:
            </Text>
            <Text variant="text2"> Sezai Öztürk</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              Name:
            </Text>
            <Text variant="text2"> Sezai Öztürk</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              Name:
            </Text>
            <Text variant="text2"> Sezai Öztürk</Text>
          </div>
          <div>
            <Text variant="title5" color="gray100">
              Name:
            </Text>
            <Text variant="text2"> Sezai Öztürk</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
