'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'test.e2e/angular2/test-main.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      // Required by PhantomJS2, otherwise it shouts ReferenceError: Can't find variable: require
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/traceur/bin/traceur.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      // beta.7 IE 11 polyfills from https://github.com/angular/angular/issues/7144
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

      { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'dist/dev/**/*.js', included: false, watched: true },

      // PhantomJS2 (and possibly others) might require it
      {
        pattern: 'node_modules/systemjs/dist/system-polyfills.js',
        included: false,
        watched: false
      },

      // suppress annoying 404 warnings for resources, images, etc.
      { pattern: 'dist/dev/assets/**/*', watched: false, included: false, served: true },

      'test-main.js'
    ],

    // must go along with above, suppress annoying 404 warnings.
    proxies: {
      '/assets/': '/base/dist/dev/assets/'
    },

    // list of files to exclude
    exclude: [
      'node_modules/angular2/**/*spec.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values:
    //    config.LOG_DISABLE
    //    config.LOG_ERROR
    //    config.LOG_WARN
    //    config.LOG_INFO
    //    config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

  });
};
