/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-phishin-js',

  included: function (app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/phishin-js/dist/phishin-js.js');
  }
};
