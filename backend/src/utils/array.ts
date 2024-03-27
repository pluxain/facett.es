/**
 * credits @see https://fettblog.eu/typescript-array-includes/
 * @param items bag of possible values
 * @param item a possible value to validate
 * @returns true if item is contained in values
 */
export function includes<T extends U, U>(
  items: ReadonlyArray<T>,
  item: U,
): item is T {
  return items.includes(item as T);
}
