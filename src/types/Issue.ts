export type Issue = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  authorId: string;
  createdAt: string;
};

export type CreateIssueData = Omit<Issue, "id">;
export type UpdateIssueData = Partial<
  Omit<CreateIssueData, "authorId" | "createdAt">
>;
