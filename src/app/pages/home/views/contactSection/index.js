import { Button, Text, useNCoreTheme } from "ncore-web";
import { MultiTextInput, TextInput, Title } from "../../../../components";
import useStyle from "./stylesheet";

const ContactSection = () => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div id="contact" className={classes.container}>
      <div className={classes.content}>
        <div className={classes.cell}>
          <Text variant="title1">Let's get in touch</Text>
          <div className={classes.statement}>
            <Text variant="text1">
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </Text>
          </div>
          <div className={classes.contactContainer}>
            <div>
              <Text variant="title7">Living In:</Text>
              <Text variant="text4">30 Shacham street, Los Angeles, USA.</Text>
            </div>
            <div>
              <Text variant="title7">Call:</Text>
              <Text variant="text4">(+060) 444 434 444</Text>
            </div>
          </div>
          <div className={classes.social}>
            <div className={classes.tooltip}>
              <i className="fa-brands fa-github fa-3x"></i>
              <span className={classes.tooltiptext}>Github</span>
            </div>
            <div className={classes.tooltip}>
              <i className="fa-brands fa-linkedin-in fa-3x"></i>
              <span className={classes.tooltiptext}>Linkedin</span>
            </div>
            <div className={classes.tooltip}>
              <i className="fa-brands fa-instagram fa-3x"></i>
              <span className={classes.tooltiptext}>Instagram</span>
            </div>
          </div>
        </div>
        <div className={classes.cell}>
          <Text variant="title1">Estimate your Project?</Text>
          <div className={classes.form}>
            <TextInput
              title="What is Your Name:"
              id="name"
              onChangeText={(text) => console.log(text)}
            />
            <TextInput
              title="Your Email Address:"
              id="email"
              onChangeText={(text) => console.log(text)}
            />
            <MultiTextInput
              title="How can I Help you?:"
              onChangeText={(text) => console.log(text)}
            />
            <Button title="Send" spreadBehaviour="free" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
