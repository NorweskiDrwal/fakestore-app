'use client';

import { CartBreadcrumb } from '@/components/cart/CartBreadcrumb';
import { useCart } from '@/components/cart/CartProvider';

import { Button } from '@/components/ui/Button';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

export default function CartPage() {
	const router = useRouter();
	const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

	if (cart.length === 0) {
		return (
			<div className="text-center py-12">
				<h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
				<p className="text-gray-600 mb-6">
					Looks like you haven't added any items to your cart yet.
				</p>
				<Button onClick={() => router.push('/')}>Continue Shopping</Button>
			</div>
		);
	}

	return (
		<div>
			<CartBreadcrumb />
			<div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
				<div className="divide-y divide-gray-200">
					{cart.map((item) => (
						<div key={item.id} className="p-4 flex flex-col sm:flex-row">
							<div className="flex-shrink-0 mr-4">
								<Image
									width={96}
									height={96}
									src={item.image}
									alt={item.title}
									className="h-24 w-24 object-contain"
								/>
							</div>
							<div className="flex-grow">
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="text-indigo-600 font-bold">${item.price}</p>
								<div className="mt-2 flex items-center">
									<label htmlFor={`quantity-${item.id}`} className="mr-2">
										Qty:
									</label>
									<select
										id={`quantity-${item.id}`}
										value={item.quantity}
										onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
										className="border rounded-md p-1"
									>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
											<option key={num} value={num}>
												{num}
											</option>
										))}
									</select>
									<Button
										onClick={() => removeFromCart(item.id)}
										variant="destructive"
										className="ml-4"
									>
										Remove
									</Button>
								</div>
							</div>
							<div className="mt-4 sm:mt-0 sm:ml-auto">
								<p className="text-lg font-semibold">
									${(item.price * item.quantity).toFixed(2)}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="p-4 bg-gray-50 border-t border-gray-200">
					<div className="flex justify-between items-center">
						<div>
							<h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
						</div>
						<div className="space-x-2">
							<Button onClick={clearCart} variant="destructive">
								Clear Cart
							</Button>
							<Button>Checkout</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
