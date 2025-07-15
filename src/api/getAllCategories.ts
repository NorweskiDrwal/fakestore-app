import { fetcher, withBaseURL } from '@/lib/utils';

export function getAllCategories() {
	return fetcher<string[]>(withBaseURL(`/products/categories`));
}
