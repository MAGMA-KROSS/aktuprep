export const SUBJECT_MOCK_DATA = {
  cs102: {
    questions: [

      // ================= UNIT 1 : MATRICES =================

      {
        id: 1,
        title: "Eigen Values and Eigen Vectors",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "8/8 Exams"
      },
      {
        id: 2,
        title: "Rank of Matrix and Normal Form",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED"],
        frequency: "7/8 Exams"
      },
      {
        id: 3,
        title: "Consistency and Solution of Linear Equations",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "7/8 Exams"
      },
      {
        id: 4,
        title: "Cayley Hamilton Theorem and Applications",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "6/8 Exams"
      },
      {
        id: 5,
        title: "Hermitian, Skew-Hermitian and Unitary Matrices",
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ["IMPORTANT"],
        frequency: "4/8 Exams"
      },

      // ================= UNIT 2 : DIFFERENTIAL CALCULUS I =================

      {
        id: 6,
        title: "nth Order Derivatives and Leibnitz Theorem",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "8/8 Exams"
      },
      {
        id: 7,
        title: "Curve Tracing",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["VERY IMPORTANT"],
        frequency: "6/8 Exams"
      },
      {
        id: 8,
        title: "Euler's Theorem for Homogeneous Functions",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["AKTU FAVORITE"],
        frequency: "5/8 Exams"
      },
      {
        id: 9,
        title: "Partial Differentiation and Total Derivative",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/8 Exams"
      },
      {
        id: 10,
        title: "Mean Value Theorems (Rolle, Lagrange, Cauchy)",
        unit: 2,
        marks: 7,
        probability: 95,
        tags: ["REPEATED"],
        frequency: "4/8 Exams"
      },

      // ================= UNIT 3 : DIFFERENTIAL CALCULUS II =================

      {
        id: 11,
        title: "Taylor Series and Maclaurin Series",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "8/8 Exams"
      },
      {
        id: 12,
        title: "Jacobians",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "7/8 Exams"
      },
      {
        id: 13,
        title: "Maxima and Minima of Functions of Several Variables",
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "6/8 Exams"
      },
      {
        id: 14,
        title: "Approximation of Errors",
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ["SCORING"],
        frequency: "4/8 Exams"
      },
      {
        id: 15,
        title: "Change of Variables and Jacobian Applications",
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ["IMPORTANT"],
        frequency: "4/8 Exams"
      },

      // ================= UNIT 4 : MULTIPLE INTEGRATION =================

      {
        id: 16,
        title: "Double Integration",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "8/8 Exams"
      },
      {
        id: 17,
        title: "Change of Order of Integration",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "7/8 Exams"
      },
      {
        id: 18,
        title: "Beta and Gamma Functions",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["VERY IMPORTANT"],
        frequency: "6/8 Exams"
      },
      {
        id: 19,
        title: "Dirichlet Integral and Applications",
        unit: 4,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/8 Exams"
      },
      {
        id: 20,
        title: "Area and Volume using Double/Triple Integration",
        unit: 4,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "5/8 Exams"
      },

      // ================= UNIT 5 : VECTOR CALCULUS =================

      {
        id: 21,
        title: "Gradient, Divergence and Curl",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "8/8 Exams"
      },
      {
        id: 22,
        title: "Directional Derivatives",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "7/8 Exams"
      },
      {
        id: 23,
        title: "Gauss Divergence Theorem",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "6/8 Exams"
      },
      {
        id: 24,
        title: "Green's Theorem",
        unit: 5,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/8 Exams"
      },
      {
        id: 25,
        title: "Stokes Theorem",
        unit: 5,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/8 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Matrices",
        difficulty: "Medium",
        difficultyScore: 65,
        expectedMarks: 18,
        passProbability: 99,
        advice: "Focus on Eigen Values, Eigen Vectors, Rank and Cayley-Hamilton."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "Differential Calculus-I",
        difficulty: "Hard",
        difficultyScore: 75,
        expectedMarks: 14,
        passProbability: 90,
        advice: "Master Leibnitz Theorem, nth Derivatives and Curve Tracing."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Differential Calculus-II",
        difficulty: "Hard",
        difficultyScore: 80,
        expectedMarks: 14,
        passProbability: 88,
        advice: "Taylor Series, Jacobians and Maxima-Minima dominate exams."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Multiple Integration",
        difficulty: "Medium",
        difficultyScore: 70,
        expectedMarks: 12,
        passProbability: 92,
        advice: "Double Integration, Change of Order and Beta-Gamma are must-do."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Vector Calculus",
        difficulty: "Medium",
        difficultyScore: 68,
        expectedMarks: 12,
        passProbability: 95,
        advice: "Gradient, Curl, Divergence, Directional Derivative and Theorems are highly repeated."
      }
    ]
  }
};