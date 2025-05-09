# Étape 1 : build de l'application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 🔥 Ajout de cette ligne avant la build
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Étape 2 : serveur Nginx
FROM nginx:alpine AS production

# Copie des fichiers de build dans nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Optionnel : configuration nginx personnalisée
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
