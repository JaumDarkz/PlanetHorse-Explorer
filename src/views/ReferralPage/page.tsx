"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import ReferralGenerator from "../../components/referral/ReferralGenerator"
import ReferralStats from "../../components/referral/ReferralStats"
import BonusSection from "../../components/referral/BonusSection"
import MilestonesSection from "../../components/referral/MilestonesSection"
import RewardModal from "../../components/referral/RewardModal"
import type { ReferralData, Milestone } from "../../types"
import { mockReferralData, milestones } from "../../utils/mocks/mockReferral"

const ReferralPage: React.FC = () => {
  const [referralData, setReferralData] = useState<ReferralData>(mockReferralData)
  const [showRewardModal, setShowRewardModal] = useState(false)
  const [newMilestone, setNewMilestone] = useState<Milestone | null>(null)

  // Simulate milestone achievement
  useEffect(() => {
    const unlockedMilestones = milestones.filter(
      (milestone) => referralData.totalReferrals >= milestone.requiredReferrals && !milestone.claimed,
    )

    if (unlockedMilestones.length > 0) {
      const nextMilestone = unlockedMilestones[0]
      setNewMilestone(nextMilestone)
      setShowRewardModal(true)
    }
  }, [referralData.totalReferrals])

  const handleClaimReward = (milestoneId: string) => {
    // Here you would integrate with your backend API
    console.log("Claiming reward for milestone:", milestoneId)
    setShowRewardModal(false)
    setNewMilestone(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Referral Program</h1>
        <p className={styles.subtitle}>{"Invite friends and earn amazing rewards together!"}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <ReferralGenerator />
          <ReferralStats data={referralData} />
        </div>

        <div className={styles.rightColumn}>
          <BonusSection referralLevel={referralData.level} totalReferrals={referralData.totalReferrals} />
          <MilestonesSection
            totalReferrals={referralData.totalReferrals}
            milestones={milestones}
            onClaimReward={handleClaimReward}
          />
        </div>
      </div>

      {showRewardModal && newMilestone && (
        <RewardModal
          milestone={newMilestone}
          onClaim={() => handleClaimReward(newMilestone.id)}
          onClose={() => setShowRewardModal(false)}
        />
      )}
    </div>
  )
}

export default ReferralPage
