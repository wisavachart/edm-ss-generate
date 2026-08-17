# Multi-stage build for Vite React App
FROM node:18-alpine as build
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Vite app (จะสร้าง dist folder)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy dist folder จาก build stage (Vite ใช้ dist ไม่ใช่ build)
COPY --from=build /app/dist /usr/share/nginx/html

# Config nginx for SPA
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]