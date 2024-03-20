import type { UUID, Profile } from "@/types.d";

export async function getProfile(id: UUID): Promise<Profile> {
  return Promise.resolve({
    id,
    address: null,
    educations: [
      {
        id: "989e7a1b-13b1-4ff7-a1a4-cf6b4e80697d",
        endDate: new Date("2009-12-31"),
        description: `
- Java, PHP, Javascript, SQL
- Training solution with XML/XSLT/XPATH
        `,
        location: "AFPA Champ-sur-Marne",
        degree: "Titre Professionnel",
        startDate: new Date("2008-01-01"),
        title: "Software Developer",
      },
    ],
    email: "pascal.luxain@gmail.com",
    firstname: "Pascal",
    introduction: `Jack of all trades specialized in frontend development.
    Armed with a **“can do”** attitude and **focused on finding solutions**.
    Purposefully seek to write functional, fast and maintainable code following best practices and using tests to give
    **confidence** and provide documentation.
    **Driven** to deliver the best software possible to make **happy users**.
    Eager to learn. 25+ years experience in Information Technology.
    `,
    lastname: "Luxain",
    phoneNumber: "+43 663 0311 0394",
    picture: "2c5e571a-fa0e-4661-8a55-b95518029640.png",
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
        text: "TDD/BDD",
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
        text: "Java/Spring Boot",
      },
      {
        id: "5428c718-5f71-4ec3-abf9-f6c968f52c50",
        kind: "hard",
        text: "PHP/Laravel",
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
        id: "310a4032-fd39-4222-bfe7-592a77935b28",
        company: "willhaben",
        description: `
- Rental oriented product development using React/StyledComponents
- Frontend for internal moderation tool in Spring Boot/Java/Thymeleaf
        `,
        endDate: new Date("2023-02-1"),
        jobTitle: "Senior Frontend Developer",
        startDate: new Date("2024-02-15"),
      },
      {
        id: "536aa679-fb6f-4587-98ca-1b59625c5f28",
        company: "Tset GmbH",
        description: `
- Refactoring of internal code using Vue
- Pushing for good practices and Unit Tests
        `,
        endDate: new Date("2022-11-30"),
        jobTitle: "Senior Frontend Developer",
        startDate: new Date("2021-03-01"),
      },
      {
        id: "de3854dd-092a-43e3-a718-588312d59710",
        company: "Omnetric GmbH",
        description: `
- Lead Developer of ATMaster Meter Operation Center GIS feature
    - Visualization of Devices on Map and Data-Grid
    - Filtering, incremental selection, area selection of Devices
    - Layers settings through configuration
    - Custom CRS settings through configuration
- Frontend testing of EnergyIP application using cypress.io
- Proof of Concept of Mobile Application for Covid-19 with Flutter
        `,
        endDate: new Date("2020-12-31"),
        jobTitle: "UI Key Developer",
        startDate: new Date("2019-01-01"),
      },
      {
        id: "a8023f60-ccd8-4b0c-92e7-67bd1ad02ade",
        company: "Freelancer",
        description: `
- Bootista: Fashion Mobile Application
  - ReactNative Mobile Frontend, Jest for tests
  - Laravel Backend (Dashboard and REST API), Kahlan for tests
- Websites creation, trainings on modern Frontend development
        `,
        endDate: new Date("2019-01-31"),
        jobTitle: "Senior Full-stack Developer",
        startDate: new Date("2011-09-01"),
      },
    ],
  });
}
