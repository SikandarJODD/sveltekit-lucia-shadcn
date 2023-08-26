<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container text-center md:my-10 md:text-left md:px-24">
	<h1 class="border w-fit px-3 py-2 text-xl font-mono border-slate-500 rounded-sm hover:bg-blue-50">Dashboard</h1>
	<table
		class="flex gap-3 justify-center md:justify-start my-3 border w-fit py-2 px-3 border-slate-600 rounded-sm hover:bg-yellow-50"
	>
		<thead>
			<tr>
				<th>Username </th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{data.email}</td>
			</tr>
		</tbody>
	</table>
	<form method="POST" action="./?/logout" use:enhance>
		<input
			type="submit"
			value="Sign out"
			class="p-2 border border-slate-500 hover:bg-green-100 transition-all duration-150 rounded-sm cursor-pointer"
		/>
	</form>
</div>
