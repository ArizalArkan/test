import React, { useState } from 'react'
import DefaultLayout from '@/pages/containers/DefaultLayout.js'
import Tabs from '@/pages/components/Tabs.js'
import styles from '@/styles/Home.module.css'

export default function Home() {
    const [formData, setFormData] = useState({ name: '', address: '', email: '', phone: '' });
    const [store, setStore] = useState([]);
    const [isModal, setModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStore((prevStore) => [...prevStore, formData]);
        setFormData({ name: '', address: '', email: '', phone: '' });
        localStorage.setItem('store', JSON.stringify(store));
    };

    const handleClear = () => {
        setStore([]);
        localStorage.clear();
    };
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
    return (
        <DefaultLayout>
            <Tabs tabs={tabs} />
                <div className={styles['user-info-container']}>
                    <div className={styles['user-info-card']}>
                        <div className={styles['user-info-header']}>
                            <h2>User Information</h2>
                        </div>
                        <div className={styles['user-info-content']}>
                            <div className={styles['user-info-item']}>
                                <span>Name:</span>
                                <p>John Doe</p>
                            </div>
                            <div className={styles['user-info-item']}>
                                <span>Email:</span>
                                <p>johndoe@example.com</p>
                            </div>
                            <div className={styles['user-info-item']}>
                                <span>Phone:</span>
                                <p>555-555-5555</p>
                            </div>
                            <div className={styles['user-info-item']}>
                                <span>Address:</span>
                                <p>123 Main St, Anytown USA</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setModal(true)} type="submit">Lengkapi Data Diri Anda</button>
                </div>

            {/* Modal */}

            {isModal && (
                <div className={styles["overlay"]}>
                    <div className={styles["modal"]}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                        <button onClick={() => setModal(false)}>Close Modal</button>
                    </div>
                </div>
            )}

        </DefaultLayout>
    )
}
