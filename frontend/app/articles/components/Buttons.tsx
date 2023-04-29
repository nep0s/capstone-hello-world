'use client';
import React from 'react';
import styles from '../articles.module.css';

export function DeleteButton({
  handleClick,
  value
}: {
  handleClick: () => void;
  value: string;
}) {
  return (
    <button className={styles.delete_button} onClick={handleClick}>
      {value}
    </button>
  );
}

export function IconButton({
  handleClick,
  value
}: {
  handleClick: () => void;
  value: string;
}) {
  return (
    <button className={styles.icon_button} onClick={handleClick}>
      {value}
    </button>
  );
}
