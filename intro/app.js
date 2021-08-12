// Global NO Window

//__dirname    - path to current directory  
// /Users/kounuki/web-dev/node-tut
//__filename   - filename
// /Users/kounuki/web-dev/node-tut/app.js
//require      - function to use module
/*
[Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/kounuki/web-dev/node-tut',
      exports: {},
      parent: null,
      filename: '/Users/kounuki/web-dev/node-tut/app.js',
      loaded: false,
      children: [],
      paths: [
        '/Users/kounuki/web-dev/node-tut/node_modules',
        '/Users/kounuki/web-dev/node_modules',
        '/Users/kounuki/node_modules',
        '/Users/node_modules',
        '/node_modules'
      ]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/kounuki/web-dev/node-tut/app.js': Module {
        id: '.',
        path: '/Users/kounuki/web-dev/node-tut',
        exports: {},
        parent: null,
        filename: '/Users/kounuki/web-dev/node-tut/app.js',
        loaded: false,
        children: [],
        paths: [Array]
      }
    }
  }*/
//module       - info about current module(file)
/*Module {
  id: '.',
  path: '/Users/kounuki/web-dev/node-tut',
  exports: {},
  parent: null,
  filename: '/Users/kounuki/web-dev/node-tut/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/kounuki/web-dev/node-tut/node_modules',
    '/Users/kounuki/web-dev/node_modules',
    '/Users/kounuki/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
*/
//process      - info about env where the program is being execute

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)



