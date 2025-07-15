import { act, render, screen } from '@testing-library/react';

import { Product } from '@/lib/types';
import { CartProvider, useCart } from '@/components/cart/CartProvider';

const TestComponent = () => {
	const {
		cart,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		totalItems,
		totalPrice,
	} = useCart();

	const testProduct: Product = {
		id: 1,
		title: 'Test Product',
		price: 10.99,
		description: 'Test description',
		category: 'test',
		image: 'test.jpg',
		rating: { rate: 4.5, count: 100 },
	};

	return (
		<div>
			<button onClick={() => addToCart(testProduct)}>Add to Cart</button>
			<button onClick={() => removeFromCart(1)}>Remove from Cart</button>
			<button onClick={() => updateQuantity(1, 2)}>Update Quantity</button>
			<button onClick={clearCart}>Clear Cart</button>
			<div data-testid="cart">{JSON.stringify(cart)}</div>
			<div data-testid="totalItems">{totalItems}</div>
			<div data-testid="totalPrice">{totalPrice}</div>
		</div>
	);
};

describe('CartProvider', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('provides initial empty cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		expect(screen.getByTestId('cart')).toHaveTextContent('[]');
		expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
	});

	it('adds a product to cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		act(() => {
			screen.getByText('Add to Cart').click();
		});

		expect(screen.getByTestId('cart')).toHaveTextContent(
			JSON.stringify([
				{
					id: 1,
					title: 'Test Product',
					price: 10.99,
					description: 'Test description',
					category: 'test',
					image: 'test.jpg',
					rating: { rate: 4.5, count: 100 },
					quantity: 1,
				},
			]),
		);
		expect(screen.getByTestId('totalItems')).toHaveTextContent('1');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('10.99');
	});

	it('updates product quantity', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		act(() => {
			screen.getByText('Add to Cart').click();
			screen.getByText('Update Quantity').click();
		});

		expect(screen.getByTestId('cart')).toHaveTextContent(
			JSON.stringify([
				{
					id: 1,
					title: 'Test Product',
					price: 10.99,
					description: 'Test description',
					category: 'test',
					image: 'test.jpg',
					rating: { rate: 4.5, count: 100 },
					quantity: 2,
				},
			]),
		);
		expect(screen.getByTestId('totalItems')).toHaveTextContent('2');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('21.98');
	});

	it('removes a product from cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		act(() => {
			screen.getByText('Add to Cart').click();
			screen.getByText('Remove from Cart').click();
		});

		expect(screen.getByTestId('cart')).toHaveTextContent('[]');
		expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
	});

	it('clears the cart', () => {
		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		act(() => {
			screen.getByText('Add to Cart').click();
			screen.getByText('Clear Cart').click();
		});

		expect(screen.getByTestId('cart')).toHaveTextContent('[]');
		expect(screen.getByTestId('totalItems')).toHaveTextContent('0');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('0');
	});

	it('loads cart from localStorage', () => {
		const testCart = [
			{
				id: 1,
				title: 'Test Product',
				price: 10.99,
				description: 'Test description',
				category: 'test',
				image: 'test.jpg',
				rating: { rate: 4.5, count: 100 },
				quantity: 1,
			},
		];
		localStorage.setItem('cart', JSON.stringify(testCart));

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>,
		);

		expect(screen.getByTestId('cart')).toHaveTextContent(JSON.stringify(testCart));
		expect(screen.getByTestId('totalItems')).toHaveTextContent('1');
		expect(screen.getByTestId('totalPrice')).toHaveTextContent('10.99');
	});
});
