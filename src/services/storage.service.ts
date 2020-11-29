export abstract class StorageService {
    static readonly token = 'authorization_token';

    static init() {
        localStorage.setItem(StorageService.token, 'wrongToken');
    }

    static set(key: string, value: string): void {
        localStorage.setItem(key, value)
    }

    static get(key: string): string | null {
        return localStorage.getItem(key);
    }
}
