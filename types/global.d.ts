type Project = {
  name: string;
  note: string;
  description: string;
  stack: string[];
  liveUrl: string;
  codeUrl: string;
  image?: string;
};

type Skill = {
  name: string;
  icon: LucideIcon;
};

type SkillGroup = {
  label: string;
  skills: Skill[];
};
