import type { Skill } from "@/types.d";

export async function getSkills(): Promise<Skill[]> {
  return Promise.resolve([
    {
      id: "1d6415ca-e520-477a-b7dc-554137896d67",
      kind: "hard",
      text: "Javascript/Typescript",
    },
    {
      id: "3afce9ea-8635-46a5-91a6-9547420bec1c",
      kind: "hard",
      text: "React/Vue",
    },
    {
      id: "c299c4af-2972-4349-b783-ba76c1d69dda",
      kind: "soft",
      text: "Best Practice Advocate",
    },
    {
      id: "846e4420-8808-48d2-922b-aee5a145fb14",
      kind: "language",
      code: "fr",
      text: "français",
    },
    {
      id: "351b63dd-8571-49fa-be22-94fa1c3f1625",
      kind: "hard",
      text: "TDD/BDD/Cucumber",
    },
    {
      id: "764acea0-5d60-4ca9-9570-1b2cd519e8ad",
      kind: "hard",
      text: "Agile/Scrum/Kanban",
    },
    {
      id: "aa05b035-d135-43da-93a1-cdad131b5f0e",
      kind: "soft",
      text: "Solution Finder",
    },
    {
      id: "46b82677-0def-4f3b-b954-b995db44717a",
      kind: "soft",
      text: "Volunteer",
    },
    {
      id: "174f99ee-9824-4103-9157-5cd763ef2382",
      kind: "hard",
      text: "Git/Tooling/DevOps",
    },
    {
      id: "b5f5e84d-615e-423f-b344-28c49c31aeb7",
      kind: "language",
      code: "en",
      text: "english",
    },
    {
      id: "49eb7951-f9f6-43f6-9b6f-52c3b7e98a39",
      kind: "hard",
      text: "Java/Spring Boot/PHP/Laravel",
    },
    {
      id: "0e21df29-f21b-4c75-9bee-110f5790ee3e",
      kind: "language",
      code: "it",
      text: "italiano",
    },
    {
      id: "f9941bc3-a4c1-4d93-97e4-c3333340af30",
      kind: "language",
      code: "de",
      text: "deutsch",
    },
    {
      id: "44e248a8-8bc4-453f-8c77-5a59163ee816",
      kind: "soft",
      text: "Team Player",
    },
    {
      id: "88e4e663-71ed-422a-8873-9047aa21e09d",
      kind: "soft",
      text: "Leading without Authority",
    },
    {
      id: "08b361a9-8ae8-4321-ab3a-1c3ea45cb556",
      kind: "language",
      code: "ja",
      text: "日本語",
    },
    {
      id: "2d301947-73df-4451-b62f-8f3837f0434d",
      kind: "soft",
      text: "Independent",
    },
  ]);
}
