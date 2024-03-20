<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="grid p-6">
    <header>
      <h1 class="text-3xl text-center">Home</h1>
    </header>
    <article>
      <h2 class="text-xl text-center">Welcome on this application!</h2>
    </article>
    <article>
      <h2>Here is the list of the available profiles</h2>
      <ul>
        <li>
          <RouterLink
            :to="{
              name: 'show_profile',
              params: { uuid: 'c57eb357-3bac-4375-ba09-8a2490bf7dd3' },
            }"
            >c57eb357-3bac-4375-ba09-8a2490bf7dd3</RouterLink
          >
        </li>
      </ul>
    </article>
  </section>
</template>
