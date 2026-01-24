<script lang="ts">
	import type { GitHubRepoWithReadme } from '$lib/types/github';
	import GitHubProject from './GitHubProject.svelte';

	interface Props {
		repos: GitHubRepoWithReadme[];
		showReadme?: boolean;
		columns?: 1 | 2;
	}

	let { repos, showReadme = false, columns = 1 }: Props = $props();
</script>

<div
	class="github-project-list grid gap-4"
	class:grid-cols-1={columns === 1}
	class:md:grid-cols-2={columns === 2}
>
	{#each repos as repo (repo.fullName)}
		<GitHubProject {repo} {showReadme} />
	{/each}
</div>

{#if repos.length === 0}
	<p class="text-center text-white/50">No repositories found.</p>
{/if}
