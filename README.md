# Storybook TS example

This Storybook demonstrates support for TypeScript in Storybook without additional configuration.

### Docgen w/ Webpack4

Modifying the `.storybook/main.js` to use `webpack4` and the types for `button.tsx` will show

### Docgen w/ Webpack5

Modifying the `.storybook/main.js` to use `webpack5` and the types for `button.tsx` will disappear due to https://github.com/hipstersmoothie/react-docgen-typescript-plugin/issues/30

### Docgen w/ Webpack5 and Experimental Docgen WP5 support

First build https://github.com/hipstersmoothie/react-docgen-typescript-plugin/pull/33

```sh
cd ..
git clone git@github.com:bebraw/react-docgen-typescript-plugin.git
cd react-docgen-typescript-plugin/
git co feat/update-to-webpack-5
yarn
yarn build
```

Then link it into this project:

```sh
yarn link
cd ../react-ts
yarn link "react-docgen-typescript-plugin"
```

You can verify that `node_modules/react-docgen-typescript-plugin` has been overwritten.

Then running `yarn storybook` results in the following error:

````
70% sealing finish module graph/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/dependencies/HarmonyImportSpecifierDependency.js:156
			moduleGraph.getParentModule(this).buildMeta.strictHarmonyModule
			                                 ^

TypeError: Cannot read property 'buildMeta' of undefined
    at HarmonyImportSpecifierDependency.getWarnings (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/dependencies/HarmonyImportSpecifierDependency.js:156:37)
    at Compilation.reportDependencyErrorsAndWarnings (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/Compilation.js:2451:24)
    at /Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/Compilation.js:2083:10
    at eval (eval at create (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:50:1)
    at /Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/FlagDependencyExportsPlugin.js:332:11
    at /Users/shilman/projects/testing/react-ts/node_modules/neo-async/async.js:2830:7
    at Object.each (/Users/shilman/projects/testing/react-ts/node_modules/neo-async/async.js:2850:39)
    at /Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/FlagDependencyExportsPlugin.js:311:18
    at /Users/shilman/projects/testing/react-ts/node_modules/neo-async/async.js:2830:7
    at Object.each (/Users/shilman/projects/testing/react-ts/node_modules/neo-async/async.js:2850:39)
    at /Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/FlagDependencyExportsPlugin.js:46:16
    at Hook.eval [as callAsync] (eval at create (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:42:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/node_modules/tapable/lib/Hook.js:18:14)
    at Compilation.finish (/Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/Compilation.js:2076:28)
    at /Users/shilman/projects/testing/react-ts/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/Compiler.js:1051:19
```

````
