import {useRouter} from 'next/router'

const Comment = () => {
  const router = useRouter();
  console.log(router.query);

  return <p>{router.query.pid} {router.query.comment}</p>
}

export default Comment;