export interface IFeed {
  author: {
    name: string;
    photo?: string;
    username: string;
  };
  brief: string;
  coverImage?: string;
  slug: string;
  title: string;
  readTime: number;
  _id: string;
}
