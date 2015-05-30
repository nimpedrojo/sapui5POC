module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: "localhost",
          port: 8000,
          keepalive: true,
          livereload: true
        }
      }
    },

    qunit: {
      all: ['test/*.html']
    },

    openui5_connect: {
      server: {
        options: {
          appresources: 'WebContent',
          resources: 'https://openui5.netweaver.ondemand.com/',
          proxypath: 'proxy',
			cors: {
				origin: "*"
			}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-openui5');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('default', ['openui5_connect']);
  grunt.registerTask('start', ['openui5_connect']);

};
