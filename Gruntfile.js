module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-ect');
  grunt.registerTask("default", ["ect", "uglify", "cssmin", "watch"]);

  grunt.initConfig({
  	ect: {
  		options: {
  			root: 'src/template'
  		},
  		index: {
  			expand: true,
  			flatten: false,
  			cwd: 'src/template',
  			src: '**/*.html',
  			dest: 'dist',
  			ext: '.html',
  		}
  	},
	uglify: {
		js: {
			files: {
				'dist/js/demo.min.js': ['src/js/demo.js'],
			}
		}
	},
	cssmin: {
		css: {
			files: {
				'dist/css/demo.min.css': ['src/css/demo.css']
			}
		}
	},
	watch: {
		js: {		
			files: ['src/js/*.js'],
			tasks: ['uglify'],
		},
		css: {
			files: ['src/css/*.css'],
			tasks: ['cssmin'],
		},
		template: {
			files: ['src/template/**'],
			tasks: ['ect'],
		},
		livereload: {
			options: {
				livereload: true,
			},
			files: [
				'dist/**',
			]
		}
	},
	connect: {
		server: {
			options: {
				base: 'dist',
				keepalive: true,
				port: 8080,
				debug: true,
				livereload: true,
			}
		}
	}
  });
};
