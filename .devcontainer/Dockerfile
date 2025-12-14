FROM node:18-bullseye-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends git ca-certificates curl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

USER node

CMD ["sleep", "infinity"]
