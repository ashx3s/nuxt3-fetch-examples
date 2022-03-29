<template>
  <h1>Test Route</h1>
  <p>This shows how to access information from the router</p>
  <h2>All of the routes</h2>
  <pre>
    {{ $router }}
  </pre>
  <h2 id="route">Only this route</h2>
  <p>{{ $route.path }}</p>
  <h2>A list of just the routes</h2>
  <ul>
    <!-- Optimize this by filtering out 'index' -->
    <li v-for="route in $router.options.routes" :key="route.id">
      <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped></style>
