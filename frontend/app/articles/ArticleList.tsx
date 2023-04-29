'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Article } from './article.d';

import styles from './articles.module.css';
import { DeleteButton, IconButton } from './components/Buttons';
import { getArticles, deleteArticle } from './services';

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(0);
  // number of articles per page
  const page_size = 8;
  const startOffSet = page * page_size;
  const finishOffSet = (page + 1) * page_size;

  const removeArticle = (article: Article) => {
    deleteArticle(article.story_id);
    setArticles(
      articles.filter((currentArticle) => {
        return currentArticle != article;
      })
    );
  };

  useEffect(() => {
    getArticles().then((articles) => setArticles(articles));
  }, []);

  if (!articles.length) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div id={styles.background}>
      <section>
        <div className={styles.centered}>
          {page != 0 && (
            <IconButton
              handleClick={() => setPage(page - 1)}
              value="🢕"
            ></IconButton>
          )}
        </div>
        {articles.slice(startOffSet, finishOffSet).map((article) => (
          <article
            className={styles.container}
            id={article.story_id}
            key={article.story_id}
          >
            <h2 className={styles.title}>
              <a href={article.url} target="_blank">
                {article.story_title}
              </a>
            </h2>

            <p className={styles.author}>- {article.author}</p>
            <p className={styles.date}>
              {new Date(article.created_at.toString()).toDateString()}
            </p>

            <div className={styles.button_placeholder}>
              <DeleteButton
                handleClick={() => removeArticle(article)}
                value="Delete"
              ></DeleteButton>
            </div>
          </article>
        ))}
        <div className={styles.centered}>
          {finishOffSet < articles.length && (
            <IconButton
              handleClick={() => setPage(page + 1)}
              value="🢗"
            ></IconButton>
          )}
        </div>
      </section>
    </div>
  );
}
