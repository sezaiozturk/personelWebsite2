import { Button, Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { MultiTextInput, TextInput } from "../../../../components";
import useStyle from "./stylesheet";
import { Formik, useFormik } from "formik";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = ({ sectionRef }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors, theme: activeTheme });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mc1s4za",
        "template_yqdpmp9",
        form.current,
        "A-t2Cgdf1q5CHH1tk"
      )
      .then(
        (result) => {
          alert("Mesajınızı Aldım.En kısa zamanda dönüş sağlayacağım.");
        },
        (error) => {
          alert("Beklenmedik hata!!!");
        }
      );
  };

  return (
    <div id="contact" className={classes.container} ref={sectionRef}>
      <div className={classes.content}>
        <div className={classes.cell}>
          <Text
            variant="title1"
            color={activeTheme === "light" ? "black" : "primary"}
          >
            {localize("touch")}
          </Text>
          <div className={classes.statement}>
            <Text variant="text1">{localize("contactMessage")}</Text>
          </div>
          <div className={classes.contactContainer}>
            <div>
              <Text variant="title7">{localize("livingIn")}:</Text>
              <Text variant="text4">Selçuklu, Konya</Text>
            </div>
            <div>
              <Text variant="title7">{localize("call")}:</Text>
              <Text variant="text4">(+90) 536 850 54 90</Text>
            </div>
          </div>
          <div className={classes.social}>
            <div className={classes.tooltip}>
              <a href="https://github.com/sezaiozturk" target="_blank">
                <i className="fa-brands fa-github fa-3x"></i>
              </a>
              <span className={classes.tooltiptext}>Github</span>
            </div>
            <div className={classes.tooltip}>
              <a
                href="https://www.linkedin.com/in/sezai-%C3%B6zt%C3%BCrk-29203526a/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in fa-3x"></i>
              </a>
              <span className={classes.tooltiptext}>Linkedin</span>
            </div>
            <div className={classes.tooltip}>
              <a
                href="https://www.instagram.com/sezai.ozturk.509"
                target="_blank"
              >
                <i className="fa-brands fa-instagram fa-3x"></i>
              </a>
              <span className={classes.tooltiptext}>Instagram</span>
            </div>
          </div>
        </div>
        <div className={classes.cell}>
          <Text
            variant="title1"
            color={activeTheme === "light" ? "black" : "primary"}
          >
            {localize("estimateYourProject")}
          </Text>
          <Formik initialValues={{ name: "", email: "", subject: "" }}>
            {({ handleChange }) => (
              <form className={classes.form} onSubmit={sendEmail} ref={form}>
                <TextInput
                  title={`${localize("whatIsYourName")}:`}
                  id="name"
                  onChangeText={handleChange}
                />
                <TextInput
                  title={`${localize("yourEmailAddress")}:`}
                  id="email"
                  onChangeText={handleChange}
                />
                <MultiTextInput
                  title={`${localize("howCanIHelpYou")}:`}
                  onChangeText={handleChange}
                  id={"subject"}
                />
                <Button
                  title={localize("send")}
                  spreadBehaviour="free"
                  color={activeTheme === "light" ? "black" : "primary"}
                  type="submit"
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
