<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { marked } from "marked";
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
  <div
    v-if="profile"
    class="w-[210mm] h-[297mm] grid p-[5mm] border grid-cols-[70mm_130mm]"
  >
    <aside class="grid gap-4 text-sm">
      <div class="flex justify-center items-center bg-[#323232]">
        <div class="w-[70mm] h-[70mm] rounded-full">
          <img :src="`/images/profiles/${profile.id}/${profile.picture}`" />
        </div>
      </div>
      <div class="grid gap-4 p-4 bg-blue-200">
        <div>
          <SectionHeading text="Technical Skills" />
          <ul class="list-inside font-light">
            <li v-for="skill in hardSkills" :key="skill.id">
              {{ skill.text }}
            </li>
          </ul>
        </div>
        <div>
          <SectionHeading text="Soft Skills" />
          <ul class="list-inside font-light">
            <li v-for="skill in softSkills" :key="skill.id">
              {{ skill.text }}
            </li>
          </ul>
        </div>
        <div>
          <SectionHeading text="Languages" />
          <ul class="flex gap-4 list-none">
            <li v-for="skill in languageSkills" :key="skill.id">
              <img
                :src="`/images/flags/svg/${skill.flag}.svg`"
                class="w-6 h-full object-cover rounded-sm shadow-md"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-100 p-4">
        <SectionHeading text="Contact me" />
        <ul class="flex flex-col list-none font-light">
          <li>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
          <li>
            {{ profile.phoneNumber }}
          </li>
        </ul>
      </div>
    </aside>
    <section class="grid">
      <header
        class="flex flex-col gap-4 justify-center items-center pb-8 border-b-4 border-blue-200"
      >
        <h1 class="text-3xl font-bold text-blue-300">
          {{ profile.firstname }} {{ profile.lastname }}
        </h1>
        <h2 class="text-xl font-bold text-center uppercase underline">
          {{ profile.qualification }}
        </h2>
      </header>
      <section class="grid gap-4 px-4 pt-4 text-sm">
        <article>
          <SectionHeading text="Profile" />
          <!-- eslint-disable vue/no-v-html -->
          <div class="font-light" v-html="marked(profile.introduction)"></div>
          <!-- eslint-enable vue/no-v-html -->
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
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="font-light"
              v-html="marked(workExperience.description)"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
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
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="font-light"
              v-html="marked(education.description)"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
          </div>
        </article>
      </section>
    </section>
  </div>
</template>
