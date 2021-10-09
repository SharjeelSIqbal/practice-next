import { useRouter } from 'next/router';
const article = (props) => {
  const router = useRouter();
  const {id} = router.query
  return <div>This is an article {id}</div>
}

export default article;
