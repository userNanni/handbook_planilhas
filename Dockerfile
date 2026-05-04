FROM docker.io/oven/bun:1 AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN SKIP_PRERENDER=true bun run build && \
    find .output -name "bun.mjs" -exec \
      sed -i 's/const server = Bun.serve({/const server = Bun.serve({ maxHeaderSize: 1048576,/' {} \;

FROM docker.io/oven/bun:1-slim AS runner

WORKDIR /app

COPY --from=builder /app/.output ./.output

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

CMD ["bun", ".output/server/index.mjs"]
