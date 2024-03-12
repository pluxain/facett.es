<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { getSkills } from "@/api";
import type { Skill } from "@/types.d";

const skills = ref<Skill[]>([]);

watchEffect(async () => {
  skills.value = await getSkills();
});

const hardSkills = computed(() =>
  skills.value.filter((skill) => skill.kind === "hard"),
);

const softSkills = computed(() =>
  skills.value.filter((skill) => skill.kind === "soft"),
);

const languageSkills = computed(() =>
  skills.value.filter((skill) => skill.kind === "language"),
);
</script>

<template>
  <div class="grid grid-cols-3 gap-4 m-6 p-4 border">
    <aside class="grid gap-4">
      <div>
        <h3 class="mb-2 text-l font-bold uppercase">Technical Skills</h3>
        <ul class="list-inside list-disc text-sm">
          <li v-for="skill in hardSkills" :key="skill.id">{{ skill.text }}</li>
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-l font-bold uppercase">Soft Skills</h3>
        <ul class="list-inside list-disc text-sm">
          <li v-for="skill in softSkills" :key="skill.id">{{ skill.text }}</li>
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-l font-bold uppercase">Languages</h3>
        <ul class="list-inside list-disc text-sm">
          <li v-for="skill in languageSkills" :key="skill.id">
            {{ skill.text }}
          </li>
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
