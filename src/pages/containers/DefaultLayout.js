import React from 'react'
import styles from '../../styles/Default.module.css'
import { GlobalProvider } from '@/context/globalContext'

export default function DefaultLayout({ children }) {
    return (
        <main className={styles.main}>
            <div className={styles.mobile}>
                {children}
            </div>
        </main>
    )
}
