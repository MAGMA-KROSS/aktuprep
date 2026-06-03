export const SUBJECT_MOCK_DATA = {
  cs303: {
    questions: [

      // ================= UNIT 1 =================

      {
        id: 1,
        title: "Asymptotic Notations (Big O, Theta, Omega)",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "6/6 Exams"
      },
      {
        id: 2,
        title: "Array Address Calculation (Row Major & Column Major)",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["NUMERICAL", "MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 3,
        title: "Polynomial Representation using Linked List",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 4,
        title: "Singly & Doubly Linked List Operations",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 5,
        title: "Time-Space Tradeoff and ADT",
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      },

      // ================= UNIT 2 =================

      {
        id: 6,
        title: "Infix to Postfix Conversion",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 7,
        title: "Stack using Linked List",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "5/6 Exams"
      },
      {
        id: 8,
        title: "Recursion and Tower of Hanoi",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 9,
        title: "Circular Queue and Deque",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 10,
        title: "Expression Evaluation using Stack",
        unit: 2,
        marks: 7,
        probability: 96,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      },

      // ================= UNIT 3 =================

      {
        id: 11,
        title: "Hashing and Collision Resolution",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 12,
        title: "Insertion Sort",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 13,
        title: "Merge Sort",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "5/6 Exams"
      },
      {
        id: 14,
        title: "Quick Sort",
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 15,
        title: "Binary Search and Index Sequential Search",
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      },

      // ================= UNIT 4 =================

      {
        id: 16,
        title: "Binary Search Tree (BST)",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 17,
        title: "AVL Tree Construction",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "5/6 Exams"
      },
      {
        id: 18,
        title: "Binary Tree Traversals & Tree Construction",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 19,
        title: "B-Tree",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 20,
        title: "Huffman Coding & Threaded Binary Tree",
        unit: 4,
        marks: 7,
        probability: 96,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      },

      // ================= UNIT 5 =================

      {
        id: 21,
        title: "Dijkstra Algorithm",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 22,
        title: "Prim's Algorithm (MST)",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "6/6 Exams"
      },
      {
        id: 23,
        title: "Graph Representations (Adjacency Matrix/List)",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 24,
        title: "DFS and BFS Traversal",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 25,
        title: "Floyd Warshall Algorithm",
        unit: 5,
        marks: 7,
        probability: 95,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Arrays & Linked Lists",
        difficulty: "Medium",
        difficultyScore: 72,
        expectedMarks: 16,
        passProbability: 96,
        advice: "Array address numericals and polynomial linked list are repeated every year."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "Stacks, Queues & Recursion",
        difficulty: "Easy",
        difficultyScore: 65,
        expectedMarks: 16,
        passProbability: 98,
        advice: "Infix-Postfix conversion and stack implementation are must-do topics."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Searching, Hashing & Sorting",
        difficulty: "Medium",
        difficultyScore: 75,
        expectedMarks: 16,
        passProbability: 95,
        advice: "Hashing, Merge Sort and Quick Sort dominate long questions."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Trees",
        difficulty: "Hard",
        difficultyScore: 85,
        expectedMarks: 16,
        passProbability: 88,
        advice: "BST, AVL and B-Tree are the highest-yield topics."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Graphs",
        difficulty: "Medium",
        difficultyScore: 78,
        expectedMarks: 16,
        passProbability: 92,
        advice: "Prim's, Dijkstra and BFS/DFS appear almost every year."
      }
    ]
  }
};