import { User } from '../../model/models';

export const Users: User[] = [
  {
  id: 1,
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  url: 'https://api.github.com/octocat',
  type: 'User',
  name: 'monalisa octocat',
  company: 'GitHub',
  blog: 'https://github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: '2008-01-14T04:33:35Z',
  private_gists: 81
  },
  {
    id: 2,
    avatar_url: '../assets/img/Profile-picture.jpg',
    url: 'https://github.com/szymon-wiergowski',
    type: 'User',
    name: 'Szymon Wiergowski',
    company: 'AdvanFile',
    blog: 'https://AdvanFile.com/blog',
    location: 'Reda',
    email: 's.wiergowski@gmail.com',
    public_repos: 14,
    public_gists: 2,
    followers: 200,
    following: 20,
    created_at: '2018-01-14T04:33:35Z',
    private_gists: 81
    },
    {
      id: 3,
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      url: 'https://api.github.com/lukasz-smolnicki',
      type: 'User',
      name: 'Łukasz Smolnicki',
      company: 'SpawaczUE',
      blog: 'https://SpawaczUE.com/blog',
      location: 'Pruszcz Gdąński',
      email: 'ł.smolnicki@wp.pl',
      public_repos: 4,
      public_gists: 20,
      followers: 20,
      following: 10,
      created_at: '2019-01-14T04:33:35Z',
      private_gists: 51
      }
  ];
