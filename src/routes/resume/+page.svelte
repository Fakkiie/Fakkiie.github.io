<script>
	import { data, title } from '@data/resume'; // This should point to your resume PDF URL.
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<!-- Embed the PDF as an iframe with a title for accessibility -->
			<iframe src={data} title="Resume PDF" style="width: 100%; height: 100%; border: none;"></iframe>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	/* Prevent scrolling on the main page */
	html, body {
		overflow: hidden;
		height: 100%;
		margin: 0;
	}

	/* Fixed position container for the resume */
	.resume {
		position: fixed; /* Fix the container to the viewport */
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh; /* Full viewport height */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* Iframe to allow internal scrolling */
	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
