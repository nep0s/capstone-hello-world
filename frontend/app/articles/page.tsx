import React from 'react';
import style from './articles.module.css';
import ArticleList from './ArticleList';

export default async function ArticlesPage() {
  return (
    <div>
      <ArticleList />
    </div>
  );
}
