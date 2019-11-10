FROM node:10-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-prod

FROM node:10-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
