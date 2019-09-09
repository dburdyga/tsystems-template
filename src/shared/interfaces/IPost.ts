export interface IPost {
  name: string;
  version: string;
  addressDocker: string;
  addressBootnode: string;
  credentials:
    {
      username: string;
      password: string;
    },
  images: {
    image1: string;
    image2: string;
    image3: string;
  },
  zipUrl: string;
  codeSnippets: string;
  dashboardUrl: string;
}
