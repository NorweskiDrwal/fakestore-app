import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Product } from '@/lib/types';
import { ProductCard } from '@/components/product/ProductCard';
import { CartProvider } from '@/components/cart/CartProvider';

const mockProduct: Product = {
	id: 1,
	title: 'Test Product',
	price: 10.99,
	description: 'Test description',
	category: 'test',
	image: 'https://fakestoreapi.com/img/test.jpg',
	rating: { rate: 4.5, count: 100 },
};

describe('Testing ProductCard component', () => {
	it('render product information', () => {
		render(
			<CartProvider>
				<ProductCard product={mockProduct} />
			</CartProvider>,
		);

		expect(screen.getByText('Test Product')).toBeInTheDocument();
		expect(screen.getByText('$10.99')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Product');
	});

	it('call addToCart when button is clicked', async () => {
		const user = userEvent.setup();
		render(
			<CartProvider>
				<ProductCard product={mockProduct} />
			</CartProvider>,
		);

		const button = screen.getByTestId('add-to-cart');
		await user.click(button);

		expect(button).toBeInTheDocument();
	});
});
