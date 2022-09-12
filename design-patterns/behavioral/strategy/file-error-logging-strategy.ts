import { IErrorLoggingStrategy } from './ierror-logging-strategy';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'logs/error.log');

export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
    log(err: Error): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.appendFile(
                filePath,
                `${err}, Date: ${new Date().toString()}\n`,
                'utf8',
                (error) => {
                    if (error) {
                        console.error('Error Logging failed');
                        reject(error);
                    } else {
                        // @ts-ignore
                        resolve();
                    }
                }
            );
        });
    }
}
