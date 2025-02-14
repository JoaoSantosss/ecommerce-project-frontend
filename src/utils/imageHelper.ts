export function getImageUrl(path: string): string {
    return new URL(`../assets/images/${path}`, import.meta.url).href
} 