# Install dependencies only when needed
FROM node:alpine3.17 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile

# Build the app with cache dependencies
FROM node:alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN nest build


# Production image, copy all the local and run next
FROM node:alpine3.17 AS runner

# Set working directory
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY --from=builder /app/dist ./dist

# # Copiar el directorio y su contenido
RUN mkdir -p ./chatgpt_telegram_bot

COPY --from=builder ./app/dist/ ./app
#COPY ./.env ./app/.env

# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password chatgpt_telegram_bot
RUN chown -R chatgpt_telegram_bot:chatgpt_telegram_bot ./chatgpt_telegram_bot
USER chatgpt_telegram_bot

EXPOSE 3000

CMD [ "node","dist/main" ]