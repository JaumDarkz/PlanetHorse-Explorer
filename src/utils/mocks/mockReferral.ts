import type { ReferralData, Milestone } from "../../types"

export const mockReferralData: ReferralData = {
  totalReferrals: 23,
  activeReferrals: 18,
  totalEarned: 45600,
  thisMonth: 8,
  level: 3,
}

export const milestones: Milestone[] = [
  {
    id: "milestone-1",
    title: "First Steps",
    description: "Welcome to the referral program! Get your first referral.",
    requiredReferrals: 1,
    rewards: [
      { type: "PHORSE", amount: 500, icon: "💰" },
      { type: "XP", amount: 100, icon: "⭐" },
    ],
    claimed: true,
  },
  {
    id: "milestone-2",
    title: "Growing Network",
    description: "You're building a solid network of players!",
    requiredReferrals: 5,
    rewards: [
      { type: "PHORSE", amount: 2500, icon: "💰" },
      { type: "Common Horse NFT", amount: 1, icon: "🐎" },
      { type: "XP", amount: 500, icon: "⭐" },
    ],
    claimed: true,
  },
  {
    id: "milestone-3",
    title: "Community Builder",
    description: "You're becoming a true community builder!",
    requiredReferrals: 10,
    rewards: [
      { type: "PHORSE", amount: 5000, icon: "💰" },
      { type: "Rare Horse NFT", amount: 1, icon: "🦄" },
      { type: "Exclusive Badge", amount: 1, icon: "🏅" },
    ],
    claimed: true,
  },
  {
    id: "milestone-4",
    title: "Network Master",
    description: "Your network is impressive! Keep growing!",
    requiredReferrals: 25,
    rewards: [
      { type: "PHORSE", amount: 12500, icon: "💰" },
      { type: "Epic Horse NFT", amount: 1, icon: "🔥" },
      { type: "VIP Status", amount: "30 days", icon: "👑" },
    ],
    claimed: false,
  },
  {
    id: "milestone-5",
    title: "Referral Legend",
    description: "You've reached legendary status in our community!",
    requiredReferrals: 50,
    rewards: [
      { type: "PHORSE", amount: 25000, icon: "💰" },
      { type: "Legendary Horse NFT", amount: 1, icon: "⚡" },
      { type: "Custom Title", amount: 1, icon: "✨" },
      { type: "Lifetime VIP", amount: 1, icon: "💎" },
    ],
    claimed: false,
  },
  {
    id: "milestone-6",
    title: "Planet Horse Ambassador",
    description: "You are now an official Planet Horse Ambassador!",
    requiredReferrals: 100,
    rewards: [
      { type: "PHORSE", amount: 50000, icon: "💰" },
      { type: "Mythical Horse NFT", amount: 1, icon: "🌟" },
      { type: "Ambassador Badge", amount: 1, icon: "🎖️" },
      { type: "Revenue Share", amount: "5%", icon: "📈" },
    ],
    claimed: false,
  },
]
