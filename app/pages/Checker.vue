<template>
  <Navbar />
  <div class="min-h-screen flex flex-col items-center py-10 lg:pt-[200px] bg-gradient-to-r from-purple-500 to-white pt-[200px] w-full h-full">
    <div class="bg-white/30 backdrop-blur-md shadow-md lg:w-[600px] h-[350px] lg:px-[100px] pt-[50px] rounded w-[480px] px-[50px] overflow-hidden">
      <h1 class="text-4xl font-bold mb-8 text-purple-800">🛡️ Token Risk Scanner</h1>

      <form @submit.prevent="scanToken" class="w-full max-w-md space-y-4">
        <input
          v-model="address"
          type="text"
          placeholder="Paste token contract address"
          class="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <select v-model="selectedChain" class="w-full border border-purple-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="eth">Ethereum</option>
          <option value="bsc">Binance Smart Chain</option>
          <option value="polygon">Polygon</option>
          <option value="avalanche">Avalanche</option>
        </select>

        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
        >
          🔍 Scan
        </button>
      </form>

      <div v-if="loading" class="mt-6 text-purple-600 font-medium">Scanning...</div>
     
    </div>
    <ResultCard
        v-if="result"
        :score="result.score ?? 0"
        :tags="result.tags ?? []"
        :analysis="result.analysis ?? []"
      />
  </div>
<Footer/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ResultCard from '~/components/ResultCard.vue'

const address = ref('')
const selectedChain = ref('eth')
const loading = ref(false)
const result = ref<any>(null)

const scanToken = async () => {
  loading.value = true
  result.value = null
  try {
  const res = await $fetch('/api/check', {
    method: 'POST',
    body: { address: address.value, chain: selectedChain.value }
  })
  result.value = res
} catch (e: any) {
  console.error(e)
  alert(e?.statusMessage || 'Scan failed. Please try again.')
}

  loading.value = false
}
</script>
