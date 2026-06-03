export const SUBJECT_MOCK_DATA = {
  cs305: {
    questions: [

      // ================= UNIT 1 =================

      {
        id: 1,
        title: "Equivalence Relation and Equivalence Classes",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "7/7 Exams"
      },
      {
        id: 2,
        title: "POSET and Hasse Diagram",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "7/7 Exams"
      },
      {
        id: 3,
        title: "Lattice, Types and Properties of Lattices",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 4,
        title: "Isomorphic Lattices",
        unit: 1,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/7 Exams"
      },
      {
        id: 5,
        title: "Warshall Algorithm and Transitive Closure",
        unit: 1,
        marks: 7,
        probability: 96,
        tags: ["NUMERICAL"],
        frequency: "5/7 Exams"
      },

      // ================= UNIT 2 =================

      {
        id: 6,
        title: "Boolean Algebra Laws and Theorems",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "7/7 Exams"
      },
      {
        id: 7,
        title: "Karnaugh Map (K-Map) Simplification",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE", "NUMERICAL"],
        frequency: "7/7 Exams"
      },
      {
        id: 8,
        title: "Types of Functions (One-One, Onto, Bijective)",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 9,
        title: "Composition and Inverse of Functions",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["SCORING"],
        frequency: "5/7 Exams"
      },
      {
        id: 10,
        title: "Growth of Functions and Big-O",
        unit: 2,
        marks: 7,
        probability: 92,
        tags: ["THEORY"],
        frequency: "3/7 Exams"
      },

      // ================= UNIT 3 =================

      {
        id: 11,
        title: "Validity of Arguments using Rules of Inference",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "7/7 Exams"
      },
      {
        id: 12,
        title: "Predicate Logic and Quantifiers",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "7/7 Exams"
      },
      {
        id: 13,
        title: "Truth Tables, Tautology and Contradiction",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 14,
        title: "Converse, Inverse and Contrapositive",
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/7 Exams"
      },
      {
        id: 15,
        title: "Predicate Logic Translation Problems",
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ["SCORING"],
        frequency: "5/7 Exams"
      },

      // ================= UNIT 4 =================

      {
        id: 16,
        title: "Lagrange Theorem",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "7/7 Exams"
      },
      {
        id: 17,
        title: "Cyclic Group and Generators",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "7/7 Exams"
      },
      {
        id: 18,
        title: "Abelian Group and Group Properties",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 19,
        title: "Ring and Field",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 20,
        title: "Normal Subgroup and Group Homomorphism",
        unit: 4,
        marks: 7,
        probability: 95,
        tags: ["HIGH LEVEL"],
        frequency: "4/7 Exams"
      },

      // ================= UNIT 5 =================

      {
        id: 21,
        title: "Pigeonhole Principle",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "7/7 Exams"
      },
      {
        id: 22,
        title: "Planar Graph and Euler Formula",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "7/7 Exams"
      },
      {
        id: 23,
        title: "Graph Coloring and Chromatic Number",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 24,
        title: "Hamiltonian and Euler Graphs",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 25,
        title: "Bipartite, Complete and Planar Graphs",
        unit: 5,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "5/7 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Relations, POSET & Lattices",
        difficulty: "Medium",
        difficultyScore: 72,
        expectedMarks: 16,
        passProbability: 96,
        advice: "POSET, Hasse Diagram and Equivalence Relation are repeatedly asked."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "Functions & Boolean Algebra",
        difficulty: "Easy",
        difficultyScore: 65,
        expectedMarks: 18,
        passProbability: 99,
        advice: "K-Map and Boolean Algebra appear almost every year."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Theory of Logic",
        difficulty: "Medium",
        difficultyScore: 74,
        expectedMarks: 16,
        passProbability: 95,
        advice: "Inference, Quantifiers and Predicate Logic dominate exams."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Algebraic Structures",
        difficulty: "Hard",
        difficultyScore: 84,
        expectedMarks: 15,
        passProbability: 88,
        advice: "Lagrange theorem and cyclic groups are the highest priority."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Graphs & Combinatorics",
        difficulty: "Easy",
        difficultyScore: 68,
        expectedMarks: 15,
        passProbability: 98,
        advice: "Pigeonhole Principle and Euler Formula are guaranteed topics."
      }
    ]
  }
};