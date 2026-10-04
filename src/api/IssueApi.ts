import type { CreateIssueData, Issue, UpdateIssueData } from "../types/Issue";
import { client } from "./clientApi";

export function getIssues() {
  return client.get<Issue[]>("issues");
}

export function deleteIssue(id: string) {
  return client.delete(`issues/${id}`);
}

export function updateIssue(id: string, issue: UpdateIssueData) {
  return client.patch<Issue>(`issues/${id}`, issue);
}

export function createIssue(issue: CreateIssueData) {
  return client.post<Issue>("issues", issue);
}
