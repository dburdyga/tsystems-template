export interface IPost {
  name: string;
  version: number;
  addressDocker: string;
  addressBootnode: string;
  credentials: [
    {
      username: string;
      password: string;
    }
    ]
  image: string;
  zipUrl: string;
  codeSnippets: string;
  dashboardUrl: string;
}
