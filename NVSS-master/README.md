# NVS - NuxtJS + Strapi + Vuetify

Für die Frontenderstellung. Der Fetch Call passiert über Middleware, sodass bei jedem Change der Route 
Daten neu geladen werden. Dementsprechendes Herrichten der Daten über middleware/fetchHelper bzw. Store Actions/Mutations.

### Features
* NuxtJS (www.nuxtjs.org)
* Axios (https://axios.nuxtjs.org/)
* Strapi (www.strapi.io)
* PurgeCSS (www.purgecss.com)
* VuetifyJS (www.vuetifyjs.com/en/)
* Vuetify SCSS Support (assets/variables.scss)
* Debugging via Nodemon

# How to...

## Run
Über `npm run dev` wird ein lokaler Webserver gestartet, womit man via http://localhost:3000 zugreifen kann.

## Debug
* Zuerst alle Pakete installieren. (npm install)
* Danach `npm run debug` ausführen.
* Im Anschluss JS Debugger auf Port 3000 laufen lassen. (Bevorzugt Chrome)
* Konfiguration in WebStorm bzw. VS Code anlegen!

## Bugs
Zurzeit werden Warnings angezeigt, diese können getrost ignoriert werden. (Babel)<br>
Ein Fix ist seitens der Developer schon auf dem Weg.<br>
https://github.com/nuxt/nuxt.js/commit/714249740690569eedf74aa7bca7ed31c01953d4
<br><br>
`npm update` sobald neues Release!

# Build Setup

In der nuxt-config.js die env Variable ApiUrl ändern!<br>
```bash
env: {
    apiUrl:
      'HIER DIE API URL',
  },

# Productionbuild + Start vom Testserver
# (Statisches Projekt, zu finden in /dist)
$ npm run build
```
# Weitere Informationen
## Performance
Sollte eine Analyse der zurzeit bestehenden Chunks gewollt werden,
so muss im `build Objekt` in der `nuxt-config.js` die Eigenschaft `analyze` auf true gesetzt werden. Somit öffnet sich ein neues Browserfenster mit dem aufgesplittetem Inhalt.<br>
<br><b>Nur bei `npm run build`gültig!</b>
```
  build: {
    analyze: true,
  },
```

### <br>Anschließender Debug
Auch die extend Methode kann in der Production auskommentiert werden, da die SourceMaps nur im Dev Debug nützlich sind!
```
  build: {
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
    }
  },
```
# Docs
Sollten weitere Fragen auftreten stehen in der `nuxt-config.js` alle weiterführenden Informationen auf den jeweiligen Seiten.

#### To be continued...
