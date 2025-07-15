import type { Product } from '@/lib/types';
import { fetcher, withBaseURL } from '@/lib/utils';

export function getProductsByCategory(categoryName: string) {
	return fetcher<Product[]>(withBaseURL(`/products/category/${categoryName}`));
}
