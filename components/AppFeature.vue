<template>
  <section>
    <h2>{{ blok.name }}</h2>
  </section>
</template>
<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
