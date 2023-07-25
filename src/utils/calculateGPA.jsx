export const calculateGPA = (credits, grade) => {
  const totalCredits = credits.reduce((a, b) => a + b, 0);
  const totalGrade = credits.reduce((a, b, i) => a + b * grade[i], 0);
  if (totalCredits === 0) return 0;
  return (totalGrade / totalCredits).toFixed(2);
};
