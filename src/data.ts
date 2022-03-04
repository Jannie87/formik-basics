export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

export type CreatePost = Omit<Post, "id">;

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "Det första inlägget",
    content: "lorem lorem lorem ipsum",
    author: "Nalle",
  },
  {
    id: "2",
    title: "Det andra inlägget",
    content: "lorem lorem lorem ipsum",
    author: "Snögubben",
  },
  {
    id: "3",
    title: "Det tredje inlägget",
    content: "lorem lorem lorem ipsum",
    author: "Mumin",
  },
];
