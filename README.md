# eslint-plugin sn Tester

## Description
External tests for ESLint plugin @admc.com/eslint-plugin-sn

## Installation
```
    npm i @admc.com/sn
```

## Setup
```
    npm run setup
```

## Execute tests
```
    npm test
```

## Development
To develop tests for eslint-plugin-sn changes that aren't yet published, you can use the npm
link (non-global) link feature, but this has side-effects since the intermediate links is set up
at a shared location on your computer.
Less invasive is to just manually wipe the subdirectory node_modules/@admc.com/eslint-plugin-sn/
and replace it with a symlink (or copy) of the development eslint-plugin-sn project directory.
Be aware that "npm update" will wipe the sym link and replace it with what is found from a
regular module resolution.
