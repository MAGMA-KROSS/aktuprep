export const SUBJECT_MOCK_DATA = {
  ec504: {
    questions: [
      // UNIT 1 - 8085 Microprocessor Architecture & Interfacing
      {
        id: 1,
        title: 'Explain 8085 Microprocessor Architecture with functional block diagram and detailed working of each unit.',
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 2,
        title: 'Explain Memory Interfacing with 8085 Microprocessor (ROM & RAM) including memory mapping, chip select, and address decoding logic.',
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 3,
        title: 'Explain 8085 Pins, Control Signals (ALE, READY, HOLD, HLDA, CLK, RD, WR, IO/M) and Timing & Control Unit working.',
        unit: 1,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 4,
        title: 'Explain Address/Data Bus Demultiplexing in 8085 Microprocessor using 74LS373 Latch with circuit diagram.',
        unit: 1,
        marks: 7,
        probability: 88,
        tags: ['THEORY', 'DIAGRAM'],
        frequency: '3/5 Exams'
      },
      {
        id: 5,
        title: 'Explain Interfacing of Input and Output Devices with 8085 (Memory Mapped I/O vs I/O Mapped I/O schemes).',
        unit: 1,
        marks: 7,
        probability: 85,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },

      // UNIT 2 - 8085 Programming
      {
        id: 6,
        title: 'Explain 8085 Interrupts (Hardware vs Software Interrupts, Priority, Vectored/Non-vectored, SIM and RIM instructions).',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 7,
        title: 'Describe 8085 Addressing Modes with suitable examples and explain MOV, LXI, DAD, CMP, RAR, ADI, ANA instructions.',
        unit: 2,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 8,
        title: 'Write 8085 Assembly Language Programs to find Largest/Smallest number in an array and sum of N numbers.',
        unit: 2,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT', 'PROGRAMMING'],
        frequency: '4/5 Exams'
      },
      {
        id: 9,
        title: 'Explain Jump, Branching, and Looping Instructions in 8085 with flowchart and time delay generation programs.',
        unit: 2,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 10,
        title: 'Describe 8085 Flag Register architecture, status flags (S, Z, AC, P, CY), and Arithmetic/Logical instruction impact.',
        unit: 2,
        marks: 7,
        probability: 85,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },

      // UNIT 3 - 8086 & Peripheral Devices
      {
        id: 11,
        title: 'Explain 8086 Microprocessor Addressing Modes with detailed numerical and register examples.',
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 12,
        title: 'Explain 8086 Memory Segmentation, Segment Registers, Physical Address calculation (20-bit generation), and advantages.',
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 13,
        title: 'Explain 8259 Programmable Interrupt Controller (PIC) Architecture, functional block diagram, and ICW initialization command words.',
        unit: 3,
        marks: 7,
        probability: 93,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 14,
        title: 'Explain DMA Controller (8237/8257) Block Diagram, DMA data transfer mechanism, and operating modes.',
        unit: 3,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 15,
        title: 'Explain 8255 Programmable Peripheral Interface (PPI) / 8253 Timer Architecture, Control Word Register, and Modes of operation.',
        unit: 3,
        marks: 7,
        probability: 86,
        tags: ['THEORY', 'PERIPHERALS'],
        frequency: '3/5 Exams'
      },

      // UNIT 4 - 8051 Basics
      {
        id: 16,
        title: 'Explain 8051 Microcontroller Memory Organization (Internal RAM structure, ROM, Register Banks, Stack, and Bit-Addressable RAM).',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 17,
        title: 'Explain 8051 Microcontroller Architecture with neat functional block diagram and CPU features.',
        unit: 4,
        marks: 7,
        probability: 96,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 18,
        title: 'Explain 8051 I/O Ports and Pin Diagram (Port 0, Port 1, Port 2, Port 3 internal structures and dual pin functions).',
        unit: 4,
        marks: 7,
        probability: 93,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 19,
        title: 'Describe Special Function Registers (SFRs) in 8051 (PSW, PC, SP, DPTR, ACC, B register) and their functions.',
        unit: 4,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 20,
        title: 'Explain Program Status Word (PSW) register, status flags, and Stack Operation in 8051 Microcontroller.',
        unit: 4,
        marks: 7,
        probability: 85,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },

      // UNIT 5 - 8051 Programming & Interfacing
      {
        id: 21,
        title: 'Explain DAC Interfacing with 8051 Microcontroller and write an 8051 Assembly/C Program to Generate a Sine Wave.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 22,
        title: 'Explain 8051 Timers and Counters (TMOD and TCON Registers, Operating Modes Mode 0-3, and Timer programming).',
        unit: 5,
        marks: 7,
        probability: 96,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 23,
        title: 'Explain Serial Communication in 8051 (SBUF, SCON, PCON registers, baud rate calculation, and serial programming).',
        unit: 5,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 24,
        title: 'Explain Interrupts in 8051 Microcontroller (IE Register, IP Register, interrupt vectors, and interrupt service routine execution).',
        unit: 5,
        marks: 7,
        probability: 89,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 25,
        title: 'Explain LCD Display / Matrix Keyboard Interfacing with 8051 Microcontroller and 8051 Addressing Modes.',
        unit: 5,
        marks: 7,
        probability: 86,
        tags: ['INTERFACING', 'THEORY'],
        frequency: '3/5 Exams'
      }
    ],
    unitDifficulty: [
      {
        id: 1,
        name: 'Unit 1',
        title: '8085 Microprocessor Architecture & Interfacing',
        difficulty: 'Medium',
        difficultyScore: 72,
        expectedMarks: 14,
        passProbability: 85,
        advice: 'Master 8085 Block Diagram, Memory Interfacing scheme, and Bus Demultiplexing.'
      },
      {
        id: 2,
        name: 'Unit 2',
        title: '8085 Programming',
        difficulty: 'Hard',
        difficultyScore: 85,
        expectedMarks: 14,
        passProbability: 75,
        advice: 'SIM/RIM Interrupts and Array-based ALP programs (Largest/Smallest) are exam staples.'
      },
      {
        id: 3,
        name: 'Unit 3',
        title: '8086 & Peripheral Devices',
        difficulty: 'Hard',
        difficultyScore: 88,
        expectedMarks: 14,
        passProbability: 72,
        advice: 'Focus on 8086 Addressing Modes, Memory Segmentation, 8259 PIC and 8257 DMA Controller.'
      },
      {
        id: 4,
        name: 'Unit 4',
        title: '8051 Basics',
        difficulty: 'Easy',
        difficultyScore: 55,
        expectedMarks: 14,
        passProbability: 95,
        advice: '8051 Memory Organization (RAM/ROM) and 8051 Block Diagram score full marks easily.'
      },
      {
        id: 5,
        name: 'Unit 5',
        title: '8051 Programming & Interfacing',
        difficulty: 'Medium',
        difficultyScore: 70,
        expectedMarks: 14,
        passProbability: 88,
        advice: 'DAC Interfacing for Sine Wave, TMOD/TCON timer modes, and SCON serial communication are guaranteed questions.'
      }
    ]
  }
};
