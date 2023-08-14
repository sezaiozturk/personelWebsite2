import { Button, Text, useNCoreTheme } from "ncore-web";
import { ResumeCard, SkillBar, Title } from "../../../../components";
import useStyle from "./stylesheet";

const ResumeSection = ({ sectionRef }) => {
  const { colors, activeTheme } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div id="resume" className={classes.container} ref={sectionRef}>
      <div className={classes.title}>
        <Title title={"Resume"} />
        <Text variant="title1">A summary of My Resume</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.cell}>
          <Text variant="title3" style={{ marginBottom: "3rem" }}>
            My Education
          </Text>
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"Harvard University / 2015 - 2017"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"Harvard University / 2015 - 2017"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"Harvard University / 2015 - 2017"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <div className={classes.hideContainer} />
        </div>
        <div className={classes.cell}>
          <Text variant="title3" style={{ marginBottom: "3rem" }}>
            My Education
          </Text>
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <div className={classes.hideContainer} />
        </div>
      </div>
      <div className={classes.skillsContainer}>
        <Text variant={"title3"}>My Skills</Text>
        <div className={classes.skillsContent}>
          <div className={classes.row}>
            <SkillBar title={"Html"} parcent={50} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
          <div className={classes.row}>
            <SkillBar title={"Html"} parcent={99} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
          <div className={classes.row}>
            <SkillBar title={"Html"} parcent={99} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
        </div>
      </div>
      <Button
        title="Download Cv"
        spreadBehaviour="free"
        style={{ margin: "5rem 0 10rem 0" }}
        textColor="button"
      />
    </div>
  );
};
export default ResumeSection;
