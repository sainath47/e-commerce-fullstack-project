# =========================
# 1️⃣ Build stage
# =========================
FROM node:20-alpine AS build

# Avoid running as root later
WORKDIR /app

# Copy only dependency files first (cache optimization)
COPY package.json package-lock.json ./

# Deterministic, clean install
RUN npm ci

# Copy application source
COPY . .

# Optional: build step (TypeScript / Prisma / etc.)
# RUN npm run build

# =========================
# 2️⃣ Runtime stage
# =========================
FROM node:20-alpine

# Create non-root user (SECURITY – very important)
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

# Copy only what is required at runtime
COPY --from=build /app ./

# Use non-root user
USER app

# App port
EXPOSE 8000

# Healthcheck for Docker & orchestration
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8000/', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Start backend
CMD ["npm", "start"]
