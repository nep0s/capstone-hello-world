'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const axios = require('axios').default;

export default function HomePage() {
  const [message, setMessage] = useState<string>('');

  const getMessage = async (): Promise<{ message: string }> => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const res = await axios.get(`${url}`);
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    getMessage().then((message) => setMessage(message.message));
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
    </div>
  );
}
