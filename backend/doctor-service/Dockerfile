# Use Node 18 Alpine base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies (include nodemon globally for dev)
RUN npm install -g nodemon
RUN npm install

# Copy rest of the files
COPY . .

# Expose the service port
EXPOSE 5002

# Start the service
CMD ["node", "server.js"]
