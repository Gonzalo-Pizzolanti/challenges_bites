import { Solution } from "./challenges/beginner/getStudentsNames/solutions/index.ts";
import { getStudents } from "./services/getStudents.ts";

const names: string[] = Solution.getStudentsNames(getStudents());

Solution.imperativeSort(getStudents())

Deno.bench(
  "Built-in functional paradigm methods",
  {
    baseline: true,
    group: "sort names"
  },
  () => {
    names
  },
);

Deno.bench("Imperative sort method", {
  baseline: true,
  group: "sort names"
}, () => {
  Solution.imperativeSort([
    {
      "id": 4,
      "name": "Sergio Peréz",
      "coursesTaken": [
        "Biology",
        "Math",
        "Computer Science"
      ]
    },
    {
      "id": 1,
      "name": "Bob Johnson"
      , "coursesTaken": [
        "Biology",
        "Math",
        "Computer Science"
      ]
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "coursesTaken": [
        "History",
        "English",
        "Art"
      ]
    },
    {
      "id": 3,
      "name": "Charlie Lee",
      "coursesTaken": [
        "Biology",
        "Math",
        "Computer Science"
      ]
    }
  ])
})