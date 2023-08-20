<script lang="ts">
	import { enhance } from "$app/forms";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Dashboard</h1>
<p>Username: {data.email}</p>
<form method="POST" action="./?/logout" use:enhance>
	<input type="submit" value="Sign out" />
</form>