'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Claimthisspace = new Module('claimthisspace');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Claimthisspace.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Claimthisspace.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Claimthisspace.menus.add({
    title: 'claimthisspace example page',
    link: 'claimthisspace example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Claimthisspace.aggregateAsset('css', 'claimthisspace.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Claimthisspace.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Claimthisspace.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Claimthisspace.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Claimthisspace;
});
