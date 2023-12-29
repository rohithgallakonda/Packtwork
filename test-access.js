import { RequestHook } from "testcafe";
import {config} from 'dotenv'

config()

export class stagingRequestHook extends RequestHook {
    constructor (requestFilterRules, responseEventConfigureOpts) {
        super(requestFilterRules, responseEventConfigureOpts);
    }
    
    async onRequest (e) {
        e.requestOptions.headers['X-Test-Key'] = process.env.STAGING_ACCESS_KEY;
    }

    async onResponse (e) {}
}