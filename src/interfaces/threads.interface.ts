export interface IThread {
  title: string;
  body: string;
  userId: string;
  userName?: string;
}

export interface IUpdateThread {
  title: string;
  body: string;
}