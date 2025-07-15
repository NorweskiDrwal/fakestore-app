import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

jest.mock('@/api/getAllCategories', () => ({
	getAllCategories: jest.fn(() =>
		Promise.resolve(['electronics', 'jewelery', "men's clothing", "women's clothing"]),
	),
}));

describe('Home', () => {
	it('renders categories', async () => {
		const jsx = await Home();
		render(jsx);

		expect(screen.getByText('Electronics')).toBeInTheDocument();
		expect(screen.getByText('Jewelery')).toBeInTheDocument();
		expect(screen.getByText("Men's Clothing")).toBeInTheDocument();
		expect(screen.getByText("Women's Clothing")).toBeInTheDocument();
	});
});
