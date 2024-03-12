<script lang="ts" setup>
import { getSkills } from "@/api";
import type { Skill } from "@/types.d";
import { ref, watchEffect } from "vue";

const skills = ref<Skill[]>([]);

watchEffect(async () => {
  skills.value = await getSkills();
});
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
