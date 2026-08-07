export const SUBJECT_MOCK_DATA = {
  ec502: {
    questions: [
      // UNIT 1 - IC 741 Operational Amplifier
      {
        id: 1,
        title: 'Explain Overall Voltage Gain calculation of IC 741 using Small Signal Model with neat circuit diagram.',
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 2,
        title: 'Perform the DC Analysis of Input Stage of IC 741 Operational Amplifier.',
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 3,
        title: 'Explain Frequency Response, Frequency Compensation techniques, and Slew Rate relationship in IC 741.',
        unit: 1,
        marks: 7,
        probability: 93,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 4,
        title: 'Explain Current Mirror and Widlar Current Source circuit design with mathematical derivations.',
        unit: 1,
        marks: 7,
        probability: 88,
        tags: ['THEORY', 'DERIVATION'],
        frequency: '2/5 Exams'
      },
      {
        id: 5,
        title: 'Describe the Output Stage and Short Circuit Protection mechanism of IC 741.',
        unit: 1,
        marks: 7,
        probability: 85,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },

      // UNIT 2 - Linear Applications & Active Filters
      {
        id: 6,
        title: 'Explain KHN (Kerwin-Huelsman-Newcomb) Universal Active Filter with transfer function derivation and design.',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 7,
        title: 'Explain 3-Op-Amp Instrumentation Amplifier with schematic diagram, voltage gain derivation, and applications.',
        unit: 2,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '3/5 Exams'
      },
      {
        id: 8,
        title: 'Derive Generalized Impedance Converter (GIC) equations and explain Simulated Inductor application.',
        unit: 2,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT', 'DERIVATION'],
        frequency: '4/5 Exams'
      },
      {
        id: 9,
        title: 'Explain Voltage-to-Current (V-I) and Current-to-Voltage (I-V) Converters for floating and grounded loads.',
        unit: 2,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 10,
        title: 'Describe Second Order Active Butterworth Filters (LPF, HPF, BPF, BSF) with transfer functions.',
        unit: 2,
        marks: 7,
        probability: 85,
        tags: ['THEORY', 'DESIGN'],
        frequency: '3/5 Exams'
      },

      // UNIT 3 - Nonlinear Applications
      {
        id: 11,
        title: 'Explain Logarithmic and Anti-Logarithmic Amplifiers using Op-Amps with Temperature Compensation circuit.',
        unit: 3,
        marks: 7,
        probability: 96,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '4/5 Exams'
      },
      {
        id: 12,
        title: 'Design Triangular Wave Generator using Op-Amp, explain working principle, waveforms, and frequency equation.',
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 13,
        title: 'Explain Analog Multipliers, Four-Quadrant operation, and Gilbert Multiplier Cell with applications.',
        unit: 3,
        marks: 7,
        probability: 92,
        tags: ['IMPORTANT'],
        frequency: '3/5 Exams'
      },
      {
        id: 14,
        title: 'Explain Comparator, Zero Crossing Detector, and Schmitt Trigger with output waveforms and applications.',
        unit: 3,
        marks: 7,
        probability: 88,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 15,
        title: 'Explain Frequency Compensation Methods (Dominant Pole and Pole-Zero Compensation) in Operational Amplifiers.',
        unit: 3,
        marks: 7,
        probability: 84,
        tags: ['THEORY'],
        frequency: '2/5 Exams'
      },

      // UNIT 4 - CMOS Logic
      {
        id: 16,
        title: 'Explain CMOS Flip-Flops (Clocked SR, D, JK, and Master-Slave) with schematic logic circuit and operation.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 17,
        title: 'Implement CMOS NAND and NOR Gates using Pull-Up (PUN) and Pull-Down (PDN) Networks.',
        unit: 4,
        marks: 7,
        probability: 96,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 18,
        title: 'Explain CMOS Realization of complex Boolean Functions using systematic PUN and PDN design rules.',
        unit: 4,
        marks: 7,
        probability: 92,
        tags: ['IMPORTANT'],
        frequency: '3/5 Exams'
      },
      {
        id: 19,
        title: 'Describe CMOS Inverter static VTC characteristics, noise margins, and dynamic power dissipation.',
        unit: 4,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 20,
        title: 'Explain Pull-Up Network (PUN) and Pull-Down Network (PDN) design methodology for complimentary CMOS logic.',
        unit: 4,
        marks: 7,
        probability: 85,
        tags: ['DESIGN'],
        frequency: '2/5 Exams'
      },

      // UNIT 5 - 555 Timer, VCO, PLL
      {
        id: 21,
        title: 'Explain Phase Locked Loop (PLL) IC 565 Block Diagram, working principle, lock-in range, capture range, and applications.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 22,
        title: 'Explain IC 555 Timer as Astable Multivibrator with internal functional block diagram, waveforms, frequency and duty cycle derivation.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'AKTU FAVORITE'],
        frequency: '5/5 Exams'
      },
      {
        id: 23,
        title: 'Explain Voltage Controlled Oscillator (VCO) IC 566 Block Diagram, working operation, and output frequency equation.',
        unit: 5,
        marks: 7,
        probability: 95,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 24,
        title: 'Explain IC 555 Timer as Monostable Multivibrator with circuit diagram, operating waveforms, and pulse width derivation.',
        unit: 5,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 25,
        title: 'Describe various applications of PLL (Frequency Multiplier, Frequency Translator, AM Detector, and Phase Detector).',
        unit: 5,
        marks: 7,
        probability: 88,
        tags: ['THEORY', 'APPLICATIONS'],
        frequency: '3/5 Exams'
      }
    ],
    unitDifficulty: [
      {
        id: 1,
        name: 'Unit 1',
        title: 'IC 741 Operational Amplifier',
        difficulty: 'Hard',
        difficultyScore: 85,
        expectedMarks: 14,
        passProbability: 78,
        advice: 'Focus on Overall Voltage Gain derivation, DC Analysis of Input Stage, and Current Mirrors.'
      },
      {
        id: 2,
        name: 'Unit 2',
        title: 'Linear Applications & Active Filters',
        difficulty: 'Hard',
        difficultyScore: 82,
        expectedMarks: 14,
        passProbability: 80,
        advice: 'Master KHN Filter design, 3-Op-Amp Instrumentation Amplifier gain, and GIC equations.'
      },
      {
        id: 3,
        name: 'Unit 3',
        title: 'Nonlinear Applications',
        difficulty: 'Medium',
        difficultyScore: 70,
        expectedMarks: 14,
        passProbability: 88,
        advice: 'Log/Anti-log amplifiers with temperature compensation and Triangular Wave Generator are essential.'
      },
      {
        id: 4,
        name: 'Unit 4',
        title: 'CMOS Logic',
        difficulty: 'Medium',
        difficultyScore: 65,
        expectedMarks: 14,
        passProbability: 92,
        advice: 'CMOS Flip-Flops (SR, D, JK) and PUN/PDN implementation of NAND/NOR gates are high-scoring.'
      },
      {
        id: 5,
        name: 'Unit 5',
        title: '555 Timer, VCO & PLL',
        difficulty: 'Easy',
        difficultyScore: 55,
        expectedMarks: 14,
        passProbability: 95,
        advice: 'PLL block diagram, IC 555 Astable multivibrator, and IC 566 VCO appear every year.'
      }
    ]
  }
};
