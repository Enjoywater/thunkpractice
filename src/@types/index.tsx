import { AxiosError } from 'axios';
import * as T from '../constants';

// githubUser type
export interface GithubUserStateType {
  data: null | GithubUserRes;
  loading: boolean;
  error: null | AxiosError;
}

export interface GithubUserRes {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: null;
  company: null;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface GithubRequestType {
  type: typeof T.GITHUB_REQUEST;
}

export interface GithubSuccessType {
  type: typeof T.GITHUB_SUCCESS;
  payload: GithubUserRes;
}

export interface GithubFailureType {
  type: typeof T.GITHUB_FAILURE;
  payload: AxiosError;
}

export type GithubActionType =
  | GithubRequestType
  | GithubSuccessType
  | GithubFailureType;
