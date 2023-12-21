# Use the official Node.js image with Alpine Linux
FROM node:alpine

# Set the working directory
WORKDIR /srv/app

# Copy package.json and yarn.lock to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Expose the necessary port
EXPOSE 8000

# Command to run your application
CMD ["npx", "vite"]
