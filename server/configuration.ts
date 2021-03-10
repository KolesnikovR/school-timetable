import config from './json/config.json';

export default class Configuration {
    public static getUserDefaultPhoto(): string {
        return config.defaultUserPhoto;
    }

    public static getWorkingDaysCount(): number {
        return config.workingDaysCount;
    }

    public static getLessonsPerDay(): number {
        return config.maxLessonsPerDay;
    }

    public static getAppPort(): string {
        return config.app.port;
    }
}