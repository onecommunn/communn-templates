# 1. Base image with Node.js and dependencies
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Copy only package.json and lock file first to install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the app
COPY . .

# 6. Build the app for production
RUN npm run build

# 7. Production image
FROM node:18-alpine AS runner

# 8. Set working directory
WORKDIR /app

# 9. Copy built app and dependencies from build stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/package.json ./package.json

# 10. Expose the Next.js default port
EXPOSE 3000

# 11. Start the app
CMD ["npm", "start"]