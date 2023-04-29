'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import { Link } from 'react-router-dom';
dotenv.config();

const axios = require('axios').default;

export default function HomePage() {
  const [message, setMessage] = useState<string>('');

  // const getMessage = async (): Promise<{ message: string }> => {
  //   const url = process.env.NEXT_PUBLIC_BACKEND_URL;
  //   const res = await axios.get(`${url}`);
  //   const data = await res.data;
  //   return data;
  // };

  const getMessage = async (): Promise<{ message: string }> => {
    const response = fetch('http://localhost:5500');
    const data = await response.then((res) => res.json());
    return data;
  };

  useEffect(() => {
    // getMessage().then((message) => setMessage(message.message));
    setMessage('Hello World!');
  }, []);

  if (!message) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{message}</h2>
      <a href="http://localhost:3000/articles">Articles</a>
    </div>
  );
}
