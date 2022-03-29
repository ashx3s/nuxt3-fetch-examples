<template>
  <div>
    <h1>{{ blok.headline }}</h1>
  </div>
</template>
<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
console.log(`AppTeaser Content ${props.blok}`);
</script>
<style scoped>
h1 {
  color: red;
}
</style>
