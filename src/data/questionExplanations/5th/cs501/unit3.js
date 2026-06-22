export const unit3Explanations = {
  'cs501-12': {
    summary: `
### Normalization Summary
* **Definition**: Normalization is the process of organizing data in a database to reduce redundancy and eliminate anomalies (Insert, Update, Delete).
* **Normal Forms**:
  * **1NF**: Attributes must contain atomic (indivisible) values only. No repeating groups.
  * **2NF**: Must be in 1NF and have **no partial dependencies** (non-prime attributes must depend on the *entire* candidate key).
  * **3NF**: Must be in 2NF and have **no transitive dependencies** (non-prime attributes cannot determine other non-prime attributes).
  * **BCNF (Boyce-Codd)**: A stronger version of 3NF. For every functional dependency $X \rightarrow Y$, $X$ must be a super key.
`,
    detailedExplanation: `
### 1. What is Normalization?
Normalization is a systematic approach of decomposing tables to eliminate data redundancy (duplication) and undesirable characteristics like Insertion, Update, and Deletion Anomalies.

### 2. Normal Forms (1NF to BCNF)

#### 1st Normal Form (1NF)
- A relation is in 1NF if and only if all attribute values are **atomic** (indivisible).
- No multi-valued attributes or nested relations.
- *Example*: An employee table cannot have multiple phone numbers in a single 'Phone' cell. It must be split into multiple rows or a separate table.

#### 2nd Normal Form (2NF)
- Must be in **1NF**.
- **No Partial Dependency**: No non-prime attribute (attributes not part of any candidate key) should be dependent on a proper subset of any candidate key.
- *Rule*: If candidate key is \`{A, B}\` and we have a dependency \`A -> C\` (where C is non-prime), this is a partial dependency. Split the table.

#### 3rd Normal Form (3NF)
- Must be in **2NF**.
- **No Transitive Dependency**: For any functional dependency \`X -> Y\`, either:
  1. \`X\` is a superkey, or
  2. \`Y\` is a prime attribute (part of a candidate key).
- *Rule*: Non-prime attributes must not determine other non-prime attributes (\`A -> B\` and \`B -> C\`).

#### Boyce-Codd Normal Form (BCNF)
- Must be in **3NF**.
- For every non-trivial functional dependency \`X -> Y\`, **\`X\` must be a superkey**.
- BCNF is stricter than 3NF. A table in BCNF is always in 3NF, but a table in 3NF may not be in BCNF.

### 3. Comparison Summary
| Normal Form | Rule | Eliminates |
| :--- | :--- | :--- |
| **1NF** | Atomic values only | Repeating groups |
| **2NF** | In 1NF + No partial dependencies | Redundancy from composite keys |
| **3NF** | In 2NF + No transitive dependencies | Redundancy from non-key dependencies |
| **BCNF** | X -> Y implies X is a superkey | Anomalies from overlapping candidate keys |
    `,
    quickRevision: [
      "Normalization target: 3NF/BCNF is standard in real-world database designs.",
      "Prime attribute: Part of some candidate key.",
      "Partial dependency: Key subset -> non-prime.",
      "Transitive dependency: Non-prime -> non-prime.",
      "BCNF rule: LHS of every dependency MUST be a Super Key."
    ],
    youtubeId: "Kzz65w5V0xI",
    slides: [
      {
        title: "Introduction to Normalization & Anomalies",
        description: "Why normalize? Understand Insert, Update, and Delete anomalies that lead to corrupted or inconsistent database states.",
        duration: "0:00 - 1:30"
      },
      {
        title: "1NF & 2NF Rules with Examples",
        description: "Learning atomicity (1NF) and how to identify and resolve partial dependencies (2NF) using key attributes.",
        duration: "1:30 - 3:15"
      },
      {
        title: "3NF & BCNF Rules with Examples",
        description: "Differentiating 3NF (no transitive dependency) and BCNF (LHS is super key) using overlapping key examples.",
        duration: "3:15 - 5:00"
      },
      {
        title: "Exam Problem-Solving Guide",
        description: "Step-by-step method to solve AKTU questions on decomposing relations and verifying lossless-join properties.",
        duration: "5:00 - End"
      }
    ]
  }
};
