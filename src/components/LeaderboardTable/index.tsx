"use client";

import React from "react";
import styles from "./styles.module.scss";
import type { LeaderboardEntry } from "../../types";
import PlayerRow from "./PlayerRow";
import TableHeader from "./TableHeader";

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  loading?: boolean;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  entries,
  loading = false,
}) => (
  <div className={styles.tableContainer}>
    <div className={styles.table}>
      <TableHeader />

      <div className={styles.tableBody}>
        {loading ? (
          <div className={styles.tableRow}>
            <div className={`${styles.cell} ${styles.loadingCell}`}>
              Loading leaderboard…
            </div>
          </div>
        ) : (
          entries.map((entry) => (
            <PlayerRow key={entry.wallet} entry={entry} />
          ))
        )}
      </div>
    </div>
  </div>
);

export default LeaderboardTable;
