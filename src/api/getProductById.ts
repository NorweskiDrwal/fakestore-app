import type { Product } from '@/lib/types';
import { fetcher, withBaseURL } from '@/lib/utils';

export function getProductById(productId: string) {
	return fetcher<Product>(withBaseURL(`/products/${productId}`));
}
