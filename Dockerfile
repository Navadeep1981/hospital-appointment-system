# Use Node.js 18 Alpine as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all frontend files
COPY . .

# Install a lightweight static server
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Start the frontend using the static server
CMD ["serve", "-s", "."]
