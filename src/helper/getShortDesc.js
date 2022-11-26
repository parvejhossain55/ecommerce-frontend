export function getShortDesc(text) {
    return text.split(' ').slice(0, 100).join(' ')
}