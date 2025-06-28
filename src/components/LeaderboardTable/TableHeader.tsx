"use client"

import type React from "react"
import styles from "./styles.module.scss"
import type { SortOption } from "../../types"

interface TableHeaderProps {
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
}

const TableHeader: React.FC<TableHeaderProps> = ({ sortBy, onSortChange }) => {
  const handleSort = (option: SortOption) => {
    onSortChange(option)
  }

  return (
    <div className={styles.tableHeader}>
      <div className={styles.headerCell}>
        <span>Rank</span>
      </div>

      <div className={styles.headerCell}>
        <span>Player</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "LEVEL" ? styles.active : ""}`}
        onClick={() => handleSort("LEVEL")}
      >
        <span>Level</span>
        <span className={styles.sortIcon}>↕</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "TOTAL_POINTS" ? styles.active : ""}`}
        onClick={() => handleSort("TOTAL_POINTS")}
      >
        <span>Points</span>
        <span className={styles.sortIcon}>↕</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "RACES_WON" ? styles.active : ""}`}
        onClick={() => handleSort("RACES_WON")}
      >
        <span>Races Won</span>
        <span className={styles.sortIcon}>↕</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "WIN_RATE" ? styles.active : ""}`}
        onClick={() => handleSort("WIN_RATE")}
      >
        <span>Win Rate</span>
        <span className={styles.sortIcon}>↕</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "TOKENS_EARNED" ? styles.active : ""}`}
        onClick={() => handleSort("TOKENS_EARNED")}
      >
        <span>PHORSE</span>
        <span className={styles.sortIcon}>↕</span>
      </div>

      <div
        className={`${styles.headerCell} ${styles.sortable} ${sortBy === "HORSES_OWNED" ? styles.active : ""}`}
        onClick={() => handleSort("HORSES_OWNED")}
      >
        <span>Horses</span>
        <span className={styles.sortIcon}>↕</span>
      </div>
    </div>
  )
}

export default TableHeader
