<template>
  <nav>
    <!-- Version 1: More Redunancy and Way Less Control -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/shows">Shows</NuxtLink>

    <!-- Version 2: Some redundancy but more control -->
    <NuxtLink
      v-for="navLink in navLinks"
      :key="navLink.id"
      :to="navLink.path"
      >{{ navLink.name }}</NuxtLink
    >

    <!-- Version 3: Less Code Redundancy but also Less Control of Output -->
    <NuxtLink
      v-for="link in $router.options.routes"
      :key="link.id"
      :to="route.path"
      >{{ route.name }}</NuxtLink
    >
    <!-- Version 4: Arguably the most elegant + poweful solution -->
    <NuxtLink
      v-for="link in routerLinks"
      :key="link.id"
      :to="route.path"
      >{{ route.name }}</NuxtLink
    >
  </nav>
</template>
<script setup>
// Simple but still flexible
const navLinks = [
  {
    path: "/",
    name: "Home",
  },
];

// Most flexibility and least redundancy
const routerLinks = $router.options.routes.map((link) => {
  // customize the output from the router
});
</script>
