interface Flags {
    png: string
    svg: string
}

interface Currency {
    name: string
    symbol: string
}

interface NameDefinitions {
    common: string
    official: string
}

interface CountryName extends NameDefinitions {
    nativeName: { [key: string]: NameDefinitions }
}

interface Country {
    name: CountryName
    flags: Flags
    population: number
    region: string
    subregion: string
    capital: string[]
    tld: string[]
    languages: { [key: string]: string }
    currencies: { [key: string]: Currency }
    borders: string[]
    cca3: string
}

export default Country
