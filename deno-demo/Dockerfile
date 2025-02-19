# ---- Stage 1: Build with Node.js ----
FROM node:20 AS builder

WORKDIR /app

# Copy files and install dependencies
COPY deno-next /app/

RUN npm install

# ---- Stage 2: Run with Deno ----
FROM denoland/deno:2.1.9

WORKDIR /app

# Copy files from the builder stage
COPY --from=builder /app /app

EXPOSE 3000

CMD ["deno", "run", "dev"]
    