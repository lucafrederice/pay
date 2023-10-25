export const createQueryString =
    (name: string, value: string, searchParams: any) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)

        return params.toString()
    }

export const removeQueryString = (name: string, searchParams: any) => {
    const params = new URLSearchParams(searchParams)
    params.delete(name)

    return params.toString()
}