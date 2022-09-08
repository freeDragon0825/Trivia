import * as Types from 'store/types';

export type TPayload = {
  selectorKey: string;
  data: object;
  loading: boolean;
  play: boolean;
  answers: boolean[];
  params: any;
};

export interface IAction {
  type?: typeof Types.GET_QUIZ_LIST;
  payload: TPayload;
}

export interface IRequestParam {
  url: string;
  method: 'get' | 'post';
  params: object;
  baseURL: string;
}

export interface IRoute {
  index?: boolean;
  path?: string;
  guard?: any;
  layout?: React.FC;
  component: any;
}
