const SourceCodes: { [key: string]: string[][] } = {
  "coding_contest": [["백엔드", 'https://github.com/MinChanJu/mic-spring'], ["프론트엔드", 'https://github.com/MinChanJu/mic-react'], ["사이트", 'https://minchanju.github.io/mic-react/']],
  "mic_app": [["소스코드", 'https://github.com/MinChanJu/MIC-app']],
  "portfolio": [["소스코드", 'https://github.com/MinChanJu/portfolio'], ["사이트", 'https://minchanju.github.io/portfolio/']],
  "dating_app": [["소스코드", 'https://github.com/MinChanJu/BuckTanley']],
  "trash_game": [["소스코드", 'https://github.com/MinChanJu/Trash-Flight-Unity']],
}

export const getSourceCodes = (key: string): string[][] => {
  return SourceCodes[key] ?? [];
};