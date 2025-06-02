<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
	import ProgramCard from '$lib/components/ProgramCard.svelte';
</script>

<div>
	<PageMeta title="Programs | MissionRC" />
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

		<main class="pt-24">
			<div class="max-w-3xl mx-auto">
				<h1 class="text-4xl font-semibold text-center text-indigo-800">Our Programs</h1>
				<p class="mt-4 text-center">
					All of our <b>in-person</b> camps offer an extensive curriculum to prepare students for
					high-school robotics. We provide hands-on learning activities and real-world
					<b>problem-solving</b>
					experiences to ensure that students come away with the skills and knowledge necessary to succeed
					in robotics. Our <b>experienced</b> instructors and mentors will guide students through
					the process of <b>creative</b>
					problem-solving to help them build the confidence they need to excel in any
					<b>engineering</b> field they choose to do in their future careers.
				</p>

				<hr class="my-8 border-t-2 border-gray-200" />

				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
					<ProgramCard
						title="Drive Explorers: Remote-Controlled Car Engineering"
						season="2025 Spring"
						description="Students will be introduced to the fundamentals of remote-controlled (RC) systems, learning basic electrical and mechanical engineering concepts, and  using what they learn to build their very own remote-controlled cars. Participants will learn how to think like an engineer as they apply engineering concepts."
						btnText="View Details"
						btnLink="/programs/drive-explorers-2025"
					/>
				</div>

				<hr class="my-8 border-t-2 border-gray-200" />

				<h1 class="text-2xl font-semibold text-center text-indigo-800">Past Programs</h1>

				<div class="pt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
					<ProgramCard
						title="Junior Aviators RC Camp"
						season="2024 Summer"
						description="Over the course of 5 weeks, students will learn the fundamentals of RC and will build their own RC plane project with a team of fellow students."
						btnText="View Details"
						btnLink="/programs/junior-aviators-rc-camp"
					/>

					<ProgramCard
						title="DriveExplorers: Remote Control Car Engineering"
						season="2024 Summer"
						description="Students create their custom RC car from scratch with mentor guidance from fellow students. The program aims to teach students the fundamentals of RC."
						btnText="View Details"
						btnLink="/programs/drive-explorers"
					/>

					<ProgramCard
						title="Sky Pioneers: RC Plane Engineering Program"
						season="2024 Spring"
						description="Students will learn basic mechanics behind the plane and collaborate with a team to apply the experimental design process to develop their own RC plane from scratch."
						btnText="View Details"
						btnLink="/programs/sky-pioneers"
					/>

					<ProgramCard
						title="RC Cars & Engineering Exploration"
						season="2023-2024 Fall"
						description="Over the course of 4 weeks, students will learn the fundamentals for RC and will build several RC Projects such as cars or drones"
						btnText="View Details"
						btnLink="/programs/rc-cars-engineering"
					/>

					<ProgramCard
						title="RC Project Building Workshop"
						season="July 31 - August 4, 2023"
						description="Students will be creating several RC projects, which will consist of RC planes, cars, and drones. "
						btnText="View Details"
						btnLink="/programs/rc-project-building"
					/>
				</div>
			</div>
		</main>
	</div>
	<Footer />
</div>
