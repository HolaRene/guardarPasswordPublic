import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react'

import type { OutFileRouter } from '@/app/api/uploadthing/core'

export const UploadButton = generateUploadButton<OutFileRouter>()
export const UploadDropzone = generateUploadDropzone<OutFileRouter>()
