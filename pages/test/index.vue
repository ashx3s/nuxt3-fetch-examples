<template>
  <h1>Test Route</h1>
  <p>This shows how to access information from the router</p>
  <h2>All of the routes</h2>
  <pre>
    {{ $router }}
  </pre>
  <h2>Only this route</h2>
  <p>{{ $route }}</p>
  <h2>A list of just the routes</h2>
  <p>This</p>
  <ul>
    <!-- Optimize this by filtering out 'index' -->
    <li v-for="route in $router.options.routes" :key="route.id">
      <NuxtLink :to="route.name">{{ route.name }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup></script>
