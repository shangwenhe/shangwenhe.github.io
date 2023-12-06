## 概要



```bash
npm stop [-- <args>]
```

## 描述

This runs a predefined command specified in the "stop" property of a package's "scripts" object.

Unlike with [npm start](https://docs.npmjs.com/cli/v7/commands/npm-start), there is no default script that will run if the `"stop"` property is not defined.

## `example`



```json
{
  "scripts": {
    "stop": "node bar.js"
  }
}
```



```bash
npm stop

> npm@x.x.x stop
> node bar.js

(bar.js output would be here)
```

## `configuration`

## `ignore-scripts`

- Default: false
- Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as `npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script` will still run their intended script if `ignore-scripts` is set, but they will *not* run any pre- or post-scripts.

## `script-shell`

- Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
- Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm init <pkg>` commands.
