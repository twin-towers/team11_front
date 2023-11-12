export const clearEmpty = <A>(body: Record<string, A>) => Object.fromEntries(Object.entries(body).filter(([, value]) => value !== ''));
