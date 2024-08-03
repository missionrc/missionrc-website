<script>
	export let title = '';
	export let season = '';
	export let description = '';
	export let btnText = '';
	export let btnLink = '';
</script>

<div class="card bg-white w-96 border-2 border-indigo-200">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<h3>{season}</h3>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<a
				href={btnLink}
				class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>{btnText}</a
			>
		</div>
	</div>
</div>
