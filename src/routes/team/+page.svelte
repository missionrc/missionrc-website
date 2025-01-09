<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<div>
	<PageMeta title="Team | MissionRC" />
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

		<main>
			<div class="pt-16 sm:pt-24">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 class="text-center text-3xl font-semibold leading-8 text-gray-900">Meet Our Team</h2>
					<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto">
						Our team is a passionate group of high schoolers, primarily from Cupertino High School,
						united by a shared goal of imparting valuable STEM knowledge to younger children. Fueled
						by our enthusiasm for computer science, mechanical engineering, and electrical
						engineering, we aim to inspire the next generation to explore the wonders of science and
						technology.
					</p>
				</div>
				<div
					class="grid items-center gap-4 pt-8 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-3 lg:grid-cols-4"
				>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924757/ethan_ufchqj.webp"
							alt="Team Member 1"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-gray-900 text-lg font-semibold pt-4">Ethan Chu</h3>
						<p class="text-gray-600">Chief Executive Officer</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924732/ani_juikqi.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Anirudh Sabari</h3>
						<p class="text-gray-600 pt-1">Director of Management</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924771/hritvik_tufky4.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Hritvik Srivastava</h3>
						<p class="text-gray-600 pt-1">Director of Operations</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924800/sam_oxdve0.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Sam Mathew</h3>
						<p class="text-gray-600 pt-1">Director of Training</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924732/anav_ple69r.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Anav Saxena</h3>
						<p class="text-gray-600 pt-1">Director of Programs</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734926151/grace_yt2pwe.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Grace Nam</h3>
						<p class="text-gray-600 pt-1">Director of Finance</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924774/lawrence_oirteg.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Lawrence Chen</h3>
						<p class="text-gray-600 pt-1">Director of Administration</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734927568/chetana-min_ifrpxm.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Chetana Medam</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924732/aarav_xtf5ik.webp"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Aarav Mehta</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924801/ved_bq7oys.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Ved Kamath</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924757/eugene_v0trc0.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Eugene Hong</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924800/satvik_kw8b9q.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Satvik Reddy</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924773/hansika_lnpvyo.png"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">
							Hansika Chinnakonda Mahesh Babu
						</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924773/jaseer_wbbnkk.png"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Jaseer Abdulla</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924802/tejas_dng8mg.png"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Tejas Bojanapati</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734924802/rudra_y9nish.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Rudra Chatripally</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734926711/alex-li_lwrimu.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Alex Li</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734926737/nathan_gjlii0.png"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Nathan Lam</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734926733/jimmy_eznp2m.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Ishaan Saxena</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://res.cloudinary.com/dklqnjf2k/image/upload/v1734926770/timofei_w14sst.jpg"
							alt="Team Member 2"
							class="rounded-full h-32 w-32 object-cover"
						/>
						<h3 class="text-lg font-semibold text-gray-900 pt-4">Timofei Shabalin</h3>
						<p class="text-gray-600 pt-1">Project Lead</p>
					</div>
				</div>
			</div>
		</main>
	</div>
	<Footer />
</div>
