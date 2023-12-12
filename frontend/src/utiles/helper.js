// Function that hadles answred questions
export const answeredQuestions = (result) => {
  return result.filter((questionNumber) => questionNumber !== undefined).length;
};

// Function that hadles user result
export const totalAtteptedResult = (result, answers, point) => {
  return result
    .map((element, i) => answers[i] === element)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
};

// Function that hadles user status (pass or failure)
export const flagResult = (totalUserReuslt, totalPoints) => {
  return totalUserReuslt >= totalPoints - 20;
};
