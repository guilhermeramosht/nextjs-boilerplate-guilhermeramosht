export const locales = ['pt', 'en']

export const i18n = {
  defaultLocale: 'pt',
  locales
} as const

export type Locale = (typeof i18n)['locales'][number]
