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
}
