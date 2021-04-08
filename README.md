# 🧮 Pokemon API

Aplicacion con el objetivo de utilizar [React] (https://es.reactjs.org/) y consumir el API Pokedex (https://pokeapi.co/)

![Main image](https://i.postimg.cc/vB1S8qp7/preview.png)


## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Arrancar el proyecto desde cero:

Si has decidido clonar este repositorio:
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. Para ello ejecuta el comando:

```bash
npm start
```

## Estructura

```
src
├── components
│   ├── Card 
│   │   ├── Card.jsx
│   │   ├── Cardskeleton.jsx
│   │   └── styles.scss
│   ├── Layout.jsx
│   └── MainApp.jsx
│   └── ViewPokemon.jsx
├── containers
│   ├── ErrorPage.jsx
│   └── Home.jsx
├── Context
│   └── AppContext.jsx
├── hooks
│   └── useInitialState.js
├── routers
│   └── App.js
├── services
│   └── pokemon.js
├── styles
│   ├── index.scss
│   └── variables.scss
└── App.js
└── index.js
 
```