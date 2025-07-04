# Base image is a Linux distribution with Node.js installed.
FROM node:alpine

# Get server contents into Docker image
COPY package.json package-lock.json package*.json LICENSE README.md ./
COPY src ./src/

# Install dependencies into the Docker image
RUN npm install

# Tell the image what to run when it starts.
CMD ["npm", "run", "start"]

# Expose the port that the server runs on.
EXPOSE 3000