import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();
  return <h1>Category: {categoryName}</h1>;
}

export default CategoryPage;
