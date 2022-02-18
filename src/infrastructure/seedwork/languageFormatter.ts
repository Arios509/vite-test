export function languageFormatter(word: string) {
    const title = word ? JSON.parse(word) : [];

    if (title.length <= 0) return "-";

    const selectedLanguage = localStorage.getItem("langId") ? localStorage.getItem("langId") : 1;
    const selectedTitle = title
        .filter((d: any) => d.ltId == selectedLanguage)
        .map((l: any) => l.value);

    return selectedTitle[0];
}
