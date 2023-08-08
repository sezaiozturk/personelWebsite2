import { Button, Text, useNCoreTheme } from "ncore-web";
import { ResumeCard, SkillBar, Title } from "../../../../components";
import useStyle from "./stylesheet";

const ResumeSection = () => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Title title={"Resume"} />
        <Text variant="title1">A summary of My Resume</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.cell}>
          <Text variant="title1" style={{ marginBottom: "3rem" }}>
            My Education
          </Text>
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
        </div>
        <div className={classes.cell}>
          <Text variant="title1" style={{ marginBottom: "3rem" }}>
            My Education
          </Text>
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
          <ResumeCard
            title={"lorem ipsum lorem ipsum"}
            subTitle={"lorem ipsum lorem ipsum"}
            message={`lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem`}
          />
        </div>
      </div>
      <div className={classes.skillsContainer}>
        <Text variant={"title3"}>My Skills</Text>
        <div className={classes.skillsContent}>
          <div>
            <SkillBar title={"Html"} parcent={50} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
          <div>
            <SkillBar title={"Html"} parcent={99} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
          <div>
            <SkillBar title={"Html"} parcent={99} />
            <SkillBar title={"Html"} parcent={90} />
          </div>
        </div>
      </div>
      <Button
        title="Download Cv"
        spreadBehaviour="free"
        variant="outlined"
        style={{ margin: "5rem 0" }}
      />
    </div>
  );
};
export default ResumeSection;
