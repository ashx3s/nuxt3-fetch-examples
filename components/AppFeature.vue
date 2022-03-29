<template>
  <article>
    <header>
      <h2>{{ blok.name }}</h2>
    </header>

    <section>
      {{ blok.article }}
    </section>
  </article>
</template>
<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
