import natural from "natural";

export function sentimentScore(text) {
  const analyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");
  return analyzer.getSentiment(new natural.WordTokenizer().tokenize(text));
}
