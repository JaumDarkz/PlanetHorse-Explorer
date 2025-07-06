// PlayerRow.tsx
"use client";
import React from "react";
import styles from "./styles.module.scss";
import type { LeaderboardEntry } from "../../types";

interface PlayerRowProps {
  entry: LeaderboardEntry;
}

const formatWallet = (w: string) => `${w.slice(0, 12)}…${w.slice(-6)}`;
const formatPhorse = (n: number) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return n.toString();
};

const PlayerRow: React.FC<PlayerRowProps> = ({ entry }) => {
  const rankNum = parseInt(entry.rank, 10);

  return (
    <div className={styles.tableRow}>
      <div className={styles.cell}>
        {entry.rank}
        {rankNum <= 5 && <span className={styles.trophy}>🏆</span>}
      </div>
      <div className={styles.cell}>{formatWallet(entry.wallet)}</div>
      <div className={styles.cell}>{formatPhorse(entry.totalPhorseSpent)}</div>
    </div>
  );
};

export default PlayerRow;
