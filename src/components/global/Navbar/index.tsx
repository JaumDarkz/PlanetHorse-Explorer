'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Burger from '../Burger'
import Image from 'next/image'
import Link from 'next/link'
import exampleUserPic from '@/assets/user-profiles/example-user.gif'
import noUserPic from '@/assets/user-profiles/no-user.gif'

const Navbar: React.FC = () => {
  const [burger, setBurger] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <svg width='100%' height='90px'>
          <rect y='75' fill='#582c25' width='100%' height='4' />
          <rect y='83' fill='#582c25' width='100%' height='7' />
        </svg>
        <div className={styles.content}>
          <button className={styles.burgerIcon} onClick={() => {
            setBurger(!burger)
          }}>
            <svg width='100%' height='100%'>
              <rect y='10' fill='#fff' width='30' height='3' />
              <rect y='21' fill='#fff' width='30' height='3' />
              <rect y='32' fill='#fff' width='30' height='3' />
            </svg>
          </button>
          <div className={styles.logo}>
            <Link href='/'>

              <Image
                layout='intrinsic'
                src='/assets/utils/logos/planet-horse.webp'
                alt='PlanetHorse'
                width={136}
                height={55}
              />

            </Link>
          </div>
          <div className={styles.options}>
            {/* <a>|</a> */}
            <Link href='/'>
              <div>LEADERBOARD</div>
            </Link>
            {/* <a>|</a> */}
            <Link href='https://marketplace.roninchain.com/collections/origin-horses' target='_blank'>
              <div>MARKETPLACE</div>
            </Link>
            {/* <Link href='/explorer'> */}
            <div className={styles.disabledLink}>EXPLORER</div>
            {/* </Link> */}
            {/* <a>|</a> */}
            {/* <Link href='/referral'> */}
            <div className={styles.disabledLink}>REFERRAL</div>
            {/* </Link> */}
          </div>
          <div
            className={styles.account}
          >
            <div id={styles.userProfileButton}>
              <span className={styles.disabledLink}>{'Connect Wallet'}</span>
              <div className={styles.userPicture}>
                <Image alt='User Pic' width={40} height={40} src={noUserPic} />
              </div>
            </div>

          </div>
        </div>

      </div>

      <Burger close={burger} />
    </>
  )
}

export default Navbar
