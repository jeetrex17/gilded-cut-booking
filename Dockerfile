# Multi-stage build for Vite + React app

# 1) Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better layer cache)
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy the rest of the source and build
COPY . .
RUN npm run build

# 2) Runtime stage - serve static files with Nginx
FROM nginx:alpine AS runtime

# Replace default site with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx listens on 80 by default
EXPOSE 80

# Use the default nginx startup command
CMD ["nginx", "-g", "daemon off;"]

