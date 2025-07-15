'use client';

import Image from 'next/image';

import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/components/cart/CartProvider';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import {
	Card,
	CardTitle,
	CardFooter,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/Card';

export function ProductCard({ product }: { product: Product }) {
	const { addToCart } = useCart();

	return (
		<Card className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
			<div>
				<CardHeader className="p-0 pb-4">
					<div className="relative h-48 w-full">
						<Image
							fill
							src={product.image}
							alt={product.title}
							className="object-contain p-4"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</CardHeader>
				<CardContent className="space-y-2">
					<CardTitle className="text-lg">{product.title}</CardTitle>
					<Tooltip>
						<TooltipTrigger>
							<CardDescription className="line-clamp-2 text-justify">
								{product.description}
							</CardDescription>
						</TooltipTrigger>
						<TooltipContent className="flex flex-wrap max-w-3xs">
							{product.description}
						</TooltipContent>
					</Tooltip>
				</CardContent>
			</div>
			<CardFooter className="flex flex-col">
				<div className="flex justify-between items-center pt-2 w-full">
					<span className="font-bold text-lg">${product.price.toFixed(2)}</span>
					{product.rating && (
						<span className="flex items-center text-sm text-yellow-500">
							★ {product.rating.rate.toFixed(1)}
						</span>
					)}
				</div>
				<Button
					data-testid="add-to-cart"
					className="w-full"
					onClick={() => addToCart(product)}
				>
					Add to Cart
				</Button>
			</CardFooter>
		</Card>
	);
}
