import { Outlet } from 'react-router-dom';
import CategoriesDirectory from '../../components/categoriesDirectory/categoriesDirectory.component';

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    id: 4,
    title: "Women's",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    id: 5,
    title: "Men's",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
  }
];

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoriesDirectory categories={categories} />
    </div>
  );
}

export default Home;
