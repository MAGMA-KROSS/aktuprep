// Mock Data for Design and Analysis of Algorithm (DAA / DDA), keyed by subject ID: cs502
export const SUBJECT_MOCK_DATA = {
  cs502: {
    questions: [
      // =========================
      // UNIT 1 - Algorithm Analysis & Sorting
      // =========================
      {
        id: 1,
        title: 'Explain Merge Sort. Illustrate with example and derive its time complexity.',
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ['AKTU FAVORITE', 'VERY HIGH'],
        frequency: '5/6 Exams'
      },
      {
        id: 2,
        title: 'Write Quick Sort partition algorithm. Derive best case and worst case complexity.',
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ['REPEATED'],
        frequency: '4/6 Exams'
      },
      {
        id: 3,
        title: 'Solve recurrence relations using Iteration, Recursion Tree and Master Method.',
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ['SCORING'],
        frequency: '6/6 Exams'
      },
      {
        id: 4,
        title: 'Explain Counting Sort with suitable example and analyze its complexity.',
        unit: 1,
        marks: 7,
        probability: 90,
        tags: ['EXPECTED'],
        frequency: '3/6 Exams'
      },
      {
        id: 5,
        title: 'Explain Asymptotic Notations (Big-O, Omega and Theta) with examples.',
        unit: 1,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '4/6 Exams'
      },

      // =========================
      // UNIT 2 - Advanced Data Structures
      // =========================
      {
        id: 6,
        title: 'Explain Binomial Heap. Write Union operation with suitable example.',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['MOST REPEATED'],
        frequency: '6/6 Exams'
      },
      {
        id: 7,
        title: 'Discuss insertion in Red Black Tree and explain all cases with example.',
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ['AKTU FAVORITE'],
        frequency: '5/6 Exams'
      },
      {
        id: 8,
        title: 'Explain properties of Binomial Trees and Binomial Heaps.',
        unit: 2,
        marks: 7,
        probability: 95,
        tags: ['IMPORTANT'],
        frequency: '5/6 Exams'
      },
      {
        id: 9,
        title: 'Explain Skip List and its searching operation with suitable example.',
        unit: 2,
        marks: 7,
        probability: 88,
        tags: ['EXPECTED'],
        frequency: '4/6 Exams'
      },
      {
        id: 10,
        title: 'Explain Fibonacci Heap and compare it with Binomial Heap.',
        unit: 2,
        marks: 7,
        probability: 85,
        tags: ['THEORY'],
        frequency: '3/6 Exams'
      },

      // =========================
      // UNIT 3 - Divide & Conquer + Greedy
      // =========================
      {
        id: 11,
        title: 'Solve Fractional Knapsack problem using Greedy Method.',
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ['MOST REPEATED'],
        frequency: '6/6 Exams'
      },
      {
        id: 12,
        title: 'Explain Kruskal Algorithm for Minimum Spanning Tree with suitable example.',
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ['HIGHLY EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 13,
        title: 'Apply Dijkstra Algorithm to find Single Source Shortest Path.',
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ['HIGHLY EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 14,
        title: 'Explain Prim’s Algorithm and construct MST for a weighted graph.',
        unit: 3,
        marks: 7,
        probability: 90,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      },
      {
        id: 15,
        title: 'Solve Matrix Chain Multiplication problem and find optimal parenthesization.',
        unit: 3,
        marks: 7,
        probability: 85,
        tags: ['EXPECTED'],
        frequency: '2/6 Exams'
      },

      // =========================
      // UNIT 4 - Dynamic Programming & Backtracking
      // =========================
      {
        id: 16,
        title: 'Illustrate N Queen Problem using Backtracking and draw State Space Tree.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['AKTU FAVORITE'],
        frequency: '5/6 Exams'
      },
      {
        id: 17,
        title: 'Solve 0/1 Knapsack using Dynamic Programming.',
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ['SCORING'],
        frequency: '5/6 Exams'
      },
      {
        id: 18,
        title: 'Explain Travelling Salesman Problem using Branch and Bound.',
        unit: 4,
        marks: 7,
        probability: 96,
        tags: ['MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 19,
        title: 'Explain Floyd-Warshall Algorithm with suitable example.',
        unit: 4,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      },
      {
        id: 20,
        title: 'Solve Sum of Subsets Problem using Backtracking and draw State Space Tree.',
        unit: 4,
        marks: 7,
        probability: 90,
        tags: ['EXPECTED'],
        frequency: '4/6 Exams'
      },

      // =========================
      // UNIT 5 - String Matching & NP Completeness
      // =========================
      {
        id: 21,
        title: 'Explain KMP String Matching Algorithm with suitable example.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['MOST REPEATED'],
        frequency: '6/6 Exams'
      },
      {
        id: 22,
        title: 'Differentiate P, NP, NP-Complete and NP-Hard with examples.',
        unit: 5,
        marks: 7,
        probability: 97,
        tags: ['AKTU FAVORITE'],
        frequency: '5/6 Exams'
      },
      {
        id: 23,
        title: 'Explain Rabin-Karp String Matching Algorithm with suitable example.',
        unit: 5,
        marks: 7,
        probability: 94,
        tags: ['HIGHLY EXPECTED'],
        frequency: '4/6 Exams'
      },
      {
        id: 24,
        title: 'Explain Vertex Cover Problem using Approximation Algorithm.',
        unit: 5,
        marks: 7,
        probability: 92,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      },
      {
        id: 25,
        title: 'Explain Set Cover Problem using Approximation Algorithm.',
        unit: 5,
        marks: 7,
        probability: 88,
        tags: ['EXPECTED'],
        frequency: '3/6 Exams'
      }
    ],
    unitDifficulty: [
      {
        id: 1,
        name: 'Unit 1',
        title: 'Algorithm Analysis & Sorting',
        difficulty: 'Easy',
        difficultyScore: 45,
        expectedMarks: 14,
        passProbability: 98,
        advice: 'Focus on Merge Sort, Quick Sort and Recurrence Relations.'
      },
      {
        id: 2,
        name: 'Unit 2',
        title: 'Advanced Data Structures',
        difficulty: 'Medium',
        difficultyScore: 65,
        expectedMarks: 14,
        passProbability: 92,
        advice: 'Binomial Heap and Red Black Tree are repeated every year.'
      },
      {
        id: 3,
        name: 'Unit 3',
        title: 'Greedy Algorithms',
        difficulty: 'Easy-Medium',
        difficultyScore: 55,
        expectedMarks: 14,
        passProbability: 96,
        advice: 'Master Dijkstra, Kruskal and Fractional Knapsack.'
      },
      {
        id: 4,
        name: 'Unit 4',
        title: 'Dynamic Programming & Backtracking',
        difficulty: 'Medium-Hard',
        difficultyScore: 80,
        expectedMarks: 14,
        passProbability: 85,
        advice: 'N Queen, TSP and Knapsack dominate PYQs.'
      },
      {
        id: 5,
        name: 'Unit 5',
        title: 'String Matching & NP Completeness',
        difficulty: 'Medium',
        difficultyScore: 70,
        expectedMarks: 14,
        passProbability: 90,
        advice: 'KMP and NP-Complete are nearly guaranteed topics.'
      }
    ]
  }
};
