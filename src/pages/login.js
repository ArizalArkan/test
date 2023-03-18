import DefaultLayout from '@/pages/containers/DefaultLayout'
import styles from '@/styles/Login.module.css'

export default function Login() {
    return (
        <DefaultLayout>
            <div className={styles['login-container']}>
                <h1>Login</h1>
                <form>
                    <div className={styles['input-field']}>
                        <input type="text" id="username" required />
                        <label for="username">Username</label>
                    </div>
                    <div className={styles['input-field']}>
                        <input type="password" id="password" required />
                        <label for="password">Password</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </DefaultLayout>
    )
}
