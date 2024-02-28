import { Ai } from './vendor/@cloudflare/ai.js';

export type Chat = {
	messages: Array<{ role: string; content: string }>;
};

export default {
	async fetch(request, env) {
		const tasks: Array<{ inputs: Chat; response: any }> = [];
		const ai = new Ai(env.AI);
		if (request?.method == 'POST') {
			const body = await request
				.json()
				.then((j: any) => j as any)
				.catch((e: any) => {
					console.log('error: ', e);
				});

			if (body?.prompt?.length > 0) {
				let chat: Chat = {
					messages: [
						{ role: 'system', content: 'You are a nerdy AI from a space opera.' },
						{ role: 'user', content: body?.prompt },
					],
				};
				let response = await ai.run('@cf/meta/llama-2-7b-chat-int8', chat);
				tasks.push({ inputs: chat, response });
				return Response.json(tasks);
			}
		}
		return Response.json({ error: 'needs to be a POST request with {"prompt": <prompt>}' });
	},
};
