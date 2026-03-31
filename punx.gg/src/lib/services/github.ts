import { Octokit } from '@octokit/rest';
import type { GitHubRepo, GitHubRepoWithReadme, GitHubUser } from '$lib/types/github';

/**
 * GitHub API service for fetching repository and user information
 */
export class GitHubService {
	private octokit: Octokit;

	constructor(token?: string) {
		this.octokit = new Octokit({
			auth: token
		});
	}

	/**
	 * Fetch all public repositories for a user
	 */
	async getUserRepos(username: string): Promise<GitHubRepo[]> {
		const { data } = await this.octokit.repos.listForUser({
			username,
			type: 'all',
			sort: 'updated',
			per_page: 100
		});

		return data
			.filter((repo) => !repo.private)
			.map((repo) => ({
				name: repo.name,
				fullName: repo.full_name,
				description: repo.description,
				topics: repo.topics ?? [],
				url: repo.html_url,
				homepage: repo.homepage || null,
				language: repo.language ?? null,
				stars: repo.stargazers_count ?? 0,
				forks: repo.forks_count ?? 0,
				archived: repo.archived ?? false,
				createdAt: repo.created_at ?? '',
				updatedAt: repo.updated_at ?? '',
				pushedAt: repo.pushed_at ?? ''
			}));
	}

	/**
	 * Fetch a specific repository
	 */
	async getRepo(owner: string, repo: string): Promise<GitHubRepo> {
		const { data } = await this.octokit.repos.get({
			owner,
			repo
		});

		return {
			name: data.name,
			fullName: data.full_name,
			description: data.description,
			topics: data.topics ?? [],
			url: data.html_url,
			homepage: data.homepage || null,
			language: data.language ?? null,
			stars: data.stargazers_count ?? 0,
			forks: data.forks_count ?? 0,
			archived: data.archived ?? false,
			createdAt: data.created_at ?? '',
			updatedAt: data.updated_at ?? '',
			pushedAt: data.pushed_at ?? ''
		};
	}

	/**
	 * Fetch a repository with its README content
	 */
	async getRepoWithReadme(owner: string, repo: string): Promise<GitHubRepoWithReadme> {
		const [repoData, readme] = await Promise.all([
			this.getRepo(owner, repo),
			this.getReadme(owner, repo)
		]);

		return {
			...repoData,
			readme
		};
	}

	/**
	 * Fetch the README content for a repository
	 */
	async getReadme(owner: string, repo: string): Promise<string | null> {
		try {
			const { data } = await this.octokit.repos.getReadme({
				owner,
				repo,
				mediaType: {
					format: 'raw'
				}
			});
			// The raw format returns the content as a string
			return data as unknown as string;
		} catch (error) {
			// README not found or other error
			return null;
		}
	}

	/**
	 * Fetch multiple repositories with their README content
	 */
	async getReposWithReadme(repos: { owner: string; repo: string }[]): Promise<GitHubRepoWithReadme[]> {
		const results = await Promise.all(
			repos.map(({ owner, repo }) => this.getRepoWithReadme(owner, repo))
		);
		return results;
	}

	/**
	 * Fetch user profile information
	 */
	async getUser(username: string): Promise<GitHubUser> {
		const { data } = await this.octokit.users.getByUsername({
			username
		});

		return {
			login: data.login,
			name: data.name,
			bio: data.bio,
			avatarUrl: data.avatar_url,
			url: data.html_url,
			publicRepos: data.public_repos
		};
	}

	/**
	 * Fetch repositories by topic
	 */
	async getReposByTopic(username: string, topic: string): Promise<GitHubRepo[]> {
		const repos = await this.getUserRepos(username);
		return repos.filter((repo) => repo.topics.includes(topic));
	}

	/**
	 * Fetch featured/pinned-style repos (non-archived, recently updated)
	 */
	async getFeaturedRepos(username: string, limit: number = 6): Promise<GitHubRepo[]> {
		const repos = await this.getUserRepos(username);
		return repos
			.filter((repo) => !repo.archived)
			.sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime())
			.slice(0, limit);
	}
}

/**
 * Create a GitHubService instance
 * Use in server-side code (+page.server.ts, +server.ts, hooks)
 */
export function createGitHubService(token?: string): GitHubService {
	return new GitHubService(token);
}
