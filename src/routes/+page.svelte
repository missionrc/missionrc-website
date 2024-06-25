<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<div class="bg-white">
	<PageMeta />
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
		<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
				>
					Announcing our next round of funding.
					<a href="#" class="font-semibold text-indigo-600">
						<span class="absolute inset-0" aria-hidden="true"></span>
						Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<div class="text-center">
				<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					The <span class="underline underline-offset-2 decoration-indigo-500">New</span> Standard in
					Remote Control
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					MissionRC is a 501(c)(3) non-profit organization based in Silicon Valley run by high
					school students with the motive of teaching middle school students the engineering behind
					Remote Control. We do this through the medium of fun and engaging camps at a low to
					nonexistent price to encourage teaching students from all income ranges.
				</p>

				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Registration
					</a>
					<a href="#" class="text-sm font-semibold leading-6 text-gray-900">
						Learn more
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</div>

			<div class="pt-24 sm:pt-32">
				<h1 class="text-center text-3xl sm:text-3xl text-gray-900 font-bold tracking-tight">
					Why Choose MissionRC?
				</h1>
				<div class="mx-auto max-w-7xl py-8 sm:py-12 px-6 lg:px-8">
					<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="flex flex-col">
								<div class="text-lg leading-7 text-gray-600 font-bold underline underline-offset-2">
									Cumulative teaching hours
								</div>
								<div class="text-md leading-7 text-gray-600">
									Over 1000+ hours recorded teaching curriculum for our RC programs. Making sure
									students are able to absorb all knowledge to the fullest extent.
								</div>
							</dt>
							<dd
								class="order-first text-3xl font-semibold tracking-tight text-indigo-700 sm:text-6xl"
							>
								1,000+
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="flex flex-col">
								<div class="text-lg leading-7 text-gray-600 font-bold underline underline-offset-2">
									Money Raised
								</div>
								<div class="text-md leading-7 text-gray-600">
									Within 10 months in business, MissionRC has been succesful in raising money which
									goes to assuring quality camps for students. All money goes towards awareness for
									RC.
								</div>
							</dt>

							<dd
								class="order-first text-3xl font-semibold tracking-tight text-indigo-700 sm:text-6xl"
							>
								$7,000+
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>

		<div>
			<div class="mx-auto max-w-xl px-6 lg:px-8">
				<h2 class="text-center text-3xl font-semibold leading-8 text-gray-900">
					Partners and Sponsors
				</h2>
				<p class="text-md text-center text-gray-500 pt-4">
					Partnered with Hack+ and sponsored by BEEP and YLI
				</p>
				<div class="mx-auto mt-10 max-w-lg grid grid-cols-1 lg:grid-cols-3">
					<img
						class="max-h-24 w-full object-contain"
						src="https://static.wixstatic.com/media/881909_ff8a1ab8e2224e1b8fddf5dcf7fc0eb6~mv2.png/v1/fill/w_218,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/yli.png"
						alt="YLI Logo"
						width="632"
						height="192"
					/>
					<img
						class="max-h-24 w-full object-contain"
						src="https://static.wixstatic.com/media/881909_e7fead65b207420ea391c9ed187f4eab~mv2.png/v1/crop/x_180,y_101,w_309,h_173/fill/w_282,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hack%2Bnobg.png"
						alt="hack+ logo"
						width="632"
						height="192"
					/>
					<img
						class="max-h-24 w-full object-contain"
						src="https://static.wixstatic.com/media/881909_567ce9297e4146ffbce0b0ed27bb5f25~mv2.png/v1/fill/w_218,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/beepnobg.png"
						alt="Beep Logo"
						width="632"
						height="192"
					/>
				</div>
			</div>
		</div>

		<div class="pt-16 sm:pt-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-center text-3xl font-semibold leading-8 text-gray-900">
					Fun & Engaging STEM Courses
				</h2>
				<p class="text-md text-center text-gray-500 pt-4">
					Topics covered include Electrical Engineering, Mechanical Engineering, and Software
					Engineering
				</p>
				<div class="flex justify-center">
					<button
						class="mt-8 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Register for Camps</button
					>
				</div>
				<div class="carousel pt-8">
					<div id="item1" class="carousel-item w-full flex justify-center">
						<img src="camp1.webp" alt="Camp 1" />
					</div>
					<div id="item2" class="carousel-item w-full flex justify-center">
						<img src="camp2.webp" alt="Camp 2" />
					</div>
					<div id="item3" class="carousel-item w-full flex justify-center">
						<img src="camp3.webp" alt="Camp 3" />
					</div>
				</div>
			</div>
		</div>
		<div class="pt-16 sm:pt-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-center text-3xl font-semibold leading-8 text-gray-900" id="contact">
					Contact Us
				</h2>
				<p class="text-md text-center text-gray-500 pt-4">
					Have any questions? Feel free to email us at
					<a
						href="mailto:missionrc.cupertino@gmail.com"
						class="text-indigo-600 hover:underline underline-offset-2"
					>
						missionrc.cupertino@gmail.com
					</a>
				</p>
				<div class="flex justify-center">
					<a
						class="mt-8 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						href="mailto:missionrc.cupertino@gmail.com"
					>
						Email Us
					</a>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
