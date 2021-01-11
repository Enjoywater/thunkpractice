import { AxiosError } from 'axios';
import * as C from '../constants';

// githubUser types
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
  type: typeof C.GITHUB_REQUEST;
}

export interface GithubSuccessType {
  type: typeof C.GITHUB_SUCCESS;
  payload: GithubUserRes;
}

export interface GithubFailureType {
  type: typeof C.GITHUB_FAILURE;
  payload: AxiosError;
}

export type GithubActionType =
  | GithubRequestType
  | GithubSuccessType
  | GithubFailureType;

// jsonplaceholder types
export interface JpStateType {
  data: null | JpUserRes[];
  loading: boolean;
  error: null | AxiosError;
}

export interface JpUserRes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JpAddress;
  phone: string;
  website: string;
  company: JpCompany;
}

export interface JpAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JpGeo;
}

export interface JpGeo {
  lat: string;
  lng: string;
}

export interface JpCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface JpRequestType {
  type: typeof C.JP_REQUEST;
}

export interface JpSuccessType {
  type: typeof C.JP_SUCCESS;
  payload: JpUserRes[];
}

export interface JpFailureType {
  type: typeof C.JP_FAILURE;
  payload: AxiosError;
}

export type JpAction = JpRequestType | JpSuccessType | JpFailureType;
