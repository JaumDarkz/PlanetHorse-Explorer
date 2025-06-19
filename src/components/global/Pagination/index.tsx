'use client'

import React from 'react';
import styles from './Pagination.module.scss';

interface Props {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ current, total, onPageChange }) => {
  const prev = () => onPageChange(current - 1);
  const next = () => onPageChange(current + 1);

  return (
    <div className={styles.pagination}>
      <button onClick={prev} disabled={current === 1}>
        ‹ Prev
      </button>
      <span>
        {current} / {total}
      </span>
      <button onClick={next} disabled={current === total}>
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
