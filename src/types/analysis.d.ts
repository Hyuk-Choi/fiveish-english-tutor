export type ConfidenceLevel = "높음" | "보통" | "낮음";
export type PriorityLevel = "높음" | "중간" | "낮음";

export type AnalysisScores = {
  marketFit: number;
  targetFit: number;
  messageClarity: number;
  conversionPotential: number;
  budgetEfficiency: number;
  executionDifficulty: number;
  improvementPriority: number;
};

export type PriorityAction = {
  priority: PriorityLevel;
  action: string;
  reason: string;
};

export type BenchmarkRange = {
  label: string;
  wordRange?: string;
  connectorRange?: string;
  detailRange?: string;
  targetSignal?: string;
  expectedRange?: string;
  note: string;
};

export type AnalysisResult = {
  summary: string;
  totalScore: number;
  confidenceLevel: ConfidenceLevel;
  inputCompleteness: number;
  reasoningSummary: string;
  benchmarkRange: BenchmarkRange;
  scores: AnalysisScores;
  scoreLabels: Record<keyof AnalysisScores, string>;
  keyInsights: string[];
  problems: string[];
  recommendations: string[];
  priorityActions: PriorityAction[];
  generatedCopy: string[];
  nextTestIdeas: string[];
  caution: string;
};
