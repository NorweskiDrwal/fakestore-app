'use client';

import Link from 'next/link';
import { CartIcon } from '../cart/CartIcon';
import { usePathname } from 'next/navigation';

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					FakeStore
				</Link>
				{!pathname.endsWith('/cart') && (
					<div className="flex items-center space-x-4 text-2xl">
						<CartIcon />
					</div>
				)}
			</div>
		</nav>
	);
}
