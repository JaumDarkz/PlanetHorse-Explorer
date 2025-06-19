import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

interface Props {
  close?: boolean
}

const Burger: React.FC<Props> = ({ close = false }) => {
  return (
    <div
      id={styles.burger}
      style={{
        left: close ? '0' : '-300px'
      }}
    >
      <Link href='/'>
        <div>Explorer</div>
      </Link>
      <Link href='/leaderboard'>
        <div>Leaderboard</div>
      </Link>
      <Link href='/referral'>
        <div>Referral</div>
      </Link>
      <Link href='https://opensea.io/'>
        <div>Marketplace</div>
      </Link>
    </div>
  )
}

export default Burger
