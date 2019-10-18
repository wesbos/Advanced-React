import { FC } from 'react';
import Link from 'next/link';
import CreateItem from '../components/CreateItem';

export interface SellProps {

}

const Sell: FC<SellProps> = props => {
  return (
    <>
      <p>Sell</p>
      <Link href="/"><a>Home</a></Link>
      <CreateItem />
    </>
  )
}

export default Sell;
