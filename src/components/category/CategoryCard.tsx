import { normalizeCategoryName } from '@/lib/utils';
import Link from 'next/link';

export function CategoryCard({ categoryName }: { categoryName: string }) {
	return (
		<Link href={`/${categoryName}`}>
			<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
				<div className="p-6">
					<h3 className="text-xl font-semibold text-gray-800 capitalize">
						{normalizeCategoryName(categoryName)}
					</h3>
				</div>
			</div>
		</Link>
	);
}
