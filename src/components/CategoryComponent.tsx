import * as React from 'react';

// Define the Hobby interface
interface Category {
  name: string;
}

// Define the props interface for HobbyComponent
interface CategoryComponentProps {
  category: Category;
}

// HobbyComponent accepts a single hobby as a prop and displays its content
const CategoryComponent: React.FC<CategoryComponentProps> = ({ category }) => {
  return (
    <>
      <span>★{category.name} </span>
    </>
  );
};

export default CategoryComponent;
