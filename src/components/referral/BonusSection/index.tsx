"use client"

import type React from "react"
import styles from "./styles.module.scss"

interface BonusSectionProps {
  referralLevel: number
  totalReferrals: number
}

const BonusSection: React.FC<BonusSectionProps> = ({ referralLevel, totalReferrals }) => {
  const bonusLevels = [
    {
      level: 1,
      referralsRequired: 0,
      bonusPerReferral: 100,
      specialBonus: "Welcome Bonus",
      description: "Start your referral journey!",
      color: "#8B4513",
    },
    {
      level: 2,
      referralsRequired: 5,
      bonusPerReferral: 150,
      specialBonus: "Bronze Tier",
      description: "50% bonus increase",
      color: "#CD7F32",
    },
    {
      level: 3,
      referralsRequired: 15,
      bonusPerReferral: 200,
      specialBonus: "Silver Tier",
      description: "Double rewards + exclusive NFT",
      color: "#C0C0C0",
    },
    {
      level: 4,
      referralsRequired: 30,
      bonusPerReferral: 300,
      specialBonus: "Gold Tier",
      description: "Triple rewards + rare horse",
      color: "#FFD700",
    },
    {
      level: 5,
      referralsRequired: 50,
      bonusPerReferral: 500,
      specialBonus: "Diamond Tier",
      description: "5x rewards + legendary horse",
      color: "#B9F2FF",
    },
  ]

  const currentBonus = bonusLevels.find((bonus) => bonus.level === referralLevel) || bonusLevels[0]
  const nextBonus = bonusLevels.find((bonus) => bonus.level === referralLevel + 1)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{"🎁 Referral Bonuses"}</h2>
      </div>

      <div className={styles.currentBonus}>
        <div className={styles.currentBadge} style={{ backgroundColor: currentBonus.color }}>
          <div className={styles.badgeContent}>
            <div className={styles.badgeLevel}>
              {"Level "}
              {currentBonus.level}
            </div>
            <div className={styles.badgeTitle}>{currentBonus.specialBonus}</div>
          </div>
        </div>

        <div className={styles.bonusDetails}>
          <div className={styles.bonusAmount}>
            <span className={styles.amount}>{currentBonus.bonusPerReferral}</span>
            <span className={styles.currency}>{"PHORSE per referral"}</span>
          </div>
          <p className={styles.description}>{currentBonus.description}</p>
        </div>
      </div>

      {nextBonus && (
        <div className={styles.nextBonus}>
          <div className={styles.nextHeader}>
            <h3>{"🚀 Next Level Rewards"}</h3>
            <span className={styles.requirement}>
              {nextBonus.referralsRequired - totalReferrals} more referrals needed
            </span>
          </div>

          <div className={styles.nextBonusCard}>
            <div className={styles.nextBadge} style={{ backgroundColor: nextBonus.color }}>
              <div className={styles.badgeContent}>
                <div className={styles.badgeLevel}>
                  {"Level "}
                  {nextBonus.level}
                </div>
                <div className={styles.badgeTitle}>{nextBonus.specialBonus}</div>
              </div>
            </div>

            <div className={styles.nextBonusDetails}>
              <div className={styles.bonusAmount}>
                <span className={styles.amount}>{nextBonus.bonusPerReferral}</span>
                <span className={styles.currency}>{"PHORSE per referral"}</span>
              </div>
              <p className={styles.description}>{nextBonus.description}</p>
            </div>
          </div>

          <div className={styles.progressToNext}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.min((totalReferrals / nextBonus.referralsRequired) * 100, 100)}%`,
                }}
              ></div>
            </div>
            <div className={styles.progressText}>
              {totalReferrals}/{nextBonus.referralsRequired} referrals
            </div>
          </div>
        </div>
      )}

      <div className={styles.allLevels}>
        <h3>{"🏆 All Bonus Levels"}</h3>
        <div className={styles.levelsList}>
          {bonusLevels.map((bonus) => (
            <div
              key={bonus.level}
              className={`${styles.levelItem} ${
                bonus.level === referralLevel ? styles.current : bonus.level < referralLevel ? styles.completed : ""
              }`}
            >
              <div className={styles.levelBadge} style={{ backgroundColor: bonus.color }}>
                {bonus.level}
              </div>
              <div className={styles.levelInfo}>
                <div className={styles.levelTitle}>{bonus.specialBonus}</div>
                <div className={styles.levelReward}>{bonus.bonusPerReferral} PHORSE</div>
              </div>
              <div className={styles.levelRequirement}>
                {bonus.referralsRequired === 0 ? "Start" : `${bonus.referralsRequired} refs`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BonusSection
