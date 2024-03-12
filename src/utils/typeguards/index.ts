import type { HardSkill, LanguageSkill, Skill, SoftSkill } from "@/types.d";

export function isHardSkill(s: Skill): s is HardSkill {
  return s.kind === "hard";
}

export function isSoftSkill(s: Skill): s is SoftSkill {
  return s.kind === "soft";
}

export function isLanguageSkill(s: Skill): s is LanguageSkill {
  return s.kind === "language";
}
