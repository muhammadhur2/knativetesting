# Use ARG to allow dynamic Node version and script file
ARG NODE_VERSION=16
ARG SCRIPT_FILE="server.js"  # Default file

# Set the base image with specified Node version
FROM node:${NODE_VERSION}-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy function code to the container
COPY . .

# Install dependencies
RUN npm install

# Set default environment variable for namespace
ENV NAMESPACE=hur

# Run the specified file dynamically
CMD ["sh", "-c", "node $SCRIPT_FILE"]


