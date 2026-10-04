import { useEffect, useState } from "react";
import "./App.css";
import type { Issue } from "./types/Issue";

type NewIssue = Omit<Issue, "id">;

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const issue: NewIssue = {
    title: "fourth title",
    status: "in-progress",
    priority: "high",
    description: "qwerty123456",
    authorId: "0",
    createdAt: new Date().toISOString(),
  };

  const addIssue = (data: NewIssue) => {
    const issue = {
      ...data,
    };

    fetch("http://localhost:3000/issues", {
      method: "POST",
      body: JSON.stringify(issue),
      headers: { "Content-type": "application/json" },
    });
  };

  const deleteIssue = (id: string) => {
    fetch(`http://localhost:3000/issues/` + id, { method: "DELETE" });
  };

  useEffect(() => {
    fetch("http://localhost:3000/issues")
      .then((data) => data.json())
      .then((data) => setIssues(data));
  }, []);

  return (
    <>
      <button onClick={() => addIssue(issue)}>Add Issue</button>
    </>
  );
}

export default App;
