import { PrismaClient } from '@prisma/client'

// Evita crear múltiples instancias en desarrollo
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const db = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = db
