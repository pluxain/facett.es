export type UUID = string;

type BaseSkill = {
  id: UUID;
  text: string;
};

export type HardSkill = BaseSkill & {
  kind: "hardskill";
};

export type SoftSkill = BaseSkill & {
  kind: "softskill";
};

export type Skill = HardSkill | SoftSkill;

export type SkillKind = Skill["kind"];
