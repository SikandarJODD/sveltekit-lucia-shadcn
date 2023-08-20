<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Layout, User } from 'lucide-svelte';

	let herosec = {
		title: 'Simple SvelteKit Auth',
		subtitle: 'Lucia - Shadcn - Drizzle ORM',
		subtext: 'Hello People, This is a simple SvelteKit Auth Template',
		btn1: 'Dashboard',
		btn2: 'Log In'
	};
</script>

<section class="bg-gray-50">
	<div class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-[90vh] lg:items-center">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-3xl font-extrabold sm:text-5xl">
				{herosec.title}
				<strong class="font-extrabold text-blue-600 sm:block md:my-4">
					{herosec.subtitle}
				</strong>
			</h1>

			<p class="mt-4 sm:text-xl/relaxed text-gray-600 font-light">
				{herosec.subtext}
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<Button size="lg" class="lg:px-16" href="/dashboard">
					<Layout size="19" strokeWidth="1.8" class="mr-2" />
					{herosec.btn1}</Button
				>
				<Button
					href="/login"
					size="lg"
					class="lg:px-16 border-slate-700 hover:bg-primary hover:text-primary-foreground"
					variant="outline"
				>
					<User size="19" strokeWidth="1.8" class="mr-2" />
					{herosec.btn2}</Button
				>
			</div>
		</div>
	</div>
</section>
