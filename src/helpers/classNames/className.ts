export function classNames(cls: string, mods: Record<string, boolean>, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}

