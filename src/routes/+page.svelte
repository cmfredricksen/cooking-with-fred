<h1>Welcome to Cooking with Fred!</h1>

<p>
	These are not fancy gourmet meals, they are simple foods cooked from scratch. I make these dishes
	regularly as I cook dinner for a family of three adults most every night. You can adjust the
	spices to your liking.
</p>

<h3>Featured Recipe Categories:</h3>

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

<h4>
	You can look through all of the <a href="/recipes">recipes</a> or look through some of these categories:
</h4>

<div class="recipe-tags">
	<a href="/recipes/tag/vegan">#vegan</a>
	<a href="/recipes/tag/spicy">#spicy</a>
	<a href="/recipes/tag/rice">#rice</a>
	<a href="/recipes/tag/sauce">#sauce</a>
	<a href="/recipes/tag/stick-to-your-ribs">#stick-to-your-ribs</a>
	<a href="/recipes/tag/soup">#soup</a>
</div>

<p>
	This website is a project with two purposes, one is an easy reference when I am cooking. This is
	also a web development project. I built this project using SvelteKit. There is a link to my
	webfolio above where you can see some of my other projects.
</p>

<style>
	h1 {
		padding: 1.5rem 0 2rem;
	}
	h1,
	h3 {
		text-align: center;
	}

	h4 a {
		color: var(--clr-light);
	}
	.featured-recipes {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 0 1rem;
		margin: 1rem 0;
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
		color: var(--clr-white);
	}

	a:hover {
		color: var(--clr-accent);
	}

	span {
		padding: 0;
		font-size: 2rem;
		color: var(--clr-light);
	}

	.recipe-tags a {
		font-size: 0.75rem;
		background-color: var(--clr-dark);
		margin: 0 0.5rem;
	}

	.recipe-tags {
		margin: 1rem auto;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		.featured-recipes {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}

		h1 {
			font-size: 1.5rem;
			padding-bottom: 1rem;
		}

		.recipe-tags {
			display: flex;
			flex-direction: column;
			width: 50%;
		}

		.recipe-tags a {
			margin: 0.25rem;
			padding: 0.5rem 0;
		}
	}
</style>
