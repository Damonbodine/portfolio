export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  videoEmbed?: string;
  gifUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

export interface VideoRecording {
  blob: Blob | null;
  url: string | null;
  isRecording: boolean;
}