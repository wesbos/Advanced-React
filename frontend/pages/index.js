import Items from '../components/Items';

const Home = props => {
  const page = parseInt(props.query.page) || 1;
  console.log(props);
  return <Items page={page} />
}

export default Home;
