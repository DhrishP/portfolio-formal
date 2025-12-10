export interface LoomOembedResponse {
  type: string;
  version: string;
  title: string;
  author_name: string;
  author_url: string;
  provider_name: string;
  provider_url: string;
  thumbnail_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  html: string;
  width: number;
  height: number;
  duration: number; // in seconds
}

export async function fetchLoomMetadata(url: string): Promise<LoomOembedResponse | null> {
  // Check if it's a real Loom URL to avoid unnecessary 404s on mock data
  if (!url.includes("loom.com/share")) return null;

  try {
    const response = await fetch(`https://www.loom.com/v1/oembed?url=${url}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Error fetching Loom metadata:", error);
    return null;
  }
}

export function formatDuration(seconds: number): string {
  const roundedSeconds = Math.round(seconds);
  const m = Math.floor(roundedSeconds / 60);
  const s = roundedSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

