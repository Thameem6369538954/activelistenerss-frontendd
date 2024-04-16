import React, { useState } from "react";
import "../Css/Workshop.css";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import ElementB from "../Images/ElementB.png";
import Problem from "../Images/Problem.png";
import NeedHelp from "../Images/NeedHelp.png";
import BL from "../Images/BL.png";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstentKadha from "../Katha/InstentKadha/InstentKadha.js";
const steps = ["Instant-Katha", "Hasya-Ras", "Kala-Kriti"];

const Workshop = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className="Subscribe-heading">
        <p>children Counselling</p>
        <h1>Workshop</h1>
        <h2>For You</h2>
        <img src={Yellowline} className="Yellowline" alt="" />
        <div className="element-for-career-counselling">
          <img src={ElementB} alt="" />
          <p>
            Transformative support for those seeking clarity and understanding
            through active listening.
          </p>
        </div>
      </div>
      {/* problem faced ywllow box */}
      <div className="problem-face-box">
        <img src={Problem} alt="" />
      </div>
      <div className="best-solution">
        <div className="Subscribe-heading">
          <p>We have the</p>
          <h1>Best Solution</h1>
          <h2>For You</h2>
        </div>
        <div className="get-help">
          <img src={BL} alt="" />
          <img src={NeedHelp} alt="" />
          <img src={BL} alt="" />
        </div>
      </div>
      {/* introduction of our workshop */}
      <div className="Subscribe-heading">
        <p>psychologist Team</p>
        <h1>Introducing our </h1>
        <h2>Workshops</h2>
      </div>
      {/* stepper */}
      <div
        className="stepper"
        style={{ marginTop: "50px", width: "90%", margin: "auto" }}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  {activeStep === 0 && <InstentKadha />}
                  {activeStep === 1 && <InstentKadha />}
                  {activeStep === 2 && <InstentKadha />}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>

      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Workshop;
