import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// next js 13 hot reloading will replace prisma client
// recommended for next 13+
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
