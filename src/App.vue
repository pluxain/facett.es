<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { getProfile, getSkills } from "@/api";
import type { LanguageSkill, Nullable, Profile, Skill } from "@/types.d";
import { isHardSkill, isLanguageSkill, isSoftSkill } from "@/utils/typeguards";

const profile = ref<Nullable<Profile>>(null);
const skills = ref<Skill[]>([]);

watchEffect(async () => {
  profile.value = await getProfile("c57eb357-3bac-4375-ba09-8a2490bf7dd3");
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
        <ul class="flex gap-4 text-sm">
          <li v-for="skill in languageSkills" :key="skill.id">
            <img
              :src="`/images/flags/svg/${skill.flag}.svg`"
              class="w-6 h-full object-cover rounded-sm shadow-md"
            />
          </li>
        </ul>
      </div>
      <div v-if="profile">
        <h3 class="mb-2 text-l font-bold uppercase">How to contact me</h3>
        <ul class="flex flex-col text-sm">
          <li>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
          <li>
            {{ profile.phoneNumber }}
          </li>
        </ul>
      </div>
    </aside>
    <section class="col-span-2 border-l">
      <header>
        <div v-if="profile">
          <h1 class="text-2xl font-bold text-center text-blue-300">
            {{ profile.firstname }} {{ profile.lastname }}
          </h1>
          <h2 class="text-l font-bold text-center uppercase underline">
            {{ profile.qualification }}
          </h2>
        </div>
      </header>
    </section>
  </div>
</template>
