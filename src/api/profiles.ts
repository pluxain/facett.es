import type { UUID, Profile } from "@/types.d";

export async function getProfile(id: UUID): Promise<Profile> {
  return Promise.resolve({
    id,
    address: null,
    email: "pascal.luxain@gmail.com",
    firstname: "Pascal",
    lastname: "Luxain",
    phoneNumber: "+43 663 0311 0394",
    qualification: "Senior Frontend Developer",
    skills: [
      {
        id: "1d6415ca-e520-477a-b7dc-554137896d67",
        kind: "hard",
        text: "Javascript/Typescript",
      },
      {
        id: "cddedbfd-7729-4252-888c-20821160ae9d",
        kind: "hard",
        text: "HTML/CSS",
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
        code: "fr",
        flag: "fr",
        kind: "language",
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
        code: "en",
        flag: "gb",
        kind: "language",
        text: "english",
      },
      {
        id: "49eb7951-f9f6-43f6-9b6f-52c3b7e98a39",
        kind: "hard",
        text: "Java/Spring Boot/PHP/Laravel",
      },
      {
        id: "0e21df29-f21b-4c75-9bee-110f5790ee3e",
        code: "it",
        flag: "it",
        kind: "language",
        text: "italiano",
      },
      {
        id: "f9941bc3-a4c1-4d93-97e4-c3333340af30",
        code: "de",
        flag: "de",
        kind: "language",
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
        code: "ja",
        flag: "jp",
        kind: "language",
        text: "日本語",
      },
      {
        id: "2d301947-73df-4451-b62f-8f3837f0434d",
        kind: "soft",
        text: "Independent",
      },
    ],
    workExperiences: [
      {
        id: "de3854dd-092a-43e3-a718-588312d59710",
        company: "Omnetric GmbH",
        description: "I did stuff",
        endDate: new Date("2020-12-31"),
        jobTitle: "UI Key Developer",
        startDate: new Date("2019-01-01"),
      },
      {
        id: "a8023f60-ccd8-4b0c-92e7-67bd1ad02ade",
        company: "Freelancer",
        description: "I did cool stuff",
        endDate: new Date("2019-01-31"),
        jobTitle: "Senior Full-stack Developer",
        startDate: new Date("2011-09-01"),
      },
    ],
  });
}
