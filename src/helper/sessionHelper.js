export function setItem(key, value) {
    localStorage.setItem(key, value);
}

export function getItem(key) {
    return localStorage.getItem(key);
}

export function setUserDetail(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export function getUserDetail() {
    return JSON.parse(localStorage.getItem("user"));
}

export function removeSession() {
    localStorage.clear();
    window.location.href = "/";
}
