// Isolated Mock Data for subjects, keyed by their subject ID.
export const SUBJECT_MOCK_DATA = {
  cs501: {
    questions: [
      {
        id: 1,
        title: 'Explain Three Schema Architecture of DBMS with neat diagram.',
        unit: 1,
        marks: 7,
        probability: 98,
        tags: ['HIGHLY REPEATED', 'MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 2,
        title: 'Draw and explain ER Diagram. Explain its components with suitable example.',
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ['SCORING TOPIC', 'LONG ANSWER'],
        frequency: '4/6 Exams'
      },
      {
        id: 3,
        title: 'Differentiate between Generalization, Specialization and Aggregation.',
        unit: 1,
        marks: 7,
        probability: 92,
        tags: ['REPEATED'],
        frequency: '4/6 Exams'
      },
      {
        id: 4,
        title: 'Explain Data Independence and its types with examples.',
        unit: 1,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/6 Exams'
      },
      {
        id: 5,
        title: 'Discuss Database Architecture and various DBMS components.',
        unit: 1,
        marks: 7,
        probability: 85,
        tags: ['IMPORTANT'],
        frequency: '3/6 Exams'
      },

      {
        id: 6,
        title: 'Explain different types of Joins with suitable examples.',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['HIGHLY REPEATED', 'MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 7,
        title: 'Write SQL queries for Employee/Library database schema.',
        unit: 2,
        marks: 7,
        probability: 98,
        tags: ['SCORING TOPIC'],
        frequency: '6/6 Exams'
      },
      {
        id: 8,
        title: 'Explain Relational Algebra operations with examples.',
        unit: 2,
        marks: 7,
        probability: 94,
        tags: ['LONG ANSWER'],
        frequency: '4/6 Exams'
      },
      {
        id: 9,
        title: 'Explain Integrity Constraints with suitable examples.',
        unit: 2,
        marks: 7,
        probability: 90,
        tags: ['REPEATED'],
        frequency: '4/6 Exams'
      },
      {
        id: 10,
        title: 'Explain Triggers in SQL/PLSQL with example.',
        unit: 2,
        marks: 7,
        probability: 85,
        tags: ['IMPORTANT'],
        frequency: '3/6 Exams'
      },

      {
        id: 11,
        title: 'Find Candidate Key(s) and Prime/Non-Prime Attributes for a given relation.',
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ['HIGHLY REPEATED', 'MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 12,
        title: 'Explain Normalization. Convert relation into 2NF, 3NF and BCNF.',
        unit: 3,
        marks: 7,
        probability: 98,
        tags: ['SCORING TOPIC', 'LONG ANSWER'],
        frequency: '6/6 Exams'
      },
      {
        id: 13,
        title: 'Explain Lossless Join and Lossy Join Decomposition with example.',
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ['MOST EXPECTED'],
        frequency: '4/6 Exams'
      },
      {
        id: 14,
        title: 'Explain Functional Dependency and Canonical Cover with example.',
        unit: 3,
        marks: 7,
        probability: 92,
        tags: ['REPEATED'],
        frequency: '4/6 Exams'
      },
      {
        id: 15,
        title: 'Explain MVD. Discuss 4NF and 5NF with examples.',
        unit: 3,
        marks: 7,
        probability: 88,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      },

      {
        id: 16,
        title: 'Explain ACID Properties of Transaction with suitable examples.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['HIGHLY REPEATED', 'MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 17,
        title: 'Explain Conflict Serializability using Precedence Graph.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['AKTU FAVORITE'],
        frequency: '6/6 Exams'
      },
      {
        id: 18,
        title: 'Differentiate Recoverable, Cascadeless and Strict Schedules.',
        unit: 4,
        marks: 7,
        probability: 95,
        tags: ['LONG ANSWER'],
        frequency: '4/6 Exams'
      },
      {
        id: 19,
        title: 'Explain Log Based Recovery. Differentiate Deferred and Immediate Update.',
        unit: 4,
        marks: 7,
        probability: 90,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      },
      {
        id: 20,
        title: 'Explain Transaction States with suitable diagram.',
        unit: 4,
        marks: 7,
        probability: 85,
        tags: ['THEORY'],
        frequency: '3/6 Exams'
      },

      {
        id: 21,
        title: 'Explain Timestamp Ordering Protocol with example.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['HIGHLY REPEATED', 'MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 22,
        title: 'Explain Validation Based Protocol (Optimistic Concurrency Control).',
        unit: 5,
        marks: 7,
        probability: 98,
        tags: ['AKTU FAVORITE'],
        frequency: '5/6 Exams'
      },
      {
        id: 23,
        title: 'Define Deadlock. Explain its necessary conditions, detection and recovery.',
        unit: 5,
        marks: 7,
        probability: 96,
        tags: ['MOST EXPECTED'],
        frequency: '5/6 Exams'
      },
      {
        id: 24,
        title: 'Explain Multi-Version Concurrency Control (MVCC).',
        unit: 5,
        marks: 7,
        probability: 90,
        tags: ['REPEATED'],
        frequency: '4/6 Exams'
      },
      {
        id: 25,
        title: 'Explain Locking Protocols and Two-Phase Locking (2PL).',
        unit: 5,
        marks: 7,
        probability: 88,
        tags: ['IMPORTANT'],
        frequency: '4/6 Exams'
      }
    ],
    unitDifficulty: [
      {
        id: 1,
        name: 'Unit 1',
        title: 'Introduction & ER Model',
        difficulty: 'Easy',
        difficultyScore: 40,
        expectedMarks: 12,
        passProbability: 98,
        advice: 'Three Schema Architecture, ER Diagram, Generalization and Data Independence are repeated every year.'
      },
      {
        id: 2,
        name: 'Unit 2',
        title: 'Relational Model & SQL',
        difficulty: 'Medium',
        difficultyScore: 60,
        expectedMarks: 14,
        passProbability: 92,
        advice: 'Master SQL queries and Joins. These are among the most scoring questions in AKTU.'
      },
      {
        id: 3,
        name: 'Unit 3',
        title: 'Database Design & Normalization',
        difficulty: 'Hard',
        difficultyScore: 90,
        expectedMarks: 16,
        passProbability: 75,
        advice: 'Candidate Keys, Normalization, FD, BCNF and Lossless Join are AKTU favourites.'
      },
      {
        id: 4,
        name: 'Unit 4',
        title: 'Transaction Processing & Recovery',
        difficulty: 'Medium',
        difficultyScore: 65,
        expectedMarks: 14,
        passProbability: 95,
        advice: 'ACID and Conflict Serializability are among the highest probability questions.'
      },
      {
        id: 5,
        name: 'Unit 5',
        title: 'Concurrency Control',
        difficulty: 'Medium',
        difficultyScore: 70,
        expectedMarks: 14,
        passProbability: 90,
        advice: 'Timestamp Protocol, Validation Protocol and Deadlock appear repeatedly.'
      }
    ]
  }
};
