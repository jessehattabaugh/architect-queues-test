import arc from '@architect/functions';
export async function get(request) {
	console.debug('😰 http handler', JSON.stringify(request, null, 2));
	try {
		const queueResponse = await arc.queues.publish({
			name: 'bar',
			payload: { hello: 'konichiwa' },
		});
		console.debug('🤞 queue publish successful', JSON.stringify(queueResponse, null, 2));
	} catch (error) {
		console.error('😡 http handler caught error', JSON.stringify(error, null, 2));
	} finally {
		return { ok: true };
	}
}
