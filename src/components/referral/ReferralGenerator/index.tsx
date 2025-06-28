"use client"

import type React from "react"
import { useState, useRef } from "react"
import styles from "./styles.module.scss"
import CopyButton from "../CopyButton"
import CustomLinkModal from "../CustomLinkModal"

const ReferralGenerator: React.FC = () => {
  const [referralLink, setReferralLink] = useState("https://planethorse.io/ref/HorseWhisperer")
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const linkInputRef = useRef<HTMLInputElement>(null)

  const generateDefaultLink = async () => {
    setIsGenerating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setReferralLink("https://planethorse.io/ref/HorseWhisperer")
    setIsGenerating(false)
  }

  const handleCustomLink = (customCode: string) => {
    setReferralLink(`https://planethorse.io/ref/${customCode}`)
    setShowCustomModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{"🔗 Generate Your Referral Link"}</h2>
        <p className={styles.description}>{"Share your link and earn rewards for every friend who joins!"}</p>
      </div>

      <div className={styles.linkSection}>
        <div className={styles.inputContainer}>
          <input
            ref={linkInputRef}
            type="text"
            value={referralLink}
            readOnly
            className={styles.linkInput}
            placeholder="Your referral link will appear here..."
          />
          <CopyButton text={referralLink} />
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.generateButton} ${isGenerating ? styles.loading : ""}`}
            onClick={generateDefaultLink}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <span className={styles.spinner}></span>
                {"Generating..."}
              </>
            ) : (
              <>
                <span className={styles.icon}>⚡</span>
                {"Generate Default"}
              </>
            )}
          </button>

          <button className={styles.customButton} onClick={() => setShowCustomModal(true)}>
            <span className={styles.icon}>✨</span>
            {"Create Custom"}
          </button>
        </div>
      </div>

      <div className={styles.tips}>
        <h3>{"💡 Pro Tips"}</h3>
        <ul>
          <li>{"Share on social media for maximum reach"}</li>
          <li>{"Custom links are more memorable and trustworthy"}</li>
          <li>{"Track your progress in the stats section below"}</li>
        </ul>
      </div>

      {showCustomModal && <CustomLinkModal onConfirm={handleCustomLink} onClose={() => setShowCustomModal(false)} />}
    </div>
  )
}

export default ReferralGenerator
