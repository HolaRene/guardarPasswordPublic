import { createUploadthing, type FileRouter } from 'uploadthing/next'
const f = createUploadthing()
const handleAuth = async () => {
  return {}
}

export const outFileRouter = {
  profileImage: f({
    image: { maxFileSize: '4MB', maxFileCount: 1 },
  })
    .middleware(async ({}) => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter

export type OutFileRouter = typeof outFileRouter
