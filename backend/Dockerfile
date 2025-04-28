# Stage 1: Build dependencies
FROM node:20-alpine AS builder

WORKDIR /app

# Only copy necessary files first to leverage Docker layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy the rest of the app
COPY . .

# Stage 2: Run app in a minimal runtime image
FROM node:20-alpine

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app /app

# Use non-root user
USER appuser

EXPOSE 5000

CMD ["node", "src/app.js"]
