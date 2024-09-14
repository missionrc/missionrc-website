<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';

	import { page } from '$app/stores';

	import { programs } from '$lib/programs';
	import Error from '../../+error.svelte';

	const data = $page.params.programName;
	const programData = programs.find((program) => program.id === data);
</script>

<!-- Program Page -->
<div class="flex flex-col min-h-screen">
	<PageMeta title={programData?.name + ' | MissionRC Programs'} />
	<Navbar />

	<div class="flex-grow relative isolate px-6 pt-14 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>

		<main class="pt-24">
			<div class="max-w-3xl mx-auto">
				{#if programData === undefined}
					<Error />
				{/if}

				<h1 class="text-4xl font-semibold text-center text-indigo-800">
					{programData?.name}
				</h1>
				<p class="mt-4 text-center">
					{programData?.description}
				</p>

				{#if programData?.location}
					<div class="mt-4 text-center">
						<p class="text-lg font-semibold text-indigo-800">Location</p>
						<p>{programData?.location}</p>
					</div>
				{/if}

				{#if programData?.registrationLink}
					<div class="mt-8 flex justify-center">
						<a
							href={programData?.registrationLink}
							class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Register
						</a>
					</div>
				{/if}

				<!-- image gallery -->
				{#if programData?.images}
					<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#each programData?.images as image}
							<img src={image} alt={programData?.name} class="rounded-lg shadow-lg" />
						{/each}
					</div>
				{/if}
			</div>
		</main>
	</div>

	<Footer />
</div>
