export const SUBJECT_MOCK_DATA = {
  cs105: {
     questions: [
      // ================= UNIT 1 =================

      {
        id: 1,
        title: "Explain P-N Junction Diode with V-I Characteristics.",
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED", "MOST EXPECTED"],
        frequency: "6/7 Exams"
      },
      {
        id: 2,
        title: "Draw and explain Bridge Rectifier with waveforms.",
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "5/7 Exams"
      },
      {
        id: 3,
        title: "Compare Half-Wave and Full-Wave Rectifiers.",
        unit: 1,
        marks: 7,
        probability: 97,
        tags: ["HIGHLY REPEATED"],
        frequency: "5/7 Exams"
      },
      {
        id: 4,
        title: "Explain Zener Diode as Voltage Regulator.",
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ["REPEATED"],
        frequency: "4/7 Exams"
      },
      {
        id: 5,
        title: "Explain Avalanche and Zener Breakdown Mechanisms.",
        unit: 1,
        marks: 7,
        probability: 94,
        tags: ["MOST EXPECTED"],
        frequency: "4/7 Exams"
      },

      // ================= UNIT 2 =================

      {
        id: 6,
        title: "Explain Common Emitter Configuration with Characteristics.",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 7,
        title: "Explain Common Base Configuration with Characteristics.",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["AKTU FAVORITE"],
        frequency: "5/7 Exams"
      },
      {
        id: 8,
        title: "Explain Construction and Characteristics of JFET.",
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 9,
        title: "Explain Enhancement MOSFET with Characteristics.",
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ["MOST EXPECTED"],
        frequency: "5/7 Exams"
      },
      {
        id: 10,
        title: "Explain Depletion MOSFET with Characteristics.",
        unit: 2,
        marks: 7,
        probability: 97,
        tags: ["REPEATED"],
        frequency: "5/7 Exams"
      },

      // ================= UNIT 3 =================

      {
        id: 11,
        title: "Explain Differential Amplifier and derive Output Equation.",
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED"],
        frequency: "5/7 Exams"
      },
      {
        id: 12,
        title: "Explain Summing Amplifier using Op-Amp.",
        unit: 3,
        marks: 7,
        probability: 97,
        tags: ["AKTU FAVORITE"],
        frequency: "4/7 Exams"
      },
      {
        id: 13,
        title: "Explain Integrator using Op-Amp and derive Output Voltage.",
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ["MOST EXPECTED"],
        frequency: "4/7 Exams"
      },
      {
        id: 14,
        title: "Explain Inverting Amplifier and derive Gain.",
        unit: 3,
        marks: 7,
        probability: 94,
        tags: ["REPEATED"],
        frequency: "3/7 Exams"
      },
      {
        id: 15,
        title: "Explain IC-741 Op-Amp and Equivalent Circuit.",
        unit: 3,
        marks: 7,
        probability: 90,
        tags: ["IMPORTANT"],
        frequency: "2/7 Exams"
      },

      // ================= UNIT 4 =================

      {
        id: 16,
        title: "Explain Boolean Algebra Laws and Theorems.",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 17,
        title: "K-Map Minimization and Implementation.",
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "6/7 Exams"
      },
      {
        id: 18,
        title: "Implement AND, OR, NOR using NAND Gates.",
        unit: 4,
        marks: 7,
        probability: 97,
        tags: ["MOST EXPECTED"],
        frequency: "5/7 Exams"
      },
      {
        id: 19,
        title: "Implement AND, OR, NAND using NOR Gates.",
        unit: 4,
        marks: 7,
        probability: 95,
        tags: ["REPEATED"],
        frequency: "4/7 Exams"
      },
      {
        id: 20,
        title: "SOP and POS Representation & Conversion.",
        unit: 4,
        marks: 7,
        probability: 94,
        tags: ["IMPORTANT"],
        frequency: "4/7 Exams"
      },

      // ================= UNIT 5 =================

      {
        id: 21,
        title: "Explain Need of Modulation in Communication System.",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["HIGHLY REPEATED"],
        frequency: "6/7 Exams"
      },
      {
        id: 22,
        title: "Draw and Explain Communication System Block Diagram.",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["MOST EXPECTED"],
        frequency: "5/7 Exams"
      },
      {
        id: 23,
        title: "AM Numerical Problems based on Modulation Index.",
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ["AKTU FAVORITE"],
        frequency: "6/7 Exams"
      },
      {
        id: 24,
        title: "AM Numerical Problems based on Sideband Power.",
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ["SCORING TOPIC"],
        frequency: "5/7 Exams"
      },
      {
        id: 25,
        title: "Explain Cellular Communication and Frequency Reuse.",
        unit: 5,
        marks: 7,
        probability: 90,
        tags: ["IMPORTANT"],
        frequency: "3/7 Exams"
      }
    ],

    unitDifficulty: [
      {
        id: 1,
        name: "Unit 1",
        title: "Semiconductor Diodes & Applications",
        difficulty: "Easy",
        difficultyScore: 40,
        expectedMarks: 16,
        passProbability: 98,
        advice: "PN Junction, Rectifiers, Zener Diode and Voltage Multiplier dominate PYQs."
      },
      {
        id: 2,
        name: "Unit 2",
        title: "BJT, JFET & MOSFET",
        difficulty: "Medium",
        difficultyScore: 65,
        expectedMarks: 16,
        passProbability: 92,
        advice: "CE Configuration, JFET and MOSFET together contribute maximum weightage."
      },
      {
        id: 3,
        name: "Unit 3",
        title: "Operational Amplifiers",
        difficulty: "Medium",
        difficultyScore: 60,
        expectedMarks: 14,
        passProbability: 94,
        advice: "Differential Amplifier, Integrator and Summing Amplifier are most important."
      },
      {
        id: 4,
        name: "Unit 4",
        title: "Digital Electronics",
        difficulty: "Hard",
        difficultyScore: 82,
        expectedMarks: 14,
        passProbability: 85,
        advice: "K-Map and Universal Gates are the most repeated AKTU questions."
      },
      {
        id: 5,
        name: "Unit 5",
        title: "Communication Engineering",
        difficulty: "Easy",
        difficultyScore: 38,
        expectedMarks: 14,
        passProbability: 98,
        advice: "AM Numericals and Modulation are almost guaranteed every year."
      }
    ]
  }
};