import dompurify from 'dompurify'

export function sanitize(text: string): string {
  const sanitizer = dompurify.sanitize

  return sanitizer(text, {
    ALLOWED_TAGS: ['span', 'br'],
    ALLOWED_ATTR: ['class'],
  })
}
