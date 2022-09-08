import type { ReactNode } from 'react'

import Navbar from './navbar'
import Footer from './footer'
import { toCSSObject } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  // ✍️ create the custom layout
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
