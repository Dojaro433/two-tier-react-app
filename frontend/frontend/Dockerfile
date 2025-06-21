# Stage 1: Build React App
FROM node:18 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: NGINX to serve build
FROM nginx:alpine

# Remove default html
RUN rm -rf /usr/share/nginx/html/*

# Copy custom NGINX config
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built React files
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]

