/**
 * GitHub repository data types for portfolio display
 */

export interface GitHubRepo {
	/** Repository name */
	name: string;
	/** Repository full name (owner/repo) */
	fullName: string;
	/** Repository description */
	description: string | null;
	/** Repository topics/tags */
	topics: string[];
	/** URL to the repository */
	url: string;
	/** URL to the repository's homepage (if set) */
	homepage: string | null;
	/** Primary programming language */
	language: string | null;
	/** Star count */
	stars: number;
	/** Fork count */
	forks: number;
	/** Whether the repo is archived */
	archived: boolean;
	/** Creation date */
	createdAt: string;
	/** Last update date */
	updatedAt: string;
	/** Last push date */
	pushedAt: string;
}

export interface GitHubRepoWithReadme extends GitHubRepo {
	/** README content (markdown) */
	readme: string | null;
}

export interface GitHubUser {
	/** Username */
	login: string;
	/** Display name */
	name: string | null;
	/** Bio */
	bio: string | null;
	/** Avatar URL */
	avatarUrl: string;
	/** Profile URL */
	url: string;
	/** Public repos count */
	publicRepos: number;
}
