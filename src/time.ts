import { objectTypeGuard } from "minimal-type-guard-helpers"
import { Interval } from "./interval.js"

/**
 * Epoch time.
 *
 * The number of milliseconds since the
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_ecmascript_epoch_and_timestamps|ECMAScript epoch}.
 */
export type Time = number

export const isTime = (arg: unknown): arg is Time => typeof arg === "number" && Number.isInteger(arg) && arg > 0

export const now = (): Time => new Date().getTime()

export type TimeInterval = Interval<Time>
export const isTimeInterval = objectTypeGuard<TimeInterval>(
	({ start, end }) => isTime(start) && isTime(end) && start <= end
)
