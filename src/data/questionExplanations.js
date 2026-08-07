import { sem1Explanations } from './questionExplanations/1st';
import { sem2Explanations } from './questionExplanations/2nd';
import { sem3Explanations } from './questionExplanations/3rd';
import { sem4Explanations } from './questionExplanations/4th';
import { sem5Explanations } from './questionExplanations/5th';
import { sem6Explanations } from './questionExplanations/6th';

const STATIC_EXPLANATIONS = {
  ...sem1Explanations,
  ...sem2Explanations,
  ...sem3Explanations,
  ...sem4Explanations,
  ...sem5Explanations,
  ...sem6Explanations,
};

const SUBJECT_NAMES = {
  cs101: "Engineering Physics",
  cs102: "Engineering Mathematics-I",
  cs103: "Fundamentals of Electrical Engineering",
  cs104: "Fundamentals of Mechanical Engineering",
  cs105: "Fundamentals of Electronics Engineering",
  cs106: "Programming for Problem Solving",
  cs107: "Environment and Ecology",
  cs108: "Engineering Chemistry",
  cs109: "Soft Skills",
  cs201: "Engineering Physics",
  cs202: "Engineering Chemistry",
  cs203: "Fundamentals of Electrical Engineering",
  cs204: "Fundamentals of Mechanical Engineering",
  cs205: "Engineering Mathematics-II",
  cs206: "Fundamentals of Electronics Engineering",
  cs207: "Programming for Problem Solving",
  cs208: "Environment and Ecology",
  cs209: "Soft Skills",
  cs301: "Mathematics-IV",
  cs302: "Universal Human Values and Professional Ethics",
  cs303: "Data Structure",
  cs304: "Computer Organization and Architecture",
  cs305: "Discrete Structures & Theory of Logic",
  cs306: "Technical communication",
  cs307: "Energy Science and Enineering",
  cs308: "Python Programming",
  cs309: "Cyber Security",
  cs401: "Operating Systems",
  cs402: "TAFL",
  cs403: "Python Programming",
  cs501: "Database Management System",
  cs502: "Design and alalysis of algorithm",
  cs503: "Introduction to Data analytics and visualization",
  cs504: "Application of soft computing",
  cs507: "Business intellignece and analytics",
  cs505: "Essence of The Indian culture",
  cs506: "Constitution of India",
  cs601: "Software Engineering",
  cs602: "Web Technology",
  ec501: "Digital Signal Processing",
  ec502: "Integrated Circuits",
  ec504: "Microprocessor & Microcontroller"
};

/**
 * Smart generator that builds realistic study materials dynamically
 * if the question is not pre-defined in STATIC_EXPLANATIONS.
 */
export function getQuestionExplanation(subjectId, question) {
  const key = `${subjectId}-${question.id}`;
  
  if (STATIC_EXPLANATIONS[key]) {
    return {
      ...STATIC_EXPLANATIONS[key],
      subjectName: SUBJECT_NAMES[subjectId] || "Selected Course"
    };
  }

  // Generate dynamic values if not static
  const title = question.title;
  const unit = question.unit;
  const marks = question.marks || 7;
  const probability = question.probability || 90;
  const frequency = question.frequency || "3/5 Exams";
  const subjectName = SUBJECT_NAMES[subjectId] || "Selected Course";

  // Deconstruct title keywords to formulate realistic notes
  const topics = title.split(/[.,&()vs/]/).map(t => t.trim()).filter(t => t.length > 3);
  const primaryTopic = topics[0] || title;
  const secondaryTopic = topics[1] || "related concepts";

  const summary = `
This topic is high-priority for **Unit ${unit}** in **${subjectName}**, appearing in approximately **${frequency}**.

### Quick Overview
* **Core Definition**: ${primaryTopic} establishes the operational standards or mathematical constraints under which the system functions.
* **Standard Answer Requirements**: A standard answer requires explaining the definition, fundamental principles, and architectural layout/derivation of *${primaryTopic}*.
* **Key Terms**: Ensure you use appropriate technical terms and formulas associated with *${secondaryTopic}* to secure full marks.
* **Mark Allocation**: Usually carries **${marks} marks**. Structure your answer with clear subheadings, block diagrams, or example calculations.
* **Design Assumptions**: Keep key assumptions and design parameters clear before writing derivations or steps.
  `;

  const detailedExplanation = `
### 1. Conceptual Introduction to ${primaryTopic}
In **${subjectName}**, **${primaryTopic}** is a critical concept associated with Unit ${unit}. It represents the core methodology or mechanism used to resolve specific problems within this domain.

### 2. Key Principles and Definitions
To address this in examinations, keep the following foundational points in mind:
- **Core Definition**: ${primaryTopic} establishes the operational standards or mathematical constraints under which the system functions.
- **Working Mechanism**: It provides a sequential flow of operations that transforms inputs or initial parameters into optimized results.
- **Importance of ${secondaryTopic}**: It defines how ${secondaryTopic} integrates with ${primaryTopic} to ensure overall stability, safety, or efficiency.

### 3. Step-by-Step Breakdown / Architecture
When asked for a detailed explanation, detail the following parts:
1. **System Initialization**: Define the starting variables, assumptions, and boundary conditions.
2. **Execution/Derivation**: Describe the core algorithms, state changes, or physical transformations involved.
3. **Outcome Evaluation**: Outline how the final results are evaluated or verified against standard specifications.

### 4. Technical Comparison
Typical differences or structural dimensions of this topic include:
- **Redundancy Minimization**: Streamlines the process flows or data stores.
- **Derivation Accuracy**: Ensures that mathematical steps are logically connected.
- **Optimization Strategy**: Offers insights on how to decrease computational or mechanical overhead.
  `;

  const quickRevision = [
    `Draw the schematic diagram of ${primaryTopic} to get basic visual evaluation marks.`,
    `Remember: A full answer needs at least 3-4 distinct points explaining ${secondaryTopic}.`,
    `Time/Space/Operational efficiency should be highlighted in your summary.`,
    `For the ${marks}-mark version, include a practical example or numeric case.`,
    `Focus on the 'Survival Tips' listed in your dashboard checklist.`
  ];

  // Generates 4 detailed presentation slides for the interactive player
  const slides = [
    {
      title: `Overview: ${primaryTopic}`,
      description: `Understand the core definitions, requirements, and exam significance of ${primaryTopic} in Unit ${unit}.`,
      duration: "0:00 - 1:15"
    },
    {
      title: "Core Mechanics & Principles",
      description: `Exploring how this system operates and how it interacts with ${secondaryTopic}.`,
      duration: "1:15 - 3:00"
    },
    {
      title: "Step-by-Step Derivation / Process Flow",
      description: `Following the exact logical steps and structural block diagrams required in the examination sheet.`,
      duration: "3:00 - 4:30"
    },
    {
      title: "Exam Layout & Summary",
      description: `Quick revision summary, high-yield bullet points, and tip list to score the maximum ${marks} marks.`,
      duration: "4:30 - End"
    }
  ];

  // We can search YouTube for educational lectures on this topic
  // We use a generic query if we don't have a specific video. But to make it clean,
  // we can use a query-based video, or just fallback to our premium slide player.
  // In the UI, we'll let the user toggle between the Custom Slides Player and a Search-in-YouTube frame.
  return {
    summary,
    notes: null,
    detailedExplanation,
    quickRevision,
    slides,
    subjectName,
    youtubeId: null, // will trigger search-based educational embeds or our custom slideshow
    pdfUrl: null,
    slideImages: null
  };
}


