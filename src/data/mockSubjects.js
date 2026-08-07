export const BRANCHES = [
  { 
    id: 'CSE', 
    name: 'Computer Science & Engineering', 
    shortName: 'CSE', 
    code: 'CS',
    description: 'Data Structures, Algorithms, DBMS, Web & Software Systems',
    badge: 'Popular' 
  },
  { 
    id: 'ECE', 
    name: 'Electronics & Communication', 
    shortName: 'ECE', 
    code: 'EC',
    description: 'Signals, Microprocessors, Analog Circuits & Communication',
    badge: 'Core Tech' 
  }
];

export const SEMESTERS = ['1st', '3rd', '5th'];

export const MOCK_SUBJECTS = {
  CSE: {
    '1st': [
      { id: 'cs101', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs102', name: 'Engineering Mathematics-I', code: 'BAS103', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs103', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs104', name: 'Fundamentals of Mechanical Engineering', code: 'BME101', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs105', name: 'Fundamentals of Electronics Engineering', code: 'BEC201', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs106', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs107', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs108', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs109', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
    ],
    '2nd': [
      { id: 'cs201', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs202', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs203', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs204', name: 'Fundamentals of Mechanical Engineering', code: 'BME101', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs205', name: 'Engineering Mathematics-II', code: 'BAS203', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs206', name: 'Fundamentals of Electronics Engineering', code: 'BEC201', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs207', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs208', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs209', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
    ],
    '3rd': [
      { id: 'cs301', name: 'Mathematics-IV', code: 'BAS303', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs302', name: 'Universal Human Values and Professional Ethics', code: 'BVE301', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs303', name: 'Data Structure', code: 'BCS301', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs304', name: 'Computer Organization and Architecture', code: 'BCS302', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs305', name: 'Discrete Structures & Theory of Logic', code: 'BCS303', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs306', name: 'Technical communication', code: 'BAS301', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs307', name: 'Energy Science and Enineering', code: 'BOE304', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs308', name: 'Python Programming', code: 'BCC302', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs309', name: 'Cyber Security', code: 'BCC301', pyqCount: 0, difficulty: 'Easy' }
    ],
    '4th': [
      { id: 'cs401', name: 'Operating Systems', code: 'KCS401', pyqCount: 195, difficulty: 'Medium' },
      { id: 'cs402', name: 'TAFL', code: 'KCS402', pyqCount: 140, difficulty: 'Hard' },
      { id: 'cs403', name: 'Python Programming', code: 'KNC402', pyqCount: 110, difficulty: 'Easy' }
    ],
    '5th': [
      { id: 'cs501', name: 'Database Management System', code: 'BCS501', pyqCount: 144, difficulty: 'Medium' },
      { id: 'cs502', name: 'Design and alalysis of algorithm', code: 'BCS503', pyqCount: 144, difficulty: 'Hard' },
      { id: 'cs503', name: 'Introduction to Data analytics and visualization', code: 'BCDS501', pyqCount: 94, difficulty: 'Easy' },
      { id: 'cs504', name: 'Application of soft computing', code: 'BCS056', pyqCount: 119, difficulty: 'Medium' },
      { id: 'cs507', name: 'Business intellignece and analytics', code: 'BCDS051', pyqCount: 72, difficulty: 'Medium' },
      { id: 'cs505', name: 'Essence of The Indian culture', code: 'BNC502', pyqCount: 164, difficulty: 'Easy' },
      { id: 'cs506', name: 'Constitution of India', code: 'BNC501', pyqCount: 189, difficulty: 'Easy' }
    ],
    '6th': [
      { id: 'cs601', name: 'Software Engineering', code: 'KCS601', pyqCount: 150, difficulty: 'Easy' },
      { id: 'cs602', name: 'Web Technology', code: 'KCS602', pyqCount: 175, difficulty: 'Medium' },
      { id: 'cs603', name: 'Computer Networks', code: 'KCS603', pyqCount: 190, difficulty: 'Medium' }
    ]
  },
  ECE: {
    '1st': [
      { id: 'cs101', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs102', name: 'Engineering Mathematics-I', code: 'BAS103', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs105', name: 'Fundamentals of Electronics Engineering', code: 'BEC101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs103', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs104', name: 'Fundamentals of Mechanical Engineering', code: 'BME101', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs106', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs108', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs107', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs109', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
    ],
    '2nd': [
      { id: 'cs201', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs202', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs205', name: 'Engineering Mathematics-II', code: 'BAS203', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs206', name: 'Fundamentals of Electronics Engineering', code: 'BEC201', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs203', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
      { id: 'cs207', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs208', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs209', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
    ],
    '3rd': [
      { id: 'ec301', name: 'Electronic Devices', code: 'BEC301', pyqCount: 120, difficulty: 'Hard' },
      { id: 'ec302', name: 'Digital Electronics', code: 'BEC302', pyqCount: 150, difficulty: 'Medium' },
      { id: 'ec303', name: 'Network Analysis & Synthesis', code: 'BEC303', pyqCount: 135, difficulty: 'Hard' },
      { id: 'cs301', name: 'Mathematics-IV', code: 'BAS303', pyqCount: 0, difficulty: 'Hard' },
      { id: 'cs306', name: 'Technical communication', code: 'BAS301', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs302', name: 'Universal Human Values and Professional Ethics', code: 'BVE301', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs307', name: 'Energy Science and Enineering', code: 'BOE304', pyqCount: 0, difficulty: 'Easy' },
      { id: 'cs309', name: 'Cyber Security', code: 'BCC301', pyqCount: 0, difficulty: 'Easy' }
    ],
    '4th': [
      { id: 'ec401', name: 'Analog Circuits', code: 'BEC401', pyqCount: 130, difficulty: 'Hard' },
      { id: 'ec402', name: 'Signals & Systems', code: 'BEC402', pyqCount: 145, difficulty: 'Hard' },
      { id: 'ec403', name: 'Electromagnetic Field Theory', code: 'BEC403', pyqCount: 110, difficulty: 'Hard' }
    ],
    '5th': [
      { id: 'ec501', name: 'Digital Signal Processing', code: 'BEC501', pyqCount: 160, difficulty: 'Hard' },
      { id: 'ec502', name: 'Integrated Circuits', code: 'BEC502', pyqCount: 140, difficulty: 'Medium' },
      // { id: 'ec503', name: 'Communication Engineering', code: 'BEC503', pyqCount: 155, difficulty: 'Medium' },
      { id: 'ec504', name: 'Microprocessor & Microcontroller', code: 'BEC051', pyqCount: 125, difficulty: 'Hard' },
      // { id: 'cs505', name: 'Essence of The Indian culture', code: 'BNC502', pyqCount: 164, difficulty: 'Easy' },
      { id: 'cs506', name: 'Constitution of India', code: 'BNC501', pyqCount: 189, difficulty: 'Easy' }
    ],
    '6th': [
      { id: 'ec601', name: 'Control Systems', code: 'BEC601', pyqCount: 140, difficulty: 'Medium' },
      { id: 'ec602', name: 'VLSI Design', code: 'BEC602', pyqCount: 150, difficulty: 'Hard' },
      { id: 'ec603', name: 'Antenna & Wave Propagation', code: 'BEC603', pyqCount: 130, difficulty: 'Medium' }
    ]
  }
};

export const getSubjectDetails = (id) => {
  for (const branch in MOCK_SUBJECTS) {
    const branchObj = MOCK_SUBJECTS[branch];
    for (const sem in branchObj) {
      const found = branchObj[sem].find(sub => sub.id === id);
      if (found) return { ...found, semester: sem, branch };
    }
  }
  return null;
};
