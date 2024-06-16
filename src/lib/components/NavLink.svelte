<script>
	let title = 'Home';
	let href = '#';
	let isMobile = false;

	export { title, href, isMobile };
</script>

{#if isMobile}
	<div class="py-6">
		<a
			{href}
			class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-indigo-800"
		>
			{title}
		</a>
	</div>
{:else}
	<a
		{href}
		class="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:text-indigo-800"
	>
		{title}
	</a>
{/if}
