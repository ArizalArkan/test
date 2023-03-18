import React, { useEffect, useState } from 'react'
import DefaultLayout from '@/pages/containers/DefaultLayout.js'
import Tabs from '@/pages/components/Tabs.js'
import styles from '@/styles/Store.module.css'

export default function Store() {
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
                {isData?.map((val) => {
                    return (<div key={val?.title} className={styles.card}>
                        <div style={{ width: '100px', backgroundColor: 'red', height: '100px' }} />
                        <p>{val?.title}</p>
                        <button>Add</button>
                    </div>)
                })}

            </div>
        </DefaultLayout>
    )
}
