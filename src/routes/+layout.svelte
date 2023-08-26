<script>
	import Navbar from '$lib/home/Navbar.svelte';
	import '../app.postcss';
	export let data;
</script>

<Navbar email={data.email} />
<slot />
