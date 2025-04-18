<template>
<nav class="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
  <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <NuxtLink to='/'><div class="text-xl font-semibold">SafeToken</div></NuxtLink>
    <ul class="flex gap-6 text-sm font-medium">
      <li class='hover:underline' @click="scrollTo('howIt')">How it works</li>
      <li class='hover:underline' @click="scrollTo('aboutt')">About</li>
      <li class='hover:underline'><a href='https://webacy.readme.io/reference/get_contracts-contractaddress'>Docs</a></li>
    </ul>
  </div>
</nav>

</template>
<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

