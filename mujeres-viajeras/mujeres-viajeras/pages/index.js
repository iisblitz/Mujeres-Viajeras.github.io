import Head from 'next/head'
import {Homepage} from '../src/components/Homepage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mujeres Viajeras</title>
        <meta name="description" content="Proyecto portafolio, implementación full stack con next js y mongodb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage></Homepage>
    </>
  )
}
