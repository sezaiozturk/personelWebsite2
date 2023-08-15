import { Button, Text, useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { ResumeCard, SkillBar, Title } from "../../../../components";
import useStyle from "./stylesheet";

const ResumeSection = ({ sectionRef }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const { localize } = useNCoreLocalization();
  const classes = useStyle({ color: colors });

  return (
    <div id="resume" className={classes.container} ref={sectionRef}>
      <div className={classes.title}>
        <Title title={localize("resume")} />
        <Text variant="title1">{localize("summary")}</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.cell}>
          <Text variant="title3" style={{ marginBottom: "3rem" }}>
            {localize("myEducation")}
          </Text>
          <ResumeCard
            title={localize("engineer")}
            subTitle={`${localize("konyaUniversity")} / 2021 - 2023`}
            message={localize("engineerMessage")}
          />
          <ResumeCard
            title={localize("programming")}
            subTitle={`${localize("marmaraUniversity")} / 2017 - 2019`}
            message={localize("programmingMessage")}
          />
          <ResumeCard
            title={localize("highSchool")}
            subTitle={`${localize("kartalHightSchool")} / 2011 - 2015`}
            message={localize("highSchoolMessage")}
          />
          <div className={classes.hideContainer} />
        </div>
        <div className={classes.cell}>
          <Text variant="title3" style={{ marginBottom: "3rem" }}>
            {localize("myExperience")}
          </Text>
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum sum lorem`}
          />

          <div className={classes.hideContainer} />
        </div>
      </div>
      <div className={classes.skillsContainer}>
        <Text variant={"title3"}>{localize("mySkills")}</Text>
        <div className={classes.skillsContent}>
          <div className={classes.row}>
            <SkillBar title={"HTML/CSS"} parcent={75} />
            <SkillBar title={"React JS"} parcent={40} />
          </div>
          <div className={classes.row}>
            <SkillBar title={"React Native"} parcent={50} />
            <SkillBar title={"Java Script"} parcent={50} />
          </div>
          <div className={classes.row}>
            <SkillBar title={"Kotlin"} parcent={40} />
            <SkillBar title={"Web Design"} parcent={40} />
          </div>
        </div>
      </div>
      <Button
        title={localize("downloadCv")}
        spreadBehaviour="free"
        style={{ margin: "5rem 0 10rem 0" }}
        textColor="button"
      />
    </div>
  );
};
export default ResumeSection;
