<template>
    <div class="mt-10 w-full max-w-3xl p-6 bg-purple-50 border border-purple-200 rounded-xl space-y-6 shadow">
      <div>
        <h2 class="text-2xl font-semibold text-purple-800">
  🔢 Risk Score: 
  <span :class="scoreColor">{{ score.toFixed(1) }}</span>
</h2>

        <p class="text-sm text-purple-600" v-if="score < 40">🔰 Low risk: This token is generally safe based on the analysis.</p>
        <p class="text-sm text-yellow-600" v-else-if="score < 70">⚠️ Medium risk: Caution advised, some vulnerabilities detected.</p>
        <p class="text-sm text-red-600" v-else>🔥 High risk: This token might be unsafe to interact with.</p>
      </div>
  
      <div>
        <h3 class="text-lg font-bold mb-2 text-purple-700">🚩 Tags</h3>
        <ul class="list-disc pl-5 space-y-1 text-purple-900">
          <li v-for="(tag, index) in tags" :key="index" class="text-black">
            <strong>{{ tag.name }}</strong>: {{ tag.description }}
            <strong>{{ tag.type }}</strong>: {{ tag.type }}
            <span v-if="tag.severity" class="ml-2 text-sm text-yellow-700">Severity: {{ tag.severity }}</span>
          </li>
        </ul>
      </div>
  
      <div>
        <h3 class="text-lg font-bold mb-2 text-purple-700">🧠 Smart Contract Analysis</h3>
        <ul class="space-y-3 text-purple-900">
          <li v-for="(item, i) in analysis" :key="i" class="border-l-4 pl-4 border-purple-400">
            <p class="font-medium">{{ item.description }}</p>
            <p class="text-sm italic">
              Impact: {{ item.impact }} | Confidence: {{ item.confidence }} | Lines: {{ item.affected_lines?.from }}–{{ item.affected_lines?.to }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    score: Number
    tags: { name: string, description: string, severity: number, type: string}[]
    analysis: { description: string, impact: string, confidence: string, affected_lines: { from: number, to: number } }[]
  }>()
  
  const scoreColor = computed(() => {
    if (props.score > 70) return 'text-red-600';
    if (props.score > 40) return 'text-yellow-600';
    return 'text-green-600';
  });
  </script>
  