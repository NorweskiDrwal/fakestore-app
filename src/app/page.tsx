import getAllCategories from '@/api/getAllCategories';
import { CategoryCard } from '@/components/category/CategoryCard';

export default async function Home() {
	const categories = await getAllCategories();

	return (
		<div>
			<h1 className="text-2xl font-bold mb-8">Categories</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories?.map((category) => (
					<CategoryCard key={category} categoryName={category} />
				))}
			</div>
		</div>
	);
}
