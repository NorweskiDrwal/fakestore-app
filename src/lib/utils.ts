import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function withBaseURL(path: `/${string}`) {
	const baseURL = process.env.NEXT_API_BASE_URL;
	if (!baseURL) {
		const msg = 'NEXT_API_BASE_URL is not defined in environment variables';
		console.error(msg);
		throw msg;
	}
	return new URL(path, baseURL);
}

export async function fetcher<T>(
	...args: Parameters<typeof fetch>
): Promise<T | undefined> {
	try {
		const result = await fetch(...args);
		if (!result.ok) throw new Error(result.statusText);
		return result.json();
	} catch (error) {
		if (error instanceof Error) {
			console.error('Fetch error:', error.message);
		} else {
			console.error('Fetch error:', error);
		}
	}
}

export function normalizeCategoryName(name: string): string {
	return decodeURIComponent(name)
		.replace(/\s+/g, ' ')
		.replace(/(\b[a-z](?!\s))/g, (p) => p.toUpperCase());
}
