import { PrismaClient } from '@prisma/client'
// Create a global PrismaClient instance
declare global {
  var prisma: PrismaClient | undefined
}

// Import and export the PrismaClient instance
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') globalThis.prisma = db
