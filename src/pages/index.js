import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('isLogin')) {
      router.push('/home')
    } else {
      router.push('/home')
    }
  }
}
