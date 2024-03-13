<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { getProfile } from "@/api";
import SectionHeading from "@/components/SectionHeading.vue";
import { useDateTimeFormatters } from "@/composables/useDateTimeFormatters";
import { isHardSkill, isLanguageSkill, isSoftSkill } from "@/utils/typeguards";
import type { Nullable, Profile } from "@/types.d";

const profile = ref<Nullable<Profile>>(null);

watchEffect(async () => {
  profile.value = await getProfile("c57eb357-3bac-4375-ba09-8a2490bf7dd3");
});

const hardSkills = computed(() =>
  profile.value ? profile.value.skills.filter(isHardSkill) : [],
);

const softSkills = computed(() =>
  profile.value ? profile.value.skills.filter(isSoftSkill) : [],
);

const languageSkills = computed(() =>
  profile.value ? profile.value.skills.filter(isLanguageSkill) : [],
);

const { dateFormatter: dateFormatterForWorExperience } = useDateTimeFormatters(
  "en-US",
  {
    year: "numeric",
    month: "short",
  },
);

const { dateFormatter: dateFormatterForEducation } = useDateTimeFormatters(
  "en-US",
  {
    year: "numeric",
  },
);
</script>

<template>
  <div v-if="profile" class="grid grid-cols-3 gap-4 m-6 p-4 border">
    <aside class="grid gap-4">
      <div>
        <SectionHeading text="Technical Skills" />
        <ul class="list-inside list-disc text-sm font-light">
          <li v-for="skill in hardSkills" :key="skill.id">
            {{ skill.text }}
          </li>
        </ul>
      </div>
      <div>
        <SectionHeading text="Soft Skills" />
        <ul class="list-inside list-disc text-sm font-light">
          <li v-for="skill in softSkills" :key="skill.id">
            {{ skill.text }}
          </li>
        </ul>
      </div>
      <div>
        <SectionHeading text="Languages" />
        <ul class="flex gap-4 text-sm">
          <li v-for="skill in languageSkills" :key="skill.id">
            <img
              :src="`/images/flags/svg/${skill.flag}.svg`"
              class="w-6 h-full object-cover rounded-sm shadow-md"
            />
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-l font-bold uppercase">How to contact me</h3>
        <ul class="flex flex-col text-sm font-light">
          <li>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
          <li>
            {{ profile.phoneNumber }}
          </li>
        </ul>
      </div>
    </aside>
    <section class="col-span-2 px-4 border-l">
      <header>
        <h1 class="text-2xl font-bold text-center text-blue-300">
          {{ profile.firstname }} {{ profile.lastname }}
        </h1>
        <h2 class="text-l font-bold text-center uppercase underline">
          {{ profile.qualification }}
        </h2>
      </header>
      <section class="grid gap-4">
        <article>
          <SectionHeading text="Profile" />
          <div class="font-light">
            {{ profile.introduction }}
          </div>
        </article>
        <article>
          <SectionHeading text="Work Experiences" />
          <div
            v-for="workExperience in profile.workExperiences"
            :key="workExperience.id"
            class="my-4"
          >
            <h4 class="mb-2 text-l font-extrabold">
              {{ workExperience.jobTitle }}
            </h4>
            <h5 class="font-normal tracking-wide">
              {{ workExperience.company }} |
              {{
                dateFormatterForWorExperience.format(workExperience.startDate)
              }}
              -
              {{ dateFormatterForWorExperience.format(workExperience.endDate) }}
            </h5>
            <!-- TODO: add Markdown support @see https://vuejs.org/examples/#markdown -->
            <div class="font-light">{{ workExperience.description }}</div>
          </div>
        </article>
        <article>
          <SectionHeading text="Education" />
          <div
            v-for="education in profile.educations"
            :key="education.id"
            class="my-4"
          >
            <h4 class="mb-2 text-l font-extrabold">
              {{ education.title }} | {{ education.degree }}
            </h4>
            <h5 class="font-normal tracking-wide">
              {{ education.location }} |
              {{ dateFormatterForEducation.format(education.startDate) }} -
              {{ dateFormatterForEducation.format(education.endDate) }}
            </h5>
            <!-- TODO: add Markdown support @see https://vuejs.org/examples/#markdown -->
            <div class="font-light">{{ education.description }}</div>
          </div>
        </article>
      </section>
    </section>
  </div>
</template>
