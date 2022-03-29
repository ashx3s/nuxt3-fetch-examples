<template>
  <div>
    <header>
      <p>{{ test.str }}</p>
      <h1>API Test Land</h1>
      <!-- <p>Page Visits: {{ data }}</p> -->
      <p v-for="muppet in muppets" :key="muppet.id">
        {{ muppet.name }} -- {{ muppet.type }}
      </p>
      <div>
        <h2>{{ mountains.title }}</h2>
        <p>{{ mountains.description }}</p>
        <ul>
          <li v-for="country in mountains.countries" :key="country.id">
            {{ country }}
          </li>
        </ul>
        <img :src="mountains.image" alt="" />
      </div>
    </header>
    <pre>
      {{ mountains }}
    </pre>
    <section>
      <ul>
        <li v-for="character in disneyCharacters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { json } from "stream/consumers";

// import hello function and render string
const hello = await useFetch("/api/hello");
const test = hello.data.value;

async function fetchCharacters() {
  try {
    const res = await $fetch("https://api.disneyapi.dev/characters");
    if (res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.data;
  } catch (err) {
    throw new Error("Async fetch error: " + err);
  }
}

const { data: disneyCharacters } = await useAsyncData(
  "disneyCharacters",
  () => {
    $fetch("https://api.disneyapi.dev/characters");
  },
);

// const { data } = await useAsyncData("count", () => $fetch("/api/count"));

const { data: muppets } = await useAsyncData("muppets", () =>
  $fetch("/api/muppets"),
);

const { data: mountains } = await useFetch("/api/mountains", {
  pick: ["title", "description", "countries", "image"],
});
</script>
