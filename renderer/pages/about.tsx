import Link from 'next/link'
import Layout from '../components/Layout'

import { initializeStore } from '../store'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export async function getStaticProps() {
  const store = initializeStore()

  return {
    props: {},
  }
}

export default AboutPage
