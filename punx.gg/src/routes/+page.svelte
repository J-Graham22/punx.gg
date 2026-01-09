<script lang="ts">
	import WorkInfo from '$lib/components/WorkInfo.svelte';
	import ProjectInfo from '$lib/components/ProjectInfo.svelte';
</script>

<div class="bg-sky-950">
	<div class="max-w-6xl mx-auto px-6 py-12">
		<h1 class="text-4xl font-bold tracking-tight mb-8">
			PUNX <span class="text-white/60">[dot]</span> my
		</h1>

		<h2 class="text-xl italic font-semibold tracking-wide mb-2">about me</h2>
		<div class="space-y-1 mb-8">
			<p>Justin Graham, a.k.a PUNX</p>
			<p>currently Escalation Engineer @ Varonis</p>
			<p>BS in CS from UNC Chapel Hill</p>
		</div>

		<h2 class="text-xl italic font-semibold tracking-wide mb-2">tech stack</h2>
		<div class="space-y-1">
			<p>most comfortable with c#, python, and typescript/javascript</p>
			<p>most excited to use zig, go, and c</p>
			<p>check out the full list of technologies I know</p>
		</div>

		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			<!-- Left Column: Work -->
			<div class="work space-y-6">
				<h2 class="text-xl font-semibold tracking-wide text-white/80">work</h2>

				<WorkInfo
					employer="Varonis Systems"
					title="escalation engineer"
					current={true}
					startDate={new Date(2024, 10)}
					shortDesc="short description"
					longDesc="long description"
				/>

				<WorkInfo
					employer="DaVinci Lock"
					title="software developer"
					startDate={new Date(2022, 11)}
					endDate={new Date(2024, 8)}
					shortDesc="short description"
					longDesc="long description"
				/>

				<WorkInfo
					employer="Crispin Corporation"
					title="software developer"
					startDate={new Date(2021, 7)}
					endDate={new Date(2024, 11)}
					shortDesc="short description"
					longDesc="long description"
				/>
			</div>

			<!-- Right Column: Projects -->
			<div class="projects space-y-6">
				<h2 class="text-xl font-semibold tracking-wide text-white/80">projects</h2>

				<ProjectInfo />
				<ProjectInfo />
				<ProjectInfo />
				<ProjectInfo />
			</div>
		</div>
	</div>
</div>
