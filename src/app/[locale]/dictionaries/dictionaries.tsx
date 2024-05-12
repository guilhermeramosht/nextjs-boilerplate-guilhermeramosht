import 'server-only'

type Dictionary = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (namespace: string) => Promise<any>
}

const dictionaries: Dictionary = {
  pt: (namespace) =>
    import(`./pt/${namespace}.json`).then((module) => module.default),
  en: (namespace) =>
    import(`./en/${namespace}.json`).then((module) => module.default)
}

export const getDictionary = async (locale: string, namespace = 'common') =>
  dictionaries[locale](namespace)
