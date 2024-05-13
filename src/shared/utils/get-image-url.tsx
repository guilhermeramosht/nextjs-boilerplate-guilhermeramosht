export const getImageUrl = (imageKey: string) =>
  `${process.env.NEXT_PUBLIC_BUCKET_URL}${imageKey}`
