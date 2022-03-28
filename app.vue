<template>
  <div>
    <header>
      <h1>API Test Land</h1>
      <p>Page Visits: {{ data }}</p>
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
  </div>
</template>

<script setup>
const { data } = await useAsyncData("count", () => $fetch("/api/count"));

const { data: muppets } = await useAsyncData("muppets", () =>
  $fetch("/api/muppets"),
);
const { data: mountains } = await useFetch("/api/mountains", {
  pick: ["title", "description", "countries", "image"],
});
console.log(mountains);
</script>
