import React, { useEffect, useState } from 'react'
import DefaultLayout from '@/pages/containers/DefaultLayout.js'
import Tabs from '@/pages/components/Tabs.js'
import styles from '@/styles/Cart.module.css'

export default function Cart() {
    const [isData, setData] = useState()
    const tabs = [
        {
            name: 'home',
            label: 'Tab 1',
        },
        {
            name: 'store',
            label: 'Tab 2',
        },
        {
            name: 'cart',
            label: 'Tab 3',
        },
    ];

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
            .then(response => response.json())
            .then(data => setData(data?.results))
            .catch(error => console.error(error));
    }, [])

    return (
        <DefaultLayout>
            <Tabs tabs={tabs} defaultTab="home" />
            <div className={styles.container} >
                <div style={{ width: '100px', height: '100px' }} />
            </div>
        </DefaultLayout>
    )
}
