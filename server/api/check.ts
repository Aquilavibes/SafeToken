export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { address, chain } = body  // Extract the chain

  // Check if the chain is valid, otherwise default to Ethereum
  const validChains = ['eth', 'bsc', 'polygon', 'avalanche'] // Add any other chains here
  const selectedChain = validChains.includes(chain) ? chain : 'eth' // Default to Ethereum if invalid

  const res = await fetch(`https://api.webacy.com/contracts/${address}?chain=${selectedChain}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': config.ddApiKey
    }
  })

  const data = await res.json()
  return data
})
