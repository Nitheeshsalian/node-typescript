/**
 * Define config here for access in whole application
 */
export class Config {

    public static get port(): number {
        return parseInt(process.env["API_PORT"] || process.env["PORT"] || 80);
    }
}