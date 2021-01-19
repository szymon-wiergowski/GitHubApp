export interface User {
  id: number;
  avatar_url: string;
  url: string;
  type: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  private_gists: number;
  repos: Repository[];
}

export interface Repository {
  id?: number;
  name?: string;
  full_name?: string;
  description?: string;
  forks?: number;
  watchers?: number;
  stargazers_count?: number;
  url?: string;
  owner?: {
    login?: string;
    id?: number;
  };
}
