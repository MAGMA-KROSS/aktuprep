export const SUBJECT_MOCK_DATA = {
  cs106: {
    questions: [

      // ================= UNIT 1 =================

      {
        id: 1,
        title: "Components of Computer System and Digital Computer Architecture",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "6/7 Exams"
      },
      {
        id: 2,
        title: "Algorithm, Flowchart and Pseudocode with Examples",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 3,
        title: "Compiler vs Interpreter, Assembler, Loader and Linker",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["REPEATED"],
        frequency: "5/7 Exams"
      },
      {
        id: 4,
        title: "Storage Classes in C with Examples",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["MOST EXPECTED"],
        frequency: "5/7 Exams"
      },
      {
        id: 5,
        title: "Data Types, Format Specifiers and Memory Hierarchy",
        unit: 1,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT THEORY"],
        frequency: "5/7 Exams"
      },

      // ================= UNIT 2 =================

      {
        id: 6,
        title: "Operators in C and Operator Precedence & Associativity",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 7,
        title: "Bitwise Operators and Logical Operators",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "5/7 Exams"
      },
      {
        id: 8,
        title: "Type Conversion and Type Casting",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "5/7 Exams"
      },
      {
        id: 9,
        title: "Conditional Statements (if-else, Nested if, Switch)",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["SCORING"],
        frequency: "4/7 Exams"
      },
      {
        id: 10,
        title: "Programs using Conditional Operator and Switch Case",
        unit: 2,
        marks: 7,
        probability: 96,
        tags: ["PROGRAM BASED"],
        frequency: "4/7 Exams"
      },

      // ================= UNIT 3 =================

      {
        id: 11,
        title: "Arrays and Array Passing to Functions",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 12,
        title: "Matrix Programs (Addition, Multiplication, Transpose)",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "6/7 Exams"
      },
      {
        id: 13,
        title: "Strings and String Manipulation Programs",
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "5/7 Exams"
      },
      {
        id: 14,
        title: "Pattern Printing and Loop Based Programs",
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ["VERY IMPORTANT"],
        frequency: "5/7 Exams"
      },
      {
        id: 15,
        title: "Structure, Union and Array of Structures",
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ["REPEATED"],
        frequency: "4/7 Exams"
      },

      // ================= UNIT 4 =================

      {
        id: 16,
        title: "Recursion and Recursive Programs (Factorial/Fibonacci)",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 17,
        title: "Call by Value vs Call by Reference",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "6/7 Exams"
      },
      {
        id: 18,
        title: "Bubble Sort Algorithm and Program",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["MOST EXPECTED"],
        frequency: "6/7 Exams"
      },
      {
        id: 19,
        title: "Selection Sort and Complexity Analysis",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["REPEATED"],
        frequency: "5/7 Exams"
      },
      {
        id: 20,
        title: "Linear Search and Binary Search",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["SCORING TOPIC"],
        frequency: "5/7 Exams"
      },

      // ================= UNIT 5 =================

      {
        id: 21,
        title: "Dynamic Memory Allocation (malloc, calloc, realloc, free)",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["MOST REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 22,
        title: "Pointers and Pointer Arithmetic",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "6/7 Exams"
      },
      {
        id: 23,
        title: "Linked List and Self Referential Structures",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "5/7 Exams"
      },
      {
        id: 24,
        title: "File Handling in C (fopen, fclose, Modes, Operations)",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["MOST EXPECTED"],
        frequency: "5/7 Exams"
      },
      {
        id: 25,
        title: "Macros, Preprocessors and Command Line Arguments",
        unit: 5,
        marks: 7,
        probability: 96,
        tags: ["IMPORTANT"],
        frequency: "4/7 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Computer Fundamentals & C Basics",
        difficulty: "Easy",
        difficultyScore: 45,
        expectedMarks: 16,
        passProbability: 98,
        advice: "Prepare Architecture, Flowchart, Algorithm, Storage Classes and Compiler vs Interpreter."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "Operators & Decision Making",
        difficulty: "Medium",
        difficultyScore: 60,
        expectedMarks: 16,
        passProbability: 96,
        advice: "Operator Precedence, Bitwise Operators and Switch/If programs dominate PYQs."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Loops, Arrays & Strings",
        difficulty: "Medium",
        difficultyScore: 65,
        expectedMarks: 16,
        passProbability: 95,
        advice: "Matrix multiplication, patterns, arrays and strings are extremely important."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Functions, Searching & Sorting",
        difficulty: "Medium",
        difficultyScore: 62,
        expectedMarks: 14,
        passProbability: 96,
        advice: "Recursion, Bubble Sort, Selection Sort and Binary Search are repeated every year."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Pointers & File Handling",
        difficulty: "Hard",
        difficultyScore: 75,
        expectedMarks: 14,
        passProbability: 90,
        advice: "DMA, Pointers, Linked List and File Handling are the highest-weight topics."
      }
    ]
  }
};