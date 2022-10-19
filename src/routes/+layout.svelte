<script>
	import '../global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<div class="wrapper">
	<slot />
</div>

<Footer />

<style>
	.wrapper {
		width: 60%;
		margin: 0 auto;
	}
</style>
