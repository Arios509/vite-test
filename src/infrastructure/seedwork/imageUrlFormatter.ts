function imageUrlFormatter(url: string) {
    return new URL(`/src/${url}`, import.meta.url).href
}

export { imageUrlFormatter }