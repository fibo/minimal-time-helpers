import { Interval } from "./interval.js"
import { objectTypeGuard } from "./type-utils.js"

export const isInvalidDate = (arg: Date) =>
	arg instanceof Date && arg.toString() === "Invalid Date"

export type DateInterval = Interval<Date>
export const isDateInterval = objectTypeGuard<DateInterval>(
	({ start, end }) =>
		start instanceof Date &&
		!isInvalidDate(start) &&
		end instanceof Date &&
		!isInvalidDate(end) &&
		start <= end
)
