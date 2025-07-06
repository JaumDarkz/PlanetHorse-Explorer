"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import LeaderboardTable from "../../components/LeaderboardTable";
import type { LeaderboardEntry } from "../../types";

const LeaderboardPage: React.FC = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.API_URL}/leaderboard`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setEntries(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Leaderboard</h1>
        <p className={styles.subtitle}>
          Compete with the best riders in Planet Horse
        </p>
      </div>

      {/* always render the table—pass `loading` so it shows the placeholder row */}
      <LeaderboardTable entries={entries} loading={loading} />

      {/* optional: show an error banner below if there was a fetch error */}
      {error && (
        <div className={styles.errorBanner}>Error loading leaderboard: {error}</div>
      )}
    </div>
  );
};

export default LeaderboardPage;
