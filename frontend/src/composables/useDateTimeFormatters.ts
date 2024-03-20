export function useDateTimeFormatters(
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    second: "2-digit",
    year: "numeric",
  },
) {
  const { day, hour, minute, month, second, year } = options;
  const dateTimeFormatter = new Intl.DateTimeFormat(locale, options);
  const dateFormatter = new Intl.DateTimeFormat(locale, { day, month, year });
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour,
    minute,
    second,
  });
  return { dateFormatter, dateTimeFormatter, timeFormatter };
}
