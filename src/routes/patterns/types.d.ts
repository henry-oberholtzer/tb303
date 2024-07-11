type Pattern = {
  id?: number;
  name: string;
  date?: string;
  author?: string;
  settings: Settings;
  sections: [Section, Section]
}

type Settings = {
  waveform: "saw" | "square";
  tempo: number;
  tuning: number;
  cut_off_freq: number;
  resonance: number;
  env_mod: number;
  decay: number;
  accent: number;
}

type Section = {
  name: "A" | "B";
  time_mode: Time[] | [];
  pitch_mode: Pitch[] | [];
}

type Time = {
  index: number;
  timing: 0 | 1 | 2;
}

type Pitch = {
  index: number;
  accent: boolean;
  slide: boolean;
  pitch: number;
  octave: -12 | 0 | 12;
}

interface PatternPage {
  count: number;
  next: number | null;
  previous: number | null;
  results: Pattern[]
}
