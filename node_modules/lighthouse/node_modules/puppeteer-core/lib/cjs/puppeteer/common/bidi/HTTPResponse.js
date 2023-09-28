"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPResponse = void 0;
const HTTPResponse_js_1 = require("../../api/HTTPResponse.js");
/**
 * @internal
 */
class HTTPResponse extends HTTPResponse_js_1.HTTPResponse {
    #request;
    #remoteAddress;
    #status;
    #statusText;
    #url;
    #fromCache;
    #headers = {};
    #timings;
    constructor(request, responseEvent) {
        super();
        const { response } = responseEvent;
        this.#request = request;
        this.#remoteAddress = {
            ip: '',
            port: -1,
        };
        this.#url = response.url;
        this.#fromCache = response.fromCache;
        this.#status = response.status;
        this.#statusText = response.statusText;
        // TODO: update once BiDi has types
        this.#timings = response.timings ?? null;
        // TODO: Removed once the Firefox implementation is compliant with https://w3c.github.io/webdriver-bidi/#get-the-response-data.
        for (const header of response.headers || []) {
            this.#headers[header.name] = header.value ?? '';
        }
    }
    remoteAddress() {
        return this.#remoteAddress;
    }
    url() {
        return this.#url;
    }
    status() {
        return this.#status;
    }
    statusText() {
        return this.#statusText;
    }
    headers() {
        return this.#headers;
    }
    request() {
        return this.#request;
    }
    fromCache() {
        return this.#fromCache;
    }
    timing() {
        return this.#timings;
    }
    frame() {
        return this.#request.frame();
    }
}
exports.HTTPResponse = HTTPResponse;
//# sourceMappingURL=HTTPResponse.js.map