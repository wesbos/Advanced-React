import { FC } from 'react';
import Link from 'next/link';
import Items from '../components/Items';

export interface HomeProps {
  props: any;
}

const Home: FC<HomeProps> = props => {
  return (
    <>
      <p>Home</p>
      <Items />
    </>
  )
}
export default Home;