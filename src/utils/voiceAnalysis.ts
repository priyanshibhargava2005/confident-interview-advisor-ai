
export interface VoiceAnalysisResult {
  fillerWordCount: number;
  fillerWordPercentage: number;
  toneConfidence: number;
  speakingPace: number;
  clarity: number;
  volume: number;
}

// List of common filler words to detect
const fillerWords = [
  'um', 'uh', 'er', 'ah', 'like', 'you know', 'so', 'actually',
  'basically', 'literally', 'I mean', 'right', 'kind of', 'sort of'
];

// Mock function that would be replaced with actual voice analysis using WebAudio API
export const analyzeVoice = (audioData: any): VoiceAnalysisResult => {
  // This is a simplified mock implementation
  // In a real app, this would use speech recognition and audio analysis

  // Random values for demo purposes
  const getRandomScore = () => 0.4 + Math.random() * 0.6; // Between 0.4 and 1.0
  
  // For demo purposes, generate random filler word count
  const fillerWordCount = Math.floor(Math.random() * 5); // 0 to 4 filler words
  const totalWords = 50 + Math.floor(Math.random() * 50); // 50 to 99 total words
  const fillerWordPercentage = fillerWordCount / totalWords;
  
  return {
    fillerWordCount,
    fillerWordPercentage,
    toneConfidence: getRandomScore(),
    speakingPace: getRandomScore(),
    clarity: getRandomScore(),
    volume: getRandomScore()
  };
};

// Mock function to detect filler words in text
export const detectFillerWords = (text: string): string[] => {
  // Convert text to lowercase for case-insensitive matching
  const lowerText = text.toLowerCase();
  
  // Find all filler words in the text
  return fillerWords.filter(word => lowerText.includes(word));
};

// Calculate speaking pace in words per minute
export const calculateSpeakingPace = (wordCount: number, durationSeconds: number): number => {
  if (durationSeconds === 0) return 0;
  return (wordCount / durationSeconds) * 60;
};

// Generate feedback based on voice analysis
export const generateVoiceFeedback = (analysis: VoiceAnalysisResult): string => {
  let feedback = '';
  
  if (analysis.fillerWordPercentage > 0.05) {
    feedback += "Try to reduce filler words like 'um', 'uh', and 'like'. ";
  }
  
  if (analysis.toneConfidence < 0.6) {
    feedback += "Speak with more confidence and authority. ";
  }
  
  if (analysis.speakingPace > 0.8) {
    feedback += "Consider slowing down your speaking pace a bit. ";
  } else if (analysis.speakingPace < 0.4) {
    feedback += "Try to speak a bit faster to maintain engagement. ";
  }
  
  if (analysis.clarity < 0.7) {
    feedback += "Focus on articulating your words more clearly. ";
  }
  
  return feedback || "Your voice sounds good! Keep up the good work.";
};
