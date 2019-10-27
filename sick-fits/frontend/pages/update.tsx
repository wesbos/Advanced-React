import { FC } from 'react';
import Link from 'next/link';
import UpdateItem from '../components/UpdateItem';

export interface UpdateProps extends Element {
  query: {
    id: string
  }
}

const Update = ({ query }: any) => {
  return (
    <>
      <p>Update</p>
      <Link href="/"><a>Home</a></Link>
      <UpdateItem id={query.id} />
    </>
  )
}

export default Update;
