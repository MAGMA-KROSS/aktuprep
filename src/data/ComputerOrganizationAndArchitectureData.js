export const SUBJECT_MOCK_DATA = {
  cs304: {
    questions: [

      // ================= UNIT 1 =================

      {
        id: 1,
        title: "Functional Units of Computer System",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED", "AKTU FAVORITE"],
        frequency: "6/6 Exams"
      },
      {
        id: 2,
        title: "Bus Architecture, Bus Types and Bus Arbitration",
        unit: 1,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 3,
        title: "Register Organization and Register Transfer",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 4,
        title: "Processor Organization",
        unit: 1,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "4/6 Exams"
      },
      {
        id: 5,
        title: "Addressing Modes and Stack Organization",
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ["SCORING"],
        frequency: "3/6 Exams"
      },

      // ================= UNIT 2 =================

      {
        id: 6,
        title: "Carry Look Ahead Adder (CLA)",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 7,
        title: "Booth's Multiplication Algorithm",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "6/6 Exams"
      },
      {
        id: 8,
        title: "Floating Point Representation (IEEE-754)",
        unit: 2,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 9,
        title: "ALU Design and Operations",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["IMPORTANT"],
        frequency: "4/6 Exams"
      },
      {
        id: 10,
        title: "Array Multiplier and Division Algorithms",
        unit: 2,
        marks: 7,
        probability: 95,
        tags: ["IMPORTANT"],
        frequency: "3/6 Exams"
      },

      // ================= UNIT 3 =================

      {
        id: 11,
        title: "Instruction Cycle and Instruction Execution",
        unit: 3,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 12,
        title: "Instruction Pipelining",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "5/6 Exams"
      },
      {
        id: 13,
        title: "Hardwired vs Microprogrammed Control Unit",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 14,
        title: "Horizontal and Vertical Microprogramming",
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ["HIGHLY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 15,
        title: "RISC vs CISC Architecture",
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ["IMPORTANT"],
        frequency: "4/6 Exams"
      },

      // ================= UNIT 4 =================

      {
        id: 16,
        title: "Memory Hierarchy",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 17,
        title: "Cache Mapping Techniques",
        unit: 4,
        marks: 7,
        probability: 100,
        tags: ["AKTU FAVORITE"],
        frequency: "6/6 Exams"
      },
      {
        id: 18,
        title: "SRAM vs DRAM",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 19,
        title: "2D and 2.5D Memory Organization",
        unit: 4,
        marks: 7,
        probability: 98,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 20,
        title: "Virtual Memory and Page Replacement",
        unit: 4,
        marks: 7,
        probability: 95,
        tags: ["SCORING"],
        frequency: "3/6 Exams"
      },

      // ================= UNIT 5 =================

      {
        id: 21,
        title: "DMA (Direct Memory Access)",
        unit: 5,
        marks: 7,
        probability: 100,
        tags: ["MOST REPEATED"],
        frequency: "6/6 Exams"
      },
      {
        id: 22,
        title: "Interrupts and Types of Interrupts",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "5/6 Exams"
      },
      {
        id: 23,
        title: "Synchronous vs Asynchronous Data Transfer",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["VERY IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 24,
        title: "I/O Interface and I/O Ports",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["IMPORTANT"],
        frequency: "5/6 Exams"
      },
      {
        id: 25,
        title: "Programmed I/O vs Interrupt Driven I/O",
        unit: 5,
        marks: 7,
        probability: 96,
        tags: ["SCORING"],
        frequency: "4/6 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Introduction & Processor Organization",
        difficulty: "Easy",
        difficultyScore: 60,
        expectedMarks: 16,
        passProbability: 98,
        advice: "Bus architecture, functional units and processor organization are highly repeated."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "Arithmetic & Logic Unit",
        difficulty: "Medium",
        difficultyScore: 75,
        expectedMarks: 18,
        passProbability: 95,
        advice: "Master CLA, Booth Algorithm and IEEE-754 floating point."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Control Unit",
        difficulty: "Medium",
        difficultyScore: 72,
        expectedMarks: 14,
        passProbability: 94,
        advice: "Instruction cycle, pipelining and control unit comparisons are exam favorites."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Memory Organization",
        difficulty: "Hard",
        difficultyScore: 82,
        expectedMarks: 14,
        passProbability: 88,
        advice: "Cache mapping numericals and memory hierarchy dominate long questions."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Input Output Organization",
        difficulty: "Easy",
        difficultyScore: 65,
        expectedMarks: 14,
        passProbability: 97,
        advice: "DMA, interrupts and data transfer modes are highly scoring."
      }
    ]
  }
};