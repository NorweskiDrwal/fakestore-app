import type { Product } from '@/lib/types';
import { fetcher, withBaseURL } from '@/lib/utils';

export default function getAllProducts() {
	return fetcher<Product[]>(withBaseURL('/products'));
}
