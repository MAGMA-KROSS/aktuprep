export const unit5Explanations = {
  'cs303-21': {
    summary: `
### Dijkstra's Algorithm Summary
* **Goal**: Finds the single-source shortest path in a weighted graph.
* **Graph Types**: Works for both directed and undirected graphs.
* **Constraint**: Edges must have **non-negative weights**. It fails if negative edges/cycles are present.
* **Approach**: Uses a **greedy approach**, selecting the unvisited vertex with the minimum distance at each step.
* **Time Complexity**:
  * $O(V^2)$ with an adjacency matrix.
  * $O(E \log V)$ with a Min-Heap/Priority Queue.
`,
    detailedExplanation: `
### 1. Overview
Dijkstra's algorithm is a greedy algorithm that solves the single-source shortest path problem for a graph with non-negative edge path costs, producing a shortest-path tree.

### 2. Step-by-Step Algorithm
Let the starting node be the **source vertex**.
1. Create a distance list \`dist[]\` of size \`V\`. Initialize \`dist[source] = 0\` and \`dist[i] = ∞\` for all other vertices.
2. Create a boolean array \`visited[]\` initialized to \`false\` for all vertices.
3. While there are unvisited vertices:
   - Select the unvisited vertex \`u\` with the minimum value in \`dist[]\`.
   - Mark \`u\` as visited (\`visited[u] = true\`).
   - Update the distance of all adjacent vertices \`v\` of \`u\`:
     If \`visited[v] == false\` and \`dist[u] + weight(u, v) < dist[v]\`, then:
     \`dist[v] = dist[u] + weight(u, v)\`.
4. The final \`dist[]\` array contains the shortest distances from the source to all nodes.

### 3. Example Execution
Consider a graph with vertices A, B, C:
- Edges: \`A -> B (4)\`, \`A -> C (1)\`, \`C -> B (2)\`. Source = A.
- **Initialization**: \`dist = {A:0, B:∞, C:∞}\`.
- **Step 1**: Min distance is A (0). Visited = {A}.
  - Adjacent to A: B and C.
  - \`dist[B] = min(∞, 0 + 4) = 4\`.
  - \`dist[C] = min(∞, 0 + 1) = 1\`.
- **Step 2**: Min distance among unvisited {B, C} is C (1). Visited = {A, C}.
  - Adjacent to C: B.
  - \`dist[B] = min(4, dist[C] + weight(C, B)) = min(4, 1 + 2) = 3\`.
- **Step 3**: Min distance is B (3). Visited = {A, B, C}.
- **Final Distances**: \`A=0, B=3, C=1\`.

### 4. Complexity Table
| Representation | Search Min Distance | Decrease Key | Time Complexity |
| :--- | :--- | :--- | :--- |
| **Adjacency Matrix** | \`O(V)\` | \`O(1)\` | **\`O(V^2)\`** |
| **Binary Heap** | \`O(log V)\` | \`O(log V)\` | **\`O((V + E) log V)\`** |
| **Fibonacci Heap** | \`O(log V)\` | \`O(1)\` (Amortized) | **\`O(E + V log V)\`** |
    `,
    quickRevision: [
      "Greedy approach: pick vertex with shortest distance first.",
      "Constraint: Negative weights are NOT allowed. (Use Bellman-Ford for that).",
      "Key Step (Relaxation): If dist[u] + w(u,v) < dist[v], then dist[v] = dist[u] + w(u,v).",
      "Complexity: O(E log V) using a Binary Heap."
    ],
    youtubeId: "XB4MIexjvY0",
    slides: [
      {
        title: "Algorithm Concept & Greedy Approach",
        description: "Introduction to Dijkstra's algorithm. Understand how it maintains node distances and why it is a greedy strategy.",
        duration: "0:00 - 1:45"
      },
      {
        title: "The Relaxation Process Explained",
        description: "Deep dive into the edge relaxation formula: dist[u] + cost(u,v) < dist[v].",
        duration: "1:45 - 3:00"
      },
      {
        title: "Manual Graph Dry Run Example",
        description: "Step-by-step table updates for a sample graph to learn how to write the solution table in your examination paper.",
        duration: "3:00 - 5:15"
      },
      {
        title: "Complexities & Limitations (Negative Weights)",
        description: "Why Dijkstra fails with negative weights and the comparison of time complexities with matrix vs heap structures.",
        duration: "5:15 - End"
      }
    ]
  }
};
