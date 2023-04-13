import winston from 'winston'
import config from 'config'
const {
    AzureApplicationInsightsLogger,
} = require('winston-azure-application-insights')

interface IDebuggerCallback {
    (output: string): void
}

class Logger {
    protected tag: string
    private appInsights: any

    constructor(tag: string) {
        this.tag = tag
        // start logging to application insights if available
        if ('APPINSIGHTS_CONNECTION_STRING' in process.env) {
            this.appInsights = require('applicationinsights')
            this.appInsights
                .setup(process.env.APPINSIGHTS_CONNECTION_STRING)
                .start()
            winston.add(
                new AzureApplicationInsightsLogger({
                    client: this.appInsights.defaultClient,
                })
            )
        } else {
            winston.add(
                new winston.transports.Console({
                    format: winston.format.simple(),
                })
            )
        }
    }

    public info(message: string, callback?: IDebuggerCallback): void {
        const output = `[${this.tag}] ${message}`
        winston.info(output)
        callback && callback(output)
    }

    public warn(message: string, callback?: IDebuggerCallback): void {
        const output = `[${this.tag}] ${message}`
        winston.warn(output)
        callback && callback(output)
    }

    public error(message: string, callback?: IDebuggerCallback): void {
        const output = `[${this.tag}] ${message}`
        winston.error(output)
        callback && callback(output)
    }
}

const logger = new Logger(config.get('name'))
export default logger
