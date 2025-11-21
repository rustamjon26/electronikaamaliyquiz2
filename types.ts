export type Topic = "BJT" | "FET" | "OpAmp" | "RC" | "Digital" | "Power";

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number; // 0-3
  topic: Topic;
  difficulty: Difficulty;
  explanation?: string;
}