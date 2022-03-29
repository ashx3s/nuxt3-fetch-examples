<template>
  <div>
    <h1>TV Shows</h1>
    <form @submit.prevent="searchShows()">
      <input type="text" v-model="searchString" />
      <button>Search for Shows</button>
    </form>
    <!-- Display Content -->
    <div>
      <p>{{ searchString }}</p>
      <ul>
        <li v-for="show in foundData" :key="show.id">
          <img :src="show.show?.image?.medium" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchString = ref("");

// This is where we put our search results
const foundData = ref([]);

// Fetch from the tv api this is hardecoded
//const { data } = await $fetch(
//  `/api/tvshows/?search=${searchString.value}`,
//);
async function searchShows() {
  const data = await useFetch(`/api/tvshows?search=${searchString.value}`);
  const json = await data.json();
  console.log(json);
  foundData.value = json;
}
// Fetch dynamically
</script>
