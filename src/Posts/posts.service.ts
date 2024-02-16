import axios, { AxiosResponse } from "axios";
import { IPost } from "./posts.interface";

export async function getPosts(): Promise<AxiosResponse<IPost[]>> {
  return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
}
