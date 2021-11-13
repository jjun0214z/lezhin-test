export interface IAPI {
  url: string;
  method: 'get' | 'post' | 'delete' | 'post' | 'put' | 'patch';
}

export interface IApiOptions {
  [key: string]: any;
}
