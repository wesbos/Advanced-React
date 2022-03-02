import ItemStyles from './styles/ItemStyles';

export default function Product({ product }) {
  const { name } = product;

  // WENT TO SLEEP - STOOD AT 17:40 on the video number 20
  return <ItemStyles>{name}</ItemStyles>;
}
