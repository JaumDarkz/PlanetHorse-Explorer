import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Props {
  type: string;
  children: ReactNode
}

const Pattern: React.FC<Props> = ({ children, type }) => {
  return (
    <div className={styles[type]}>
      {children}
    </div>
  )
}

export default Pattern
