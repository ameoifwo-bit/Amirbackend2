import { createServer } from "./.medusa/server/index.js";

export default {
  async fetch(request, env, ctx) {
    const server = createServer();
    return server(request, env, ctx);
  }
};
