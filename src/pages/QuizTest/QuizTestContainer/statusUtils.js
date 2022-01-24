const statusUtils = (correct) => {
  if (correct >= 0 && correct <= 40) {
    return "Juda yomon";
  } else if (correct > 40 && correct < 60) {
    return "Qoniqarsiz";
  } else if (correct >= 60 && correct < 70) {
    return "Qoniqarli";
  } else if (correct >= 70 && correct < 90) {
    return "Yaxshi";
  } else if (correct >= 90 && correct <= 100) {
    return "A'lo natija";
  }
};
export { statusUtils };

const classUtils = (correct) => {
  if (correct >= 0 && correct <= 40) {
    return "check-check bg-danger text-light";
  } else if (correct > 40 && correct < 60) {
    return "check-check bg-warning text-light";
  } else if (correct >= 60 && correct < 70) {
    return "check-check bg-info text-light";
  } else if (correct >= 70 && correct < 90) {
    return "check-check bg-primary text-light";
  } else if (correct >= 90 && correct <= 100) {
    return "check-check bg-success text-light";
  }
};
export { classUtils };
