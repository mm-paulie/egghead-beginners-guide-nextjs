import { GetStaticProps, GetStaticPaths } from 'next'

type Props = {
  genre: string
}

const Genre = ({ genre }: Props) => {
  return <p>{genre}</p>
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      genre: 'rock'
    }
  }
}
export default Genre