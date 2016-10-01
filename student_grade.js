function averageGrade(g1, g2, g3) {
  var avgGrade = (g1 + g2 + g3) / 3;
  var gradeLet = "F";

  if (avgGrade >= 90) {
    gradeLet = "A";
  } else if (avgGrade >= 70) {
    gradeLet = "B";
  } else if (avgGrade >= 50) {
    gradeLet = "C";
  }

  console.log("Based on the average of your 3 scores your letter grade is \"" + gradeLet + "\".");
}

exports.f = averageGrade;