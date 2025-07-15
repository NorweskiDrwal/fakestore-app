import type { Product } from '@/lib/types';
import { fetcher, withBaseURL } from '@/lib/utils';

export function getAllProducts() {
	return fetcher<Product[]>(withBaseURL('/products'));
}
