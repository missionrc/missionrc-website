<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<!-- Step 1: flex container -->
	<PageMeta title="Page Not Found | MissionRC" />
	<Navbar />

	<div class="relative isolate px-6 pt-14 lg:px-8 flex-grow">
		<!-- Step 2: content will grow -->
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
				<h1 class="text-4xl font-semibold text-center text-indigo-800">Page Not Found</h1>
				<p class="mt-4 text-center">
					The page you are looking for does not exist. Please check the URL or click the button
					below to go back to the home page.
				</p>

				<div class="flex justify-center">
					<a
						href="/"
						class="inline-block px-4 py-2 mt-8 font-semibold text-white bg-indigo-800 rounded-md"
					>
						Go Back
					</a>
				</div>
			</div>
		</main>
	</div>

	<Footer class="mt-auto" />
	<!-- Step 3: Footer at the bottom -->
</div>
