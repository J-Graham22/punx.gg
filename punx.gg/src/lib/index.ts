// place files you want to import through the `$lib` alias in this folder.

// Types
export type { GitHubRepo, GitHubRepoWithReadme, GitHubUser } from './types/github';

// Services
export { GitHubService, createGitHubService } from './services/github';

// Components
export { default as GitHubProject } from './components/GitHubProject.svelte';
export { default as GitHubProjectList } from './components/GitHubProjectList.svelte';
