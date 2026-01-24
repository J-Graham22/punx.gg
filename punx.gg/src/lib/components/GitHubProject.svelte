<script lang="ts">
	import type { GitHubRepoWithReadme } from '$lib/types/github';

	interface Props {
		repo: GitHubRepoWithReadme;
		showReadme?: boolean;
	}

	let { repo, showReadme = false }: Props = $props();
</script>

<div class="github-project">
	<a href={repo.url} target="_blank" rel="noopener noreferrer" class="group block">
		<div
			class="
				relative
				flex flex-col
				rounded-2xl
				border
				border-white/10
				bg-black
				px-6
				py-4
				transition
				duration-200
				hover:border-white/25
				hover:bg-white/5
			"
		>
			<!-- Header row -->
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<!-- Repo icon -->
					<svg class="h-5 w-5 text-white/70" viewBox="0 0 16 16" fill="currentColor">
						<path
							d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
						/>
					</svg>
					<h3 class="text-lg font-semibold tracking-tight text-white">
						{repo.name}
					</h3>
				</div>

				<!-- GitHub icon -->
				<div
					class="
						flex
						h-9
						w-9
						items-center
						justify-center
						rounded-full
						border
						border-white/20
						text-white/80
						transition
						duration-200
						group-hover:border-white/40
						group-hover:text-white
					"
					aria-hidden="true"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>

			<!-- Description -->
			{#if repo.description}
				<p class="mt-2 text-sm leading-snug text-white/70">
					{repo.description}
				</p>
			{/if}

			<!-- Topics -->
			{#if repo.topics.length > 0}
				<div class="mt-3 flex flex-wrap gap-2">
					{#each repo.topics as topic}
						<span
							class="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/80"
						>
							{topic}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Stats row -->
			<div class="mt-3 flex items-center gap-4 text-xs text-white/50">
				{#if repo.language}
					<span class="flex items-center gap-1">
						<span class="h-2.5 w-2.5 rounded-full bg-current"></span>
						{repo.language}
					</span>
				{/if}
				{#if repo.stars > 0}
					<span class="flex items-center gap-1">
						<svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<path
								d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
							/>
						</svg>
						{repo.stars}
					</span>
				{/if}
				{#if repo.forks > 0}
					<span class="flex items-center gap-1">
						<svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<path
								d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
							/>
						</svg>
						{repo.forks}
					</span>
				{/if}
			</div>
		</div>
	</a>

	<!-- README section (expandable) -->
	{#if showReadme && repo.readme}
		<div class="mt-4 rounded-xl border border-white/10 bg-black/50 p-4">
			<h4 class="mb-2 text-sm font-medium text-white/80">README</h4>
			<div class="prose prose-invert prose-sm max-w-none text-white/70">
				<pre class="whitespace-pre-wrap text-xs">{repo.readme}</pre>
			</div>
		</div>
	{/if}
</div>
