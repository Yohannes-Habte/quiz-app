// ======================================================================
// Function that handles answred questions
// ======================================================================
export const answeredQuestions = (result) => {
  return result.filter((questionNumber) => questionNumber !== undefined).length;
};

// ======================================================================
// Function that hadles user total points
// ======================================================================
export const totalAtteptedResult = (result, answers, point) => {
  return result
    .map((element, index) => answers[index] === element)
    .filter((index) => index)
    .map((index) => point)
    .reduce((prev, curr) => prev + curr, 0);
};

// ======================================================================
// Function that hadles user status (pass or failure)
// ======================================================================
export const flagResult = (totalUserReuslt, totalPoints) => {
  return totalUserReuslt >= totalPoints - 20;
};
