# @open-wc Monorepo Example

## Install using Yarn Workspaces

It is required that you have yarn installed in place of npm. This monorepo utilizes yarn workspaces to manage dependencies correctly.

```bash
yarn install
```

## Add new component

Use the @open-wc tooling to skaffold the new web component. Required node version 10+

```bash
cd packages
npm init @open-wc
```

- Scaffold a new project ✔
- Web Component ✔
- Linting ✔
- Testing ✔
- Demoing ✔
- Tag name: `my-component`
- Write structure to disk: Yes
- Install Dependencies: Yes, with yarn

### Alter the start script to work with a monorepo

We need to make one small change to the development server to work with monorepos.

Edit your new web component's start script in the package.json file. We are going to alter the es-dev-server options slightly.  We need to add a `-r ../../` to indicate that the root of our server should be the root of our monorepo.  We will the update the `--app-index` option to point the location of our web component's demo file, relative to the root of our monorepo.

`package/my-component/package.json`

```json
{
  "scripts": {
    "start": "es-dev-server --app-index packages/my-component/demo/index.html -r ../../ --node-resolve --open --watch",
  }
}
```

More information on why we need to do this can be found in this issue: https://github.com/open-wc/open-wc/issues/1408