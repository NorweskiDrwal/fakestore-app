import { ProductList } from '@/components/product/ProductList';
import getProductsByCategory from '@/api/getProductsByCategory';
import { CategoryBreadcrumb } from '@/components/category/CategoryBreadcrumb';

export default async function CategoryPage({
	params,
}: {
	params: Promise<{ categoryName: string }>;
}) {
	const { categoryName } = await params;
	const products = await getProductsByCategory(categoryName);

	return (
		<div>
			<CategoryBreadcrumb selectedCategory={categoryName} />
			<p className="text-gray-600 mt-2 mb-8">{products?.length} products available</p>

			<ProductList products={products} />
		</div>
	);
}
