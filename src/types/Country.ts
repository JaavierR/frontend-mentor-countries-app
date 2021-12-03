interface Flags {
    png: string
    svg: string
}

interface CountryName {
    common: string
    official: string
}

interface Country {
    name: CountryName
    flags: Flags
    population: number
    region: string
    capital: string[]
}

export default Country
