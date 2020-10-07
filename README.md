<p align="center" style="display: flex; align-items: center; justify-content: center;">
  <img src="https://www.anynines.com/assets/services/icons/platform-3f5cbdcd5e4a649abc3534279fecb376593458029ae724ef34711dc55cd6f4bb.svg" width="100" />
  <span style="font-size: 50px; margin: 20px;">x</span>
  <img src="https://raw.githubusercontent.com/facebook/create-react-app/master/packages/cra-template/template/public/logo192.png" width="100" />
</p>

----

Initialise a React project easily using the anynines React boilerplate.

It comes with preconfigured features like:

- 📦 Webpack
- 🏷️ TypeScript
- ⚛️ React
  - 💄 styled-component
  - 🎨 design-system
- 🌗 Theming
- ✅ Testing (jest)
- 🚨 Linter (eslint, stylelint)
- 👷 Travis

## 🎉 Quick Start

Generate your new GitHub repositories with this [repository templates](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) or fetch it locally using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit anynines/anynines-react-boilerplate react-app
cd react-app
```

Install the dependencies...

```bash
yarn install
```

...then start development environment:

```bash
yarn start
```

Navigate to [localhost:9000](http://localhost:9000/). You should see your app running. Edit the `App` component file in `src`, save it, wait that the page reload: you should see your changes.

## 📦 Build the app

We use [webpack](https://webpack.js.org/) to bundle the React app.

You can build it for development:

```bash
yarn start
```

or for production:

```bash
yarn build
```

The generated web app is located in `public`.

## 🌗 Theming

The boilerplate preconfigure for you a [design-system](https://github.com/avarteqgmbh/design_system) theme instance.

You can customize the default theme by modifying the `CUSTOM_THEME` object located in `src/theme/customTheme.ts`.

Consume the `ThemeContext` using the `@theme` alias:

```javascript
import { ThemeContext } from '@theme'

const { theme } = React.useContext(ThemeContext)
```

> Note: The design-system is instanciate and store in `src/designSystemStore.ts`.