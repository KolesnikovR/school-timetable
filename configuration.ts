import config from './json/config.json';

export default class Configuration {
    public static getUserDefaultPhoto(): string {
        return config.defaultUserPhoto;
    }
}