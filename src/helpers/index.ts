export const numberToI18n = (value: number, locale: string): string => {
    return Intl.NumberFormat(locale).format(value)
}
