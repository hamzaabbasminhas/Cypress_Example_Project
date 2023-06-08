# Use the official Cypress Docker image as the base image
FROM cypress/browsers:node16.16.0-chrome107-ff107-edge

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci

# Copy the rest of the project files to the container
COPY . .

# Run the Cypress tests
CMD ["npm", "run", "test"]
