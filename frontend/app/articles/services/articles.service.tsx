'use client';

import { Article } from '../article.d';
const axios = require('axios').default;

// export const getArticles = async (): Promise<Article[]> => {
//   const url = process.env.NEXT_PUBLIC_BACKEND_URL;
//   const res = await axios.get(`${url}articles`);
//   const data = await res.data;
//   return data;
// };

export const getArticles = async (): Promise<Article[]> => {
  const data = [
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    },
    {
      _id: '644d416517e60d70cf727cb7',
      story_id: '35752871',
      __v: 0,
      author: 'markgavalda',
      created_at: '2023-04-29T13:55:20.000Z',
      deleted_at: null,
      story_title:
        'Node.js v20: Test Runner, Permission Model, Sea, V8 JavaScript Engine 11.3',
      url: 'https://kinsta.com/blog/node-js-20/'
    }
  ];

  return new Promise((resolve, reject) => resolve(data));
};

export const deleteArticle = async (id: string) => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/';
  const res = await axios.delete(`${url}articles/${id}`);
  const data = await res.data;
  return data;
};
