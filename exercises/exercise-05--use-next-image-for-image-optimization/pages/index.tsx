import Image from 'next/image'

import lazar from '../lazar.png'

const TWITTER_IMG_URL = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png'

const Home = () => {
  return (
    <>
    <Image src={lazar} alt='Lazar Nikolov'/>
    <Image src={TWITTER_IMG_URL} alt="Lazar Nikolov Twitter" width="300" height="250"/>
    </>
  )
}

export default Home
