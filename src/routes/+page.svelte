<h1>Welcome to Cooking with Fred!</h1>

<p>
	These are not fancy gourmet meals, they are simple foods cooked from scratch. I make these dishes
	regularly as I cook dinner for a family of three adults most every night. You can adjust the
	spices to your liking.
</p>

<div class="featured-recipes">
	<div class="link-box">
		<span class="material-symbols-outlined"> multicooker </span>
		<a data-sveltekit-reload href="/recipes/tag/one-dish">One Dish Meals </a>
	</div>
	<div class="link-box">
		<span class="material-symbols-outlined"> restaurant </span>
		<a href="/recipes/tag/easy">Easy Dishes </a>
	</div>
	<div class="link-box">
		<span class="material-symbols-outlined"> cake </span>
		<a href="/recipes/tag/dessert">Desserts </a>
	</div>
</div>

<p>
	This website is a project with two purposes, one is an easy reference when I am cooking. This is
	also a web development project. I built this project using SvelteKit. There is a link to my
	webfolio above where you can see some of my other projects.
</p>

<style>
	.featured-recipes {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 2rem 1rem;
		margin: 1rem 0;
		border: 2px solid var(--clr-medium);
	}

	.link-box {
		display: flex;
		justify-content: center;
		border: 2px solid var(--clr-light);
		padding: 1rem 1rem;
		align-items: center;
	}

	a {
		margin: 0 auto;
		color: var(--clr-medium);
	}

	a:hover {
		color: var(--clr-accent);
	}

	span {
		padding: 0;
		font-size: 2rem;
		color: var(--clr-medium);
	}

	@media screen and (max-width: 768px) {
		.featured-recipes {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}

		h1 {
			text-align: center;
			font-size: 1.5rem;
			padding-bottom: 1rem;
		}
	}
</style>
