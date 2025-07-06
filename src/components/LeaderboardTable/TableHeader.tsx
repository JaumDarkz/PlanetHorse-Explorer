"use client";

import React from "react";
import styles from "./styles.module.scss";

const TableHeader: React.FC = () => (
  <div className={styles.tableHeader}>
    <div className={styles.headerCell}>Rank</div>
    <div className={styles.headerCell}>Wallet</div>
    <div className={styles.headerCell}>PHORSE Spent</div>
  </div>
);

export default TableHeader;
