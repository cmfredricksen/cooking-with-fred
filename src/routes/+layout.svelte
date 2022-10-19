<script>
	import '../global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Cooking with Fred &hearts;</title>
</svelte:head>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

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

	@media screen and (max-width: 768px) {
		.wrapper {
			width: 90%;
		}
	}
</style>
