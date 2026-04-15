/**
 * Nitro plugin: strip `zstd` from Accept-Encoding for outgoing HTTP(S) requests.
 *
 * Problem: Bun's native fetch advertises `Accept-Encoding: gzip, deflate, br, zstd`.
 * On Fly.io, the CDN/proxy happily returns `Content-Encoding: zstd`, but Bun's
 * zstd decompressor fails with ZstdDecompressionError on certain responses.
 *
 * The symptom is a 500 on every page load because the Nitro ssrRenderer calls
 * `fetch(req, { viteEnv: "ssr" })` which should route to the internal SSR service
 * but can fall through to Bun's native fetch making a real HTTPS request to itself.
 *
 * Fix: intercept all external HTTP(S) fetch calls and replace the Accept-Encoding
 * header with one that excludes zstd.
 */
export default function () {
  const _fetch = globalThis.fetch

  globalThis.fetch = function (
    input: RequestInfo | URL,
    init?: RequestInit & { viteEnv?: string },
  ) {
    // Leave internal Nitro vite-env routing untouched (ssrRenderer uses this flag)
    if ((init as any)?.viteEnv) return _fetch(input, init as RequestInit)

    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
          ? input.toString()
          : input instanceof Request
            ? input.url
            : null

    // Only patch actual outgoing HTTP(S) requests
    if (url && /^https?:\/\//.test(url)) {
      const existingHeaders =
        input instanceof Request
          ? input.headers
          : (init as RequestInit | undefined)?.headers

      const headers = new Headers(existingHeaders ?? {})
      const ae = headers.get("accept-encoding")

      if (!ae || ae.toLowerCase().includes("zstd")) {
        headers.set("accept-encoding", "gzip, deflate, br")
      }

      if (input instanceof Request) {
        return _fetch(new Request(input, { ...(init as RequestInit), headers }))
      }
      return _fetch(input, { ...(init as RequestInit), headers })
    }

    return _fetch(input, init as RequestInit)
  }
}
