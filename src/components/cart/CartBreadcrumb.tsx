import Link from 'next/link';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/Breadcrumb';

export function CartBreadcrumb() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href="/" className="text-2xl font-bold">
							Home
						</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbSeparator />

				<BreadcrumbItem>
					<BreadcrumbPage className="text-2xl font-bold">Your Cart</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
