export function getImageUrl(path: string): string {
    return new URL(`../assets/image/${path}`, import.meta.url).href
} 