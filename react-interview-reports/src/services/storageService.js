class StorageServiceImp {
    set(key, value) {
        const valueToStore = JSON.stringify(value)
        sessionStorage.setItem(key, valueToStore);

        return valueToStore;
    }

    get(key) {
        return JSON.parse(sessionStorage.getItem(key))
    }
}

export const StorageService = new StorageServiceImp();