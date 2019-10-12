import App from './App.svelte';
import Snap from './Snap.svelte';

const app1 = new App({
	target: document.getElementById('app1'),
	props: {
		name: 'world'
	}
});

const app2 = new Snap({
	target: document.getElementById('app2'),
	props: {
		snap: 'snap'
	}
});

export default { app1, app2 };