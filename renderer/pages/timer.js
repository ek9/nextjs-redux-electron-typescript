import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startClock, serverRenderClock, initializeStore } from '../store'
import Examples from '../components/examples'
import Link from 'next/link'
import Layout from '../components/Layout'


const Timer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setInterval(() => dispatch(startClock()), 1000)
  }, [dispatch])

  return (
    <Layout title="About | Next.js + TypeScript + Electron Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>

    <Examples />
    </Layout>
  );
}

export async function getStaticProps() {
  const store = initializeStore()
  store.dispatch(serverRenderClock())

  return {
    props: {},
  }
}

export default Timer
