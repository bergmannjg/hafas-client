# How to get a more complete TypeScript declaration file

This is an attempt to get a more complete TypeScript declaration file by adding 
type information via JsDoc annotations to the JavaScript files (see [here](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html))

Some use cases of this approach are [webpack](https://github.com/webpack/webpack/pull/6862) and [Unsplash](https://medium.com/unsplash/how-we-gradually-migrated-to-typescript-at-unsplash-7a34caa24ef1).

This is work in progress.

* The file **types.ts** contains the interfaces types.
* Type information is added to the most relevant funtions via JsDoc documents. Tags **@type** and **@param** are used.
* The TypeScript compiler tsc runs only as a type checker and gets the type information from the jsdoc annotations
* The interfaces types are type checked to be compatible with the js code.
* The test fixture json files are used to typecheck the raw hafas api and hafas-client api types.
* Currently there are 6 code changes (marked with **@author Jürgen Bergmann**) to pass the type checking.
* There is a special handling for Object.assign to enable type checking.
* The script **create-declaration-file.sh** creates a TypeScript Declaration file. Tsc can infer the return types for all api functions.
* There is a long running branch **add-types-in-jsdoc** containing all changes and 1 commit ahead of master branch (without commit history).
* The **master** branch is the unchanged copy of the hafas-client origin.

Maybe this way gets a more complete TypeScript Declaration file than the manual alternative.
