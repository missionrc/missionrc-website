<script>
	import NavLink from '$lib/components/NavLink.svelte';

	function toggleMenu() {
		document.querySelector('[role="dialog"]').classList.toggle('hidden');
	}
</script>

<div class="bg-white">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5 flex flex-row gap-2">
					<img class="h-8 w-auto" src="logo1.png" alt="MissionRC Logo" />
					<div class="flex flex-row">
						<span class="text-2xl font-semibold text-indigo-800">Mission</span>
						<span class="text-2xl font-semibold text-emerald-500">RC</span>
					</div>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					on:click={toggleMenu}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<NavLink title="Home" href="/" />
				<NavLink title="Team" href="#" />
				<NavLink title="About Us" href="#" />
				<NavLink title="Programs" href="#" />
				<NavLink title="Contact" href="#" />
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/donate" class="text-sm font-semibold leading-6 text-white">
					<div class="py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700">
						Donate<span aria-hidden="true" class="pl-1">&rarr;</span>
					</div>
				</a>
			</div>
		</nav>

		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50"></div>
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">MissionRC</span>
						<img class="h-8 w-auto" src="logo1.png" alt="MissionRC Logo" />
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggleMenu}>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<NavLink title="Home" href="/" isMobile={true} />
							<NavLink title="Team" href="/" isMobile={true} />
							<NavLink title="About Us" href="/" isMobile={true} />
							<NavLink title="Programs" href="/" isMobile={true} />
							<NavLink title="Contact" href="/" isMobile={true} />
							<div class="py-6">
								<a
									href="/donate"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>Donate</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

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
				<div class="carousel pt-4">
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

		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>
</div>
