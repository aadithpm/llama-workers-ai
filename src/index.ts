import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
    const tasks = [];
    const ai = new Ai(env.AI);

    // prompt - simple completion style input
    let simple = {
      prompt: 'Tell me a joke about Cloudflare'
    };
    let response = await ai.run('@cf/meta/llama-2-7b-chat-int8', simple);
    tasks.push({ inputs: simple, response });

    // messages - chat style input
    let chat = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Who won the world series in 2020?' }
      ]
    };
    response = await ai.run('@cf/meta/llama-2-7b-chat-int8', chat);
    tasks.push({ inputs: chat, response });

    return Response.json(tasks);
  }
};
