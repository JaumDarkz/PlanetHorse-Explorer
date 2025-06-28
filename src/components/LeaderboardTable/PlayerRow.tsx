"use client"

import type React from "react"
import styles from "./styles.module.scss"
import type { Player } from "../../types"

interface PlayerRowProps {
  player: Player
  rank: number
}

const PlayerRow: React.FC<PlayerRowProps> = ({ player, rank }) => {
  const getRankClass = (rank: number) => {
    if (rank === 1) return styles.gold
    if (rank === 2) return styles.silver
    if (rank === 3) return styles.bronze
    return ""
  }

  const formatWallet = (wallet: string) => {
    return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className={`${styles.tableRow} ${getRankClass(rank)}`}>
      <div className={styles.cell}>
        <div className={styles.rank}>
          <span className={styles.rankNumber}>#{rank}</span>
          {rank <= 3 && <span className={styles.medal}>🏆</span>}
        </div>
      </div>

      <div className={styles.cell}>
        <div className={styles.playerInfo}>
          <div className={styles.avatar}>
            <img src={player.avatar || "/placeholder.svg?height=40&width=40"} alt={player.username} />
          </div>
          <div className={styles.playerDetails}>
            <span className={styles.username}>{player.username}</span>
            <span className={styles.wallet}>{formatWallet(player.wallet)}</span>
            <span className={styles.region}>{player.region}</span>
          </div>
        </div>
      </div>

      <div className={styles.cell}>
        <span className={styles.level}>Lv.{player.level}</span>
      </div>

      <div className={styles.cell}>
        <span className={styles.points}>{formatNumber(player.totalPoints)}</span>
      </div>

      <div className={styles.cell}>
        <span className={styles.races}>{player.racesWon}</span>
      </div>

      <div className={styles.cell}>
        <span className={styles.winRate}>{player.winRate.toFixed(1)}%</span>
      </div>

      <div className={styles.cell}>
        <span className={styles.tokens}>{formatNumber(player.tokensEarned)}</span>
      </div>

      <div className={styles.cell}>
        <div className={styles.horsesInfo}>
          <span className={styles.horsesCount}>{player.horsesOwned}</span>
          {player.favoriteHorse && (
            <span className={styles.favoriteHorse}>
              {player.favoriteHorse.name} ({player.favoriteHorse.type})
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayerRow
