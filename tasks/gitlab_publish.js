/*
 * gitlab-publish
 * https://github.com/chunterg/gitlab-publish
 *
 * Copyright (c) 2014 chunterg
 * Licensed under the MIT license.
 */

'use strict';

var git = require('git-rev');
var inquirer = require("inquirer");
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('gitlab_publish', 'publish to gitlab', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    // var options = this.options({
    //   punctuation: '.',
    //   separator: ', '
    // });
    var question = {};
    question.daily = {
                type:"input",
                name:"daily",
            }
    // check for git
    var done = this.async();

    git.branch(function (str) {
        console.log(str)
        
        // inquirer.prompt([question.daily], function( answers ) {
        //     console.log(answers)
        //     done();
        // });
    })
    // var inquirer = require("inquirer");
    
  });

};
