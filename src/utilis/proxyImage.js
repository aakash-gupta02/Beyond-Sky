export function proxyImage(url) {
  if (!url) return "/fallback.jpg"; // optional fallback
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=800&h=600&fit=cover`;
}
