<template>
  <header>
    <h1>{{ state.story.content.title }}</h1>
    <p>{{ state.story.created_at }}</p>
  </header>
  <section>
    <h2>Components</h2>
    <AppTeaser :blok="components[0]" />
    <AppTeaser :blok="components[2]" />
  </section>
  <AppFeature :blok="components[1]" />
  <div>
    <pre>
      {{ pageContent }}
    </pre>
  </div>
</template>
<script setup>
// access the storyblok build in function
const storyapi = useStoryApi();

// Fetch the data
const { data: home } = await storyapi.get("cdn/stories/home", {
  version: "draft",
});

// Make the data reactive
const state = reactive({ story: home.story });

// Making it faster to get info from the content
const pageContent = state.story.content;
// Make it easy to assign content from components
const components = state.story.content.body;

const pageInfo = {
  title: pageContent.title,
  description: state.story.content.description,
};
</script>
