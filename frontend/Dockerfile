# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Only copy package files to cache dependencies
COPY package*.json ./

# Install deps
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the static files
RUN npm run build

# Stage 2: Serve with a lightweight image
FROM node:20-alpine

# Install 'serve' globally
RUN npm install -g serve

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only built files
COPY --from=builder /app/dist ./dist

USER appuser

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]
