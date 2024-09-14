<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<PageMeta title="Donate | MissionRC" />
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
			<div class="text-center">
				<h1 class="text-4xl font-semibold text-indigo-800">Donate to MissionRC</h1>
				<p class="text-lg leading-8 text-gray-600 max-w-2xl mx-auto mt-6">
					Help us continue to educate students about RC at a super low cost.
				</p>

				<div class="mt-8">
					<dd class="text-3xl font-semibold tracking-tight text-indigo-700 sm:text-6xl">$7,200+</dd>
					<dt class="text-lg font-bold underline underline-offset-2 text-gray-600 mt-2">
						raised towards RC education
					</dt>
				</div>

				<section class="py-12 sm:py-16">
					<div class="max-w-4xl mx-auto">
						<div class="max-w-2xl mx-auto lg:text-center">
							<p class="mt-2 text-2xl tracking-tight text-gray-900 sm:text-4xl">
								How does your donation support MissionRC?
							</p>
						</div>

						<div class="flex flex-col space-y-4 mt-16 mx-auto">
							<div class="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200">
								<div
									class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600"
								>
									<span class="text-white text-lg font-bold">1</span>
								</div>
								<dt class="text-lg font-semibold leading-7 text-gray-900 pl-16">
									Higher Quality Materials
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600 pl-16">
									Your donation allows us to afford higher-quality materials for our programs,
									enhancing the learning experience for students.
								</dd>
							</div>

							<div class="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200">
								<div
									class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600"
								>
									<span class="text-white text-lg font-bold">2</span>
								</div>
								<dt class="text-lg font-semibold leading-7 text-gray-900 pl-16">
									Larger + Better Facilities
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600 pl-16">
									We can expand our reach and access better facilities, bringing RC education to
									more students around the Bay Area.
								</dd>
							</div>

							<div class="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200">
								<div
									class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600"
								>
									<span class="text-white text-lg font-bold">3</span>
								</div>
								<dt class="text-lg font-semibold leading-7 text-gray-900 pl-16">
									Keep Registration Fees Low
								</dt>
								<dd class="mt-2 text-base leading-7 text-gray-600 pl-16">
									Donations help us keep registration fees affordable, allowing students from all
									backgrounds to participate in our programs.
								</dd>
							</div>
						</div>
					</div>
				</section>

				<div class="py-3 sm:py-4 flex justify-center">
					<a
						href="https://hack.ms/missionrc"
						target="_blank"
						class="mt-8 inline-block w-full sm:w-auto text-center rounded-full bg-indigo-600 px-8 py-4 text-xl font-semibold text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-all duration-300"
					>
						Donate Now
					</a>
				</div>
			</div>
		</main>
	</div>

	<Footer />
</div>
