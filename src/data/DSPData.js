export const SUBJECT_MOCK_DATA = {
  ec501: {
    questions: [
      // UNIT 1 - DSP Introduction & Filter Realization
      {
        id: 1,
        title: 'Explain Realization of IIR Systems (Direct Form I, Direct Form II, Cascade, and Parallel structures) with block diagrams and signal flow graphs.',
        unit: 1,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 2,
        title: 'Explain Realization of IIR Filters using Ladder Structure and Continued Fraction Expansion method with numerical example.',
        unit: 1,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 3,
        title: 'Explain FIR Filter Realization (Direct Form, Cascade Form, and Linear Phase realization structures).',
        unit: 1,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 4,
        title: 'Differentiate between Recursive and Non-recursive DSP systems and Canonic vs Non-Canonic Structures with diagrams.',
        unit: 1,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },
      {
        id: 5,
        title: 'Describe Basic DSP Building Blocks (Adders, Multipliers, Unit Delays) and System Functions of LTI Systems.',
        unit: 1,
        marks: 7,
        probability: 85,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },

      // UNIT 2 - IIR Filter Design
      {
        id: 6,
        title: 'Design an Analog & Digital Butterworth Low Pass Filter using Bilinear Transformation Method with frequency pre-warping.',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 7,
        title: 'Design a Chebyshev Low Pass Filter using Bilinear Transformation and Impulse Invariant Method for given specifications.',
        unit: 2,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'AKTU FAVORITE'],
        frequency: '5/5 Exams'
      },
      {
        id: 8,
        title: 'Derive Bilinear Transformation mapping formula, explain Frequency Warping phenomenon and Frequency Pre-warping technique.',
        unit: 2,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT', 'DERIVATION'],
        frequency: '4/5 Exams'
      },
      {
        id: 9,
        title: 'Explain Impulse Invariant Method (IIM) for IIR filter design, s-plane to z-plane pole mapping, advantages, and aliasing limitation.',
        unit: 2,
        marks: 7,
        probability: 93,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 10,
        title: 'Compare Butterworth vs Chebyshev Filters in terms of magnitude response, passband ripple, roll-off rate, and phase response.',
        unit: 2,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },

      // UNIT 3 - FIR Design & Finite Word Length Effects
      {
        id: 11,
        title: 'Explain FIR Filter Design using Windowing Techniques (Rectangular, Hamming, Hanning, Kaiser, and Bartlett windows).',
        unit: 3,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 12,
        title: 'Design Linear Phase FIR Low Pass Filter using Kaiser Window technique for given passband and stopband attenuation specifications.',
        unit: 3,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 13,
        title: 'Explain Gibbs Phenomenon in FIR Filter design, its physical cause, effect on frequency response, and reduction using window functions.',
        unit: 3,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT', 'THEORY'],
        frequency: '4/5 Exams'
      },
      {
        id: 14,
        title: 'Describe Finite Word Length Effects in Digital Filters (Quantization errors, Truncation, Rounding noise, and Coefficient Quantization).',
        unit: 3,
        marks: 7,
        probability: 91,
        tags: ['SCORING TOPIC'],
        frequency: '3/5 Exams'
      },
      {
        id: 15,
        title: 'Explain Limit Cycle Oscillations, Zero-Input Limit Cycles, and Dead Band Effect in IIR digital filter realization.',
        unit: 3,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },

      // UNIT 4 - DFT & FFT
      {
        id: 16,
        title: 'Derive Decimation-in-Time (DIT) Radix-2 FFT Algorithm for N = 8, draw signal flow graph, butterfly structure, and calculate computational savings.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 17,
        title: 'Compute 4-point and 8-point Discrete Fourier Transform (DFT) and Inverse DFT (IDFT) of given discrete-time sequences.',
        unit: 4,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'AKTU FAVORITE'],
        frequency: '5/5 Exams'
      },
      {
        id: 18,
        title: 'Compute Circular Convolution of two discrete-time sequences using Graphical and Matrix methods and compare with Linear Convolution.',
        unit: 4,
        marks: 7,
        probability: 95,
        tags: ['IMPORTANT', 'NUMERICAL'],
        frequency: '4/5 Exams'
      },
      {
        id: 19,
        title: 'Explain Decimation-in-Frequency (DIF) Radix-2 FFT Algorithm for N = 8 with butterfly structures and compare with DIT FFT.',
        unit: 4,
        marks: 7,
        probability: 92,
        tags: ['IMPORTANT'],
        frequency: '3/5 Exams'
      },
      {
        id: 20,
        title: 'State and prove Properties of DFT (Linearity, Periodicity, Circular Shift, Parseval relation) and Bit Reversal addressing technique.',
        unit: 4,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      },

      // UNIT 5 - Multirate DSP (MDSP)
      {
        id: 21,
        title: 'Explain Multirate Signal Processing concept, necessity, advantages, applications, and sampling rate conversion systems.',
        unit: 5,
        marks: 7,
        probability: 99,
        tags: ['MOST EXPECTED', 'HIGHLY REPEATED'],
        frequency: '5/5 Exams'
      },
      {
        id: 22,
        title: 'Explain Quadrature Mirror Filter (QMF) Bank architecture, mathematical condition for aliasing cancellation, and filter design.',
        unit: 5,
        marks: 7,
        probability: 95,
        tags: ['AKTU FAVORITE'],
        frequency: '4/5 Exams'
      },
      {
        id: 23,
        title: 'Explain Sub-band Coding of Speech Signals using Multirate Filter Banks with block diagram.',
        unit: 5,
        marks: 7,
        probability: 94,
        tags: ['IMPORTANT'],
        frequency: '4/5 Exams'
      },
      {
        id: 24,
        title: 'Explain Decimation (Downsampling by factor D) and Interpolation (Upsampling by factor I) process with spectral analysis and diagrams.',
        unit: 5,
        marks: 7,
        probability: 92,
        tags: ['IMPORTANT', 'NUMERICAL'],
        frequency: '3/5 Exams'
      },
      {
        id: 25,
        title: 'Explain Sampling Rate Conversion by a Rational Factor (I/L) and Multistage Implementation of Multirate Digital Filters.',
        unit: 5,
        marks: 7,
        probability: 88,
        tags: ['THEORY'],
        frequency: '3/5 Exams'
      }
    ],
    unitDifficulty: [
      {
        id: 1,
        name: 'Unit 1',
        title: 'DSP Introduction & Filter Realization',
        difficulty: 'Medium',
        difficultyScore: 75,
        expectedMarks: 14,
        passProbability: 82,
        advice: 'Focus on IIR Realization (DF-I, DF-II, Cascade, Parallel) and FIR Linear Phase structures.'
      },
      {
        id: 2,
        name: 'Unit 2',
        title: 'IIR Filter Design',
        difficulty: 'Hard',
        difficultyScore: 92,
        expectedMarks: 14,
        passProbability: 68,
        advice: 'Butterworth and Chebyshev filter design numericals using Bilinear Transformation dominate the exam paper.'
      },
      {
        id: 3,
        name: 'Unit 3',
        title: 'FIR Design & Finite Word Length Effects',
        difficulty: 'Hard',
        difficultyScore: 85,
        expectedMarks: 14,
        passProbability: 75,
        advice: 'Windowing technique numericals (Hamming/Kaiser) and Gibbs Phenomenon theory are essential.'
      },
      {
        id: 4,
        name: 'Unit 4',
        title: 'DFT & FFT',
        difficulty: 'Hard',
        difficultyScore: 88,
        expectedMarks: 14,
        passProbability: 72,
        advice: 'DIT FFT butterfly flow graph (N=8), 4-point/8-point DFT, and Circular Convolution numericals are guaranteed 14-mark questions.'
      },
      {
        id: 5,
        name: 'Unit 5',
        title: 'Multirate DSP (MDSP)',
        difficulty: 'Easy',
        difficultyScore: 60,
        expectedMarks: 14,
        passProbability: 94,
        advice: 'Multirate DSP fundamentals, Decimation/Interpolation, QMF banks, and Sub-band coding are high-scoring.'
      }
    ]
  }
};
