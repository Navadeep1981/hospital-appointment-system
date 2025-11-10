# Use Node.js 18 Alpine as base
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Expose the port
EXPOSE 5003

# Start the app
CMD ["node", "server.js"]
