import Head from 'next/head'
import { ChakraProvider, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta name="og:title" content="My next.js course" key="title"/>
      </Head>
      <Head>
        <meta name="og:title" content="My awesome next.js course" key="title2"/>
      </Head>
      <Heading w="full" textAlign="center">
        This is our homepage content!
      </Heading>
    </ChakraProvider>
  )
}
export default Home
