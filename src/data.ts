export interface Post {
  title: string;
  content: string;
  author: string;
}

export const mockedPosts: Post[] = [
  {
    title: "Det första inlägget",
    content: "lorem lorem lorem ipsum",
    author: "JBK",
  },
  {
    title: "Det andra inlägget",
    content: "lorem lorem lorem ipsum",
    author: "Nalle",
  },
  {
    title: "Det tredje inlägget",
    content: "lorem lorem lorem ipsum",
    author: "Mumin",
  },
];