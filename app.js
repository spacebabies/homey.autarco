'use strict';

const Homey = require('homey');

class MyAutarco extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('My Autarco has been initialized');
  }

}

module.exports = MyAutarco;
