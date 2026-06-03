export const SUBJECT_MOCK_DATA = {
  cs301: {
    questions: [

      // ================= MODULE 1 =================

      {
        id: 1,
        title: "Lagrange's Linear PDE Method",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "5/5 Papers"
      },
      {
        id: 2,
        title: "Charpit's Method for Non-Linear PDE",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 3,
        title: "Formation of PDE by Eliminating Arbitrary Constants/Functions",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 4,
        title: "Higher Order Linear PDE with Constant Coefficients",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["HIGH SCORING"],
        frequency: "4/5 Papers"
      },
      {
        id: 5,
        title: "Classification of PDEs",
        unit: 1,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "3/5 Papers"
      },

      // ================= MODULE 2 =================

      {
        id: 6,
        title: "One Dimensional Heat Equation",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 7,
        title: "One Dimensional Wave Equation",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "5/5 Papers"
      },
      {
        id: 8,
        title: "Laplace Equation by Separation of Variables",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 9,
        title: "Fourier Transform and Inverse Fourier Transform",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "3/5 Papers"
      },
      {
        id: 10,
        title: "Applications of Fourier Transform in PDE",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "3/5 Papers"
      },

      // ================= MODULE 3 =================

      {
        id: 11,
        title: "Moments, Skewness and Kurtosis",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 12,
        title: "Regression Lines and Correlation Coefficient",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 13,
        title: "Least Square Curve Fitting",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 14,
        title: "Rank Correlation",
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "3/5 Papers"
      },
      {
        id: 15,
        title: "Fitting Exponential Curves",
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ["SCORING"],
        frequency: "2/5 Papers"
      },

      // ================= MODULE 4 =================

      {
        id: 16,
        title: "Normal Distribution Problems",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 17,
        title: "Binomial Distribution",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "5/5 Papers"
      },
      {
        id: 18,
        title: "Poisson Distribution",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 19,
        title: "Probability Density Function and Random Variables",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 20,
        title: "Expectation and Variance",
        unit: 4,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "3/5 Papers"
      },

      // ================= MODULE 5 =================

      {
        id: 21,
        title: "Hypothesis Testing (t-Test)",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "5/5 Papers"
      },
      {
        id: 22,
        title: "Chi-Square Test",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 23,
        title: "Statistical Quality Control (SQC)",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "4/5 Papers"
      },
      {
        id: 24,
        title: "Control Charts (p, np, c, X̄ and R Charts)",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["IMPORTANT"],
        frequency: "4/5 Papers"
      },
      {
        id: 25,
        title: "Null Hypothesis and Confidence Limits",
        unit: 5,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "3/5 Papers"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Module I",
        title: "Partial Differential Equations",
        difficulty: "Hard",
        difficultyScore: 88,
        expectedMarks: 16,
        passProbability: 82,
        advice: "Master Lagrange and Charpit methods first."
      },
      {
        id: 2,
        name: "Module II",
        title: "PDE Applications and Fourier Transform",
        difficulty: "Hard",
        difficultyScore: 90,
        expectedMarks: 18,
        passProbability: 80,
        advice: "Heat and Wave equations are almost guaranteed."
      },
      {
        id: 3,
        name: "Module III",
        title: "Statistical Techniques I",
        difficulty: "Medium",
        difficultyScore: 72,
        expectedMarks: 18,
        passProbability: 95,
        advice: "Moments and Regression are high-yield topics."
      },
      {
        id: 4,
        name: "Module IV",
        title: "Statistical Techniques II",
        difficulty: "Easy",
        difficultyScore: 65,
        expectedMarks: 18,
        passProbability: 98,
        advice: "Normal, Binomial and Poisson are easy scoring."
      },
      {
        id: 5,
        name: "Module V",
        title: "Statistical Techniques III",
        difficulty: "Easy",
        difficultyScore: 62,
        expectedMarks: 20,
        passProbability: 99,
        advice: "t-Test, Chi-Square and Control Charts dominate exams."
      }
    ]
  }
};