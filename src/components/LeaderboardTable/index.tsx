"use client"

import type React from "react"
import styles from "./styles.module.scss"
import type { Player, SortOption } from "../../types"
import PlayerRow from "./PlayerRow"
import TableHeader from "./TableHeader"

interface LeaderboardTableProps {
  players: Player[]
  currentPage: number
  pageSize: number
  sortBy: SortOption
  onSortChange: (sort: SortOption) => void
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  players,
  currentPage,
  pageSize,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        <TableHeader sortBy={sortBy} onSortChange={onSortChange} />

        <div className={styles.tableBody}>
          {players.map((player, index) => (
            <PlayerRow key={player.id} player={player} rank={(currentPage - 1) * pageSize + index + 1} />
          ))}
        </div>
      </div>

      {players.length === 0 && (
        <div className={styles.emptyState}>
          <p>{"No players found matching your criteria"}</p>
        </div>
      )}
    </div>
  )
}

export default LeaderboardTable
