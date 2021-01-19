import { User } from '../../model/models';

export const Users: User[] = [
  {
  id: 1,
  avatar_url: '../assets/img/Profile-picture_1.jpg',
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
  private_gists: 81,
  repos: [
    {
    id: 1296269,
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    description: 'This your first repo!',
    forks: 9,
    watchers: 80,
    stargazers_count: 80,
    url: 'https://api.github.com/repos/octocat/Hello-World',
    owner: {
      login: 'octocat',
      id: 1,
    },
  },
  {
    id: 3244269,
    name: 'Hello-EU',
    full_name: 'octocat/EU',
    description: 'This my second repo!',
    forks: 1,
    watchers: 2,
    stargazers_count: 3,
    url: 'https://api.github.com/repos/octocat/EU',
    owner: {
      login: 'octocat',
      id: 1,
    },
  }
  ],
},
  {
    id: 2,
    avatar_url: '../assets/img/Profile-picture_2.jpg',
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
    private_gists: 81,
    repos: [
      {
      id: 1298765,
      name: 'DRINK-APP',
      full_name: 'szymon-wiergowski/DRINK-APP',
      description: 'The 4-person team project was created in Infoshare Academy. Application helps prepare a drink for the user from the products he has. The user can add new drinks and register on the firebase platform, as well as find the location of the selected store on google map (used: React.js, firebase, google map).',
      forks: 4,
      watchers: 8,
      stargazers_count: 10,
      url: 'https://github.com/szymon-wiergowski/DRINK-APP',
      owner: {
        login: 'szymon-wiergowski',
        id: 2,
      },
    },
    {
      id: 9998765,
      name: 'LANDING-PAGE',
      full_name: 'szymon-wiergowski/LANDING-PAGE',
      description: 'The 4-person team project was created in Infoshare Academy. The site is a preview of a future application in react. Informs the user about the possibilities of the application and its creators. After forwarding the email, the user is given the opportunity to play a mini game (used: HTML5, CSS3, Bootstrap 4, Javascript).',
      forks: 4,
      watchers: 44,
      stargazers_count: 30,
      url: 'https://github.com/szymon-wiergowski/LANDING-PAGE',
      owner: {
        login: 'szymon-wiergowski',
        id: 2,
      },
    }
  ],
  },
    {
      id: 3,
      avatar_url: '../assets/img/Profile-picture_3.jpg',
      url: 'https://github.com/lukasz-smolnicki',
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
      private_gists: 51,
      repos: [
        {
        id: 1234567,
        name: 'SwedaHousing',
        full_name: 'lukasz-smolnicki/SwedaHousing',
        description: 'No description, website, or topics provided.',
        forks: 0,
        watchers: 1,
        stargazers_count: 0,
        url: 'https://github.com/lukasz-smolnicki/SwedaHousing',
        owner: {
          login: 'lukasz-smolnicki',
          id: 3,
        },
      },
      {
        id: 7774567,
        name: 'Imperium galactica',
        full_name: 'lukasz-smolnicki/imperium-galactica',
        description: 'Turn-based strategy game. I want to learn PHP & MySQL.',
        forks: 2,
        watchers: 3,
        stargazers_count: 15,
        url: 'https://github.com/lukasz-smolnicki/SwedaHousing',
        owner: {
          login: 'lukasz-smolnicki',
          id: 3,
        },
      }
    ],
    },
  ];
