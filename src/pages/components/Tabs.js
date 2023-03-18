import React, { useState } from 'react';
import styles from '@/styles/Tabs.module.css'
import { useRouter } from 'next/router';


function Tabs(props) {

  const router = useRouter()

  function changeTab(tabName) {
    switch (tabName) {
        case 'home':
            return router.push('/home')
        case 'store':
            return router.push('/store')
        default:
            return router.push('/cart')
    }
  }

  return (
    <div className={styles["tab-container"]}>
      <div className={styles["tab-buttons"]}>
        {props?.tabs?.map((tab) => (
          <button
            key={tab.name}
            className={styles['tab-button']}
            onClick={() => changeTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
