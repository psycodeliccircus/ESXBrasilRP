# ESXBrasilRP

Crier um arquivo com nome packege.json<br>
Adicione isto.<br>

```
{
  "name": "esxbrasil-launcher",
  "version": "x.x.x", //aqui você muda a versão do launcher
  "description": "ESXBrasil Launcher",
  "main": "index.js",
  "scripts": {
    "start": "electron .", //para testa o launcher. use o comando npm start
    "build": "electron-builder --win", //para gera o instalador do launcher. user o comando npm build
    "publish": "electron-builder --win -p always" //para publica o launcher no Github. user o comando npm publish
  },
  "keywords": [
    "esxbrasilrp",
    "esxbrasilx",
    "esxbrasil"
  ],
  "author": "RenildoMarcio", // não mude isto mantenha os creditos :)
  "license": "ISC", //não mexa nisto
  "repository": {
    "type": "git",
    "url": "https://github.com/psycodeliccircus/ESXBrasilRP.git"  //coloque o repositorio do seu launcher
  },
  "build": {
    "appId": "ESXBrasilRP", //coloque o nome do seu launcher
    "productName": "ESXBrasilRP", //coloque o nome do seu launcher
    "win": {
      "target": [
        "nsis" //não mexa nisto
      ],
      "icon": "build/icon.ico" //não mexa nisto
    },
    "nsis": {
      "installerIcon": "build/icon.ico", //não mexa nisto
      "uninstallerIcon": "build/uninstall.ico", //não mexa nisto
      "oneClick": false, //não mexa nisto
      "allowToChangeInstallationDirectory": true, //não mexa nisto
      "runAfterFinish": true, //não mexa nisto
      "createStartMenuShortcut": true, //não mexa nisto
      "packElevateHelper": true, //não mexa nisto
      "createDesktopShortcut": true, //não mexa nisto
      "shortcutName": "ESXBrasil RP", //aqui e o nome que fica no icone da area de trabalho.
      "license": "eula.txt" //aqui fica as regras de uso do launcher que e mostrado no instalado.
    },
    "publish": [
      {
        "provider": "github",
        "owner": "psycodeliccircus", //coloque seu usuario do github aqui
        "repo": "ESXBrasilRP", //coloque aqui o repositorio do launcher no seu github
        "releaseType": "release", // não mexa nisto
        "token": "SeuTokenGitHub", // aqui sua token do github seu. link: https://github.com/settings/tokens/new
        "updaterCacheDirName": "esxbrasil-launcher" //coloque o nome do update mude somente o esxbrasil para o seu nao tire o -launcher
      }
    ]
  },
  "devDependencies": {
    "electron": "^8.2.5",
    "electron-builder": "^22.6.0",
    "electron-rebuild": "^1.10.1",
    "electron-squirrel-startup": "^1.0.0",
    "jquery": "^3.4.1",
    "update-electron-app": "^1.5.0"
  },
  "dependencies": {
    "bootstrap": "^4.4.1",
    "child_process": "^1.0.2",
    "electron-dl": "^3.0.0",
    "electron-is-dev": "^1.2.0",
    "electron-log": "^4.1.2",
    "electron-updater": "^4.3.1",
    "fs": "0.0.1-security",
    "http": "0.0.1-security",
    "https": "^1.0.0",
    "nan": "^2.14.1",
    "node-gyp": "^6.1.0",
    "node-tcp-proxy": "0.0.15",
    "os": "^0.1.1",
    "path": "^0.12.7",
    "randomstring": "^1.1.5",
    "udp-proxy": "^1.2.0"
  }
}
```
<br>
Nesta versão não foi adicionado sistema de anti-cheat.<br>

Faça Download da Versão de testa<br>
https://github.com/psycodeliccircus/ESXBrasilRP/releases


![Launcher_demo](https://github.com/psycodeliccircus/ESXBrasilRP/blob/master/demos/launcher_alpha.gif?raw=true)