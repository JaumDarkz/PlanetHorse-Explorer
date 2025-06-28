'use client'

import React, { useState, useMemo, useEffect } from 'react';
import styles from './styles.module.scss';
import SingleHorse from '../../components/SingleHorse';
import ConfirmModal from '../modals/ConfirmModal';
import ErrorModal from '../modals/ErrorModal';
import horses from '../../utils/mocks/horses.json';
import SearchBar from '@/components/global/SearchBar';
import Pagination from '@/components/global/Pagination';

export interface Horse {}

const PAGE_SIZE = 10;

const ExplorerPage: React.FC = () => {
  const [showClaimConfirm, setShowClaimConfirm] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState<'LEVEL' | 'RARITY' | ''>('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHorses = useMemo(() => {
    if (!searchTerm.trim()) return horses;
    const term = searchTerm.toLowerCase();
    return horses.filter((h) => {
      const keywords = [
        h.profile.name,
        h.profile.name_slug,
        h.profile.type_horse,
        h.profile.type_horse_slug,
        h.profile.sex,
        h.profile.type_jockey,
        h.staty.status
      ]
        .join(' ')
        .toLowerCase();
      return keywords.includes(term);
    });
  }, [searchTerm]);

  const orderedHorses = useMemo(() => {
    const list = [...filteredHorses];
    if (orderBy === 'LEVEL') {
      list.sort(
        (a, b) => parseInt(b.staty.level, 10) - parseInt(a.staty.level, 10)
      );
    } else if (orderBy === 'RARITY') {
      const rank: Record<string, number> = {
        LEGENDARY: 5,
        EPIC: 4,
        RARE: 3,
        UNCOMMON: 2,
        COMMON: 1
      };
      list.sort(
        (a, b) =>
          (rank[b.profile.type_horse.toUpperCase()] ?? 0) -
          (rank[a.profile.type_horse.toUpperCase()] ?? 0)
      );
    }
    return list;
  }, [filteredHorses, orderBy]);

  const totalPages = Math.ceil(orderedHorses.length / PAGE_SIZE);
  const paginatedHorses = useMemo(
    () =>
      orderedHorses.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
      ),
    [orderedHorses, currentPage]
  );

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages || 1);
  }, [totalPages, currentPage]);

  return (
    <>
      <div className={styles.container}>
        <SearchBar
          value={searchTerm}
          onChange={(v) => {
            setSearchTerm(v);
            setCurrentPage(1);
          }}
          orderBy={orderBy}
          onOrderChange={(o) => {
            setOrderBy(o);
            setCurrentPage(1);
          }}
          showOptions={true}
        />

        <span className={styles.countHorses}>{orderedHorses.length} Horses</span>

        <div className={styles.cardHorses}>
          {paginatedHorses.map((h) => (
            <div key={h.id} className={styles.card}>
              <SingleHorse horse={h as any} reloadHorses={async () => {}} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <Pagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      {showClaimConfirm && (
        <ConfirmModal
          text="Claim a new horse for 1000 PHORSE?"
          onClose={() => setShowClaimConfirm(false)}
          onConfirm={() => null}
        />
      )}
      {claimError && (
        <ErrorModal text={claimError} onClose={() => setClaimError(null)} />
      )}
    </>
  );
};

export default ExplorerPage;
