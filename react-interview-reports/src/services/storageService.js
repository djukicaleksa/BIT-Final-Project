class StorageService {
    setSession(key, value) {
        sessionStorage.setItem(key, value)
    }
    getSession(key) {
        return sessionStorage.getItem(key)
    }
}

export const storageService = new StorageService();