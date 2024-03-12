<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { getSkills } from "@/api";
import type { LanguageSkill, Skill } from "@/types.d";
import { isHardSkill, isLanguageSkill, isSoftSkill } from "@/utils/typeguards";

const skills = ref<Skill[]>([]);

watchEffect(async () => {
  skills.value = await getSkills();
});

const hardSkills = computed(() => skills.value.filter(isHardSkill));

const softSkills = computed(() => skills.value.filter(isSoftSkill));

const languageSkills = computed<LanguageSkill[]>(() =>
  skills.value.filter(isLanguageSkill),
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
        <ul class="flex gap-4">
          <li v-for="skill in languageSkills" :key="skill.id">
            <img
              :src="`/images/flags/svg/${skill.flag}.svg`"
              class="w-6 h-full object-cover rounded-sm shadow-md"
            />
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
