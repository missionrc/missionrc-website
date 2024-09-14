<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import PageMeta from '$lib/components/PageMeta.svelte';
</script>

<div>
	<PageMeta title="Privacy Policy | MissionRC" />
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
			<h1 class="text-4xl font-semibold text-center text-indigo-800">MissionRC Privacy Policy</h1>
			<p class="text-lg text-center mt-4">Last updated: May 2023</p>

			<h2 class="text-center text-xl font-semibold mt-8">
				What kind of information do we collect?
			</h2>
			<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600">
				We receive, collect and store any information you enter on our website or provide us in any
				other way. In addition, we collect the Internet protocol (IP) address used to connect your
				computer to the Internet; login; e-mail address; password; computer and connection
				information and purchase history. We may use software tools to measure and collect session
				information, including page response times, length of visits to certain pages, page
				interaction information, and methods used to browse away from the page. We also collect
				personally identifiable information (including name, email, password, communications);
				payment details (including credit card information), comments, feedback, product reviews,
				recommendations, and personal profile.
			</p>

			<h2 class="text-center text-xl font-semibold mt-8">How do we collect your information?</h2>
			<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600">
				When you conduct a transaction on our website, as part of the process, we collect personal
				information you give us such as your name, address and email address. Your personal
				information will be used for the specific reasons stated above only.
			</p>

			<h2 class="text-center text-xl font-semibold mt-8">Why do we collect such information?</h2>
			<div class="pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600">
				We collect such Non-personal and Personal Information for the following purposes:
				<ol class="list-decimal pt-4">
					<li>To provide and operate the Services;</li>
					<li>To provide our Users with ongoing customer assistance and technical support;</li>
					<li>
						To be able to contact our Visitors and Users with general or personalized
						service-related notices and promotional messages;
					</li>
					<li>
						To create aggregated statistical data and other aggregated and/or inferred Non-personal
						Information, which we or our business partners may use to provide and improve our
						respective services;
					</li>
					<li>To comply with any applicable laws and regulations.</li>
				</ol>
			</div>

			<h2 class="text-center text-xl font-semibold mt-8">
				What if you want to withdraw your consent?
			</h2>
			<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600">
				If you don’t want us to process your data anymore, please contact us at
				<a
					class="text-indigo-800 hover:underline underline-offset-2"
					href="mailto:missionrc.cupertino@gmail.com"
				>
					missionrc.cupertino@gmail.com
				</a>
			</p>

			<h2 class="text-center text-xl font-semibold mt-8">Privacy Policy Updates</h2>
			<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto text-gray-600">
				We reserve the right to modify this privacy policy at any time, so please review it
				frequently. Changes and clarifications will take effect immediately upon their posting on
				the website. If we make material changes to this policy, we will notify you here that it has
				been updated, so that you are aware of what information we collect, how we use it, and under
				what circumstances, if any, we use and/or disclose it.
			</p>

			<h2 class="text-center text-xl font-semibold mt-8">
				Questions or Comments about Privacy Policy
			</h2>
			<p class="pt-4 flex justify-center max-w-2xl flex-col mx-auto">
				If you would like to: access, correct, amend or delete any personal information we have
				about you, you are invited to contact us at:
				<a
					class="text-indigo-800 hover:underline underline-offset-2"
					href="mailto:missionrc.cupertino@gmail.com"
				>
					missionrc.cupertino@gmail.com
				</a>
			</p>
		</main>
	</div>
	<Footer />
</div>
