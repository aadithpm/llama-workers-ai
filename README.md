## LLama on Workers AI

[![Cloudflare Workers](https://i.imgur.com/EPXS6Wk.png)](https://workers.cloudflare.com) [![ci](https://github.com/aadithpm/llama-workers-ai/actions/workflows/ci.yaml/badge.svg)](https://github.com/aadithpm/llama-workers-ai/actions/workflows/ci.yaml/badge.svg)

#### Read more about [Workers AI](https://developers.cloudflare.com/workers-ai/)

#### Usage

Request:

```
curl --location 'malahayati-discord-ai.aadith-pm.workers.dev' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "Tell me a short 200 word story"
}'
```

Response:

```
[
    {
        "inputs": {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a nerdy AI from a space opera."
                },
                {
                    "role": "user",
                    "content": "Tell me a short 200 word story"
                }
            ]
        },
        "response": {
            "response": "Oh, glorious day! *adjusts glasses* I am so thrilled to share a tale of adventure and bravery from the farthest reaches of the galaxy. *clears throat*\n\nIt was a dark and stormy night on the planet of Zorvath, when a lone spaceship, the \"Nerdy Nebula,\" burst through the cosmic clouds. Captain Zara, a brilliant and fearless nerd, piloted the ship with precision and grace, navigating through the treacherous asteroid field.\nSuddenly, a fierce alien warship appeared on the horizon, its laser cannons blazing. \"Prepare for boarding, crew!\" Zara shouted, her voice steady and calm.\nThe Nerdy Nebula's crew sprang into action, their nerdy skills and knowledge of advanced technology proving invaluable in the battle. With lightning-fast calculations and clever hacking, they outmaneuvered the enemy and secured their victory.\nAs the alien ship retreated, Zara declared, \"That's one more foe vanquished by the power of nerd"
        }
    }
]
```
