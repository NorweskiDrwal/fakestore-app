import { fetcher, withBaseURL } from '@/lib/utils';

export default function getAllCategories() {
	return fetcher<string[]>(withBaseURL(`/products/categories`));
}
