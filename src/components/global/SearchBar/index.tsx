'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './SearchBar.module.scss';
import searchIcon from '@/assets/buttons/search.png';
import threeDots from '@/assets/buttons/3dots.png';

interface Props {
  value: string;
  onChange: (value: string) => void;
  orderBy: '' | 'LEVEL' | 'RARITY';
  onOrderChange: (o: '' | 'LEVEL' | 'RARITY') => void;
  showOptions?: boolean
}

const SearchBar: React.FC<Props> = ({
  value,
  onChange,
  orderBy,
  onOrderChange,
  showOptions
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, []);

  const clickOption = (opt: '' | 'LEVEL' | 'RARITY') => {
    onOrderChange(opt);
    setOpen(false);
  };

  return (
    <div className={styles.searchBar} ref={ref}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search horse…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <Image
        alt="Search"
        width={32}
        height={32}
        src={searchIcon}
        className={styles.searchButton}
      />

      {showOptions && (
        <Image
          alt="Options"
          width={8}
          height={26}
          src={threeDots}
          className={styles.threeDots}
          onClick={() => setOpen((p) => !p)}
        />
      )}

        {open && (
          <div className={styles.dropdown}>
            <button
              className={!orderBy ? styles.active : ''}
              onClick={() => clickOption('')}
            >
              None
            </button>
            <button
              className={orderBy === 'LEVEL' ? styles.active : ''}
              onClick={() => clickOption('LEVEL')}
            >
              Order by Level
            </button>
            <button
              className={orderBy === 'RARITY' ? styles.active : ''}
              onClick={() => clickOption('RARITY')}
            >
              Order by Rarity
            </button>
          </div>
        )}
    </div>
  );
};

export default SearchBar;
