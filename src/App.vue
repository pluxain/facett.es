<script lang="ts" setup>
import type { Skill } from "@/types.d";

const skills: Skill[] = [
  {
    id: "1d6415ca-e520-477a-b7dc-554137896d67",
    text: "Javascript/Typescript",
  },
  { id: "3afce9ea-8635-46a5-91a6-9547420bec1c", text: "React/Vue" },
  { id: "351b63dd-8571-49fa-be22-94fa1c3f1625", text: "TDD/BDD/Cucumber" },
  { id: "764acea0-5d60-4ca9-9570-1b2cd519e8ad", text: "Agile/Scrum/Kanban" },
  { id: "174f99ee-9824-4103-9157-5cd763ef2382", text: "Git/Tooling/DevOps" },
  {
    id: "49eb7951-f9f6-43f6-9b6f-52c3b7e98a39",
    text: "Java/Spring Boot/PHP/Laravel",
  },
];
</script>
<template>
  <div class="grid grid-cols-3 gap-4 m-6 p-4 border">
    <aside>
      <div>
        <h3 class="mb-2 text-l font-bold uppercase">Technical Skills</h3>
        <ul class="list-inside list-disc text-sm">
          <li v-for="skill in skills" :key="skill.id">{{ skill.text }}</li>
        </ul>
      </div>
    </aside>
    <section class="col-span-2">
      <header>
        <h1 class="text-2xl font-bold text-center text-blue-300">
          Pascal Luxain
        </h1>
        <h2 class="text-l font-bold text-center uppercase underline">
          Senior Frontend Developper
        </h2>
      </header>
    </section>
  </div>
</template>
