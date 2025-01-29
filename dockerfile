#Etape 1: Choix de l'image de base 
FROM node:18

#Etape 2: Création du répertoire de travail
WORKDIR /app

#Etape 3: Copie des fichiers package.json et package-lock.json
COPY package*.json ./
RUN npm install

#Etape 4: Copie des fichiers sources
COPY . .
EXPOSE 3000

#Etape 5: Commande de démarrage
CMD ["npm", "test"]