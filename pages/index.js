import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Essa é uma aplicação NextJS</p>
        <p>
          Para ter acesso a esta ferramenta vá para o endereço no link{' '}
          <a href="https://nextjs.org/learn"> NextJS Org</a>.
        </p>
      
      </section>
    </Layout>
  )
}