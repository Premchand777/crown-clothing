import './categoriesDirectory.styles.scss';
import CategoryItem from './categoryItem/categoryItem.component';

const CategoriesDirectory = ({ categories }) => {
  return (
    <div className='categories-container'>
      {
        categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>
  );
}

export default CategoriesDirectory;