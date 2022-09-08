import type { GetStaticProps } from 'next'
import type { GetStaticPaths } from 'next'

type Props = {
  genre: string
}

const Genre = ({ genre }: Props) => {
  return <p>{genre}</p>
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['rock', 'country', 'pop'].map((genre) => ({ params: { genre } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genre = context.params?.['genre'] as string

  console.log('FETCHING DATA IN GET STATIC PROPS')

  if (!genre) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      genre
    },
    revalidate: 5
  }
}

export default Genre
