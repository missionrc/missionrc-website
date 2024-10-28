<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
	<PageMeta title="About Us | MissionRC" />
	<Navbar />

	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>

	<main>
		<div class="pt-12">
			<h1 class="text-4xl font-semibold text-center text-indigo-800">
				Our Mission <h2 class="text-sm">(get it?)</h2>
			</h1>
			<p
				class="text-lg text-center mt-4 pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600"
			>
				MissionRC is a 501(c)(3) non-profit organization based in Silicon Valley run by high school
				students with the motive of teaching middle school students the engineering behind Remote
				Control. We do this through the medium of fun and engaging camps at a low to nonexistent
				price to encourage teaching students from all income ranges.
			</p>
		</div>

		<!-- images go here -->
		<div class="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 max-w-screen-lg mx-auto">
			<enhanced:img
				src="/static/camp2-1.webp"
				alt="Camp 1"
				class="w-full h-64 object-cover rounded-lg shadow-lg"
			/>
			<enhanced:img
				src="/static/camp2-2.webp"
				alt="Camp 1"
				class="w-full h-64 object-cover rounded-lg shadow-lg"
			/>
			<enhanced:img
				src="/static/camp2-3.webp"
				alt="Camp 1"
				class="w-full h-64 object-cover rounded-lg shadow-lg"
			/>
			<enhanced:img
				src="/static/camp2-4.webp"
				alt="Camp 1"
				class="w-full h-64 object-cover rounded-lg shadow-lg"
			/>
		</div>

		<div class="pt-24">
			<h1 class="text-4xl font-semibold text-center text-indigo-800">What are our services?</h1>
			<p class="text-lg mt-4 pt-4 max-w-2xl flex-col mx-auto text-gray-600">
				Our educational camps are run by a nonprofit organization led by high school students. Our
				camps are designed to provide students with an immersive experience in the fields of
				engineering, education, and technology. Through hands-on activities and mentorship from our
				team of experts, students will gain the knowledge and skills necessary to excel in future
				high-school robotics events or engineering competitions.

				<br />
				<br />
				We hold camps during breaks in the school calendar, such as Winter break or Summer break, and
				each camp is specifically tailored to a specific topic of Remote Control Engineering.
			</p>
			<div class="pt-8">
				<div class="flex flex-row justify-center gap-4">
					<a
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						href="/team"
					>
						Meet our Team
					</a>
					<a
						href="/programs"
						class="text-sm font-semibold leading-6 text-indigo-900 pt-2.5 hover:underline underline-offset-2"
					>
						Our Programs
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</div>
