## 1.0.2 (2018-10-20)

Bug Fixes

- Further improve hardiness of key escaping leveraging `JSON.stringify` quoting behavior, avoiding remaining potential for runtime errors.

## 1.0.1 (2018-10-20)

Bug Fixes

- Protect against escaped evil escaping.

**A note on security:** Turbo Combine Reducers uses `new Function` dynamic function evaluation (i.e. an `eval` equivalent) to pre-compile the state value reducer. The risk surface area is limited to reducer property names. Most applications will never (and _should never_) include a dynamic, user-input value as a reducer key and thus would not be exposed to any risk, including in prior releases. The changes in this release more aggressively sanitize reducer keys to offer protection even in the limited use-case where an unsafe user-input reducer key would be intended to be used.

## 1.0.0 (2018-10-20)

- Initial release
