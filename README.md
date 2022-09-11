# Electron-TypeScript-React Template
This repository serves as a template to quickly bootstrap new [electron](https://github.com/electron/electron) apps for Windows and macOS. It is based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and heavily influenced by [this](https://github.com/yhirose/react-typescript-electron-sample-with-create-react-app-and-electron-builder) sample.  


It provides 
- TypeScript support for the entire project  
- Hot Reload for the main process  
- Full [electron-builder](https://github.com/electron-userland/electron-builder) compatibility
- Complete ExampleWasTaken Studios ESLint configuration

## Project structure
The project is structured like a typical create-react-app project with the addition of the [electron](./electron/) and [assets folder](./assets/).

- [assets](./assets/) - All assets that are needed by the app. This includes build files as well as files needed at runtime.
  > Note, that files required by the renderer process need to be placed in the [rendererAssets](./src/rendererAssets/) folder as specified in the [create-react-app](https://create-react-app.dev/docs/folder-structure) docs.
- [electron](./electron/) - All electron/main process related source files.
- [src](./src/) - All renderer process related files.

## Get started
Because this project is kept as generic as possible there's a few things that need to be configured before usage.

Inside [package.json](./package.json):
- Set the `name` property to the name of your app
- Set the `version` to your version
- Set the `description` to match your app
- Set the `repository.url` to match your repo
- Set the `license` property to the correct license type

Inside [stable.electron-builder.config.json](./stable.electron-builder.json) and [canary.electron-builder.config.json](./canary.electron-builder.json):
- Set the `appId` property to your appId 
  > It is crucial that you set the the correct appId as updates might not work otherwise.
- Set the `productName` property to the name of your app
- Set the `mac.category` to the correct [LSApplicationCategoryType](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW8)

After that install all dependencies
```sh
npm install
```

Then run the development server using
```sh
npm start
```

To build a production ready build run
```sh
npm build
```

To quickly delete the build folders run
```c
npm run clean:mac   // on mac
npm run clean:win   // on windows
```

For convenience all react commands are retained
```sh
npm run react:<original-cmd>
```

## License
[MIT License](./LICENSE)

