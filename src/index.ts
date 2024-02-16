import "./style.css";

import { filter } from 'lodash';
import { IPost, getPosts } from './Posts';
import { capitalizeTitles } from './LegacyModule/index.js';
(async function filterPosts() {
  const userId: number = 1;
  const posts = await getPosts();  
  console.log('Колличество полученых данных:', posts?.data.length); 
  const filteredPosts: IPost[] = filter(posts?.data, (p: IPost) => {
 return p.userId === userId })
  console.log('filteredPosts', filteredPosts)
  console.log('filteredPosts.length', filteredPosts.length) // выведем вконсоли длину отфильтрованного массива, должна быть 10
  const test = capitalizeTitles(filteredPosts);
  console.log('test', test) // filteredPosts, где все заголовки заглавными буквами
 })()




