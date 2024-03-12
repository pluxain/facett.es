import type { Skill } from "@/types.d";

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve([
    {
      id: "1d6415ca-e520-477a-b7dc-554137896d67",
      kind: "hardskill",
      text: "Javascript/Typescript",
    },
    {
      id: "3afce9ea-8635-46a5-91a6-9547420bec1c",
      kind: "hardskill",
      text: "React/Vue",
    },
    {
      id: "c299c4af-2972-4349-b783-ba76c1d69dda",
      kind: "softskill",
      text: "Best Practice Advocate",
    },
    {
      id: "351b63dd-8571-49fa-be22-94fa1c3f1625",
      kind: "hardskill",
      text: "TDD/BDD/Cucumber",
    },
    {
      id: "764acea0-5d60-4ca9-9570-1b2cd519e8ad",
      kind: "hardskill",
      text: "Agile/Scrum/Kanban",
    },
    {
      id: "aa05b035-d135-43da-93a1-cdad131b5f0e",
      kind: "softskill",
      text: "Solution Finder",
    },
    {
      id: "46b82677-0def-4f3b-b954-b995db44717a",
      kind: "softskill",
      text: "Volunteer",
    },
    {
      id: "174f99ee-9824-4103-9157-5cd763ef2382",
      kind: "hardskill",
      text: "Git/Tooling/DevOps",
    },
    {
      id: "49eb7951-f9f6-43f6-9b6f-52c3b7e98a39",
      kind: "hardskill",
      text: "Java/Spring Boot/PHP/Laravel",
    },
    {
      id: "44e248a8-8bc4-453f-8c77-5a59163ee816",
      kind: "softskill",
      text: "Team Player",
    },
    {
      id: "88e4e663-71ed-422a-8873-9047aa21e09d",
      kind: "softskill",
      text: "Leading without Authority",
    },
    {
      id: "2d301947-73df-4451-b62f-8f3837f0434d",
      kind: "softskill",
      text: "Independent",
    },
  ]);
}
