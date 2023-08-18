/**
 * Use `isMaybeObject` as a _type guard_ helper.
 *
 * @example
 *
 * ```ts
 * type Foo = { bar: boolean }
 *
 * const isFoo = (arg: unknown): arg is Foo => {
 * 	if (isMaybeObject<Foo>(arg)) return false
 * 	const { bar } = arg
 * 	return typeof bar === "boolean"
 * }
 * ```
 */
export const isMaybeObject = <T extends object>(
	arg: unknown
): arg is {
	[K in keyof T]: unknown
} => typeof arg === "object" && arg !== null && !Array.isArray(arg)

export const objectTypeGuard =
	<T extends object>(check: (obj: { [K in keyof T]: unknown }) => boolean) =>
	(arg: unknown): arg is T =>
		isMaybeObject<T>(arg) && check(arg)

/**
 * Helper to create a type guard for a literal type.
 *
 * @example
 *
 * ```ts
 * // Define a literal type.
 * export const myItems = ["foo", "bar"] as const
 * export type MyItem = (typeof myItems)[number]
 *
 * // Then create a type guard.
 * export const isMyItem = isLiteralType<MyItem>(myItems)
 * ```
 */
export const isLiteralType =
	<Type>(list: readonly string[]) =>
	(arg: unknown): arg is Type =>
		typeof arg === "string" && list.includes(arg)
