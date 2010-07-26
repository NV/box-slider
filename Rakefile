begin
	require 'juicer'
rescue LoadError
	abort 'juicer is not available. You should install it: gem install juicer'
end
require 'rake'
require 'rake/clean'


CLEAN.include 'build'

task :default => :jquery

task :jquery do
	mkdir 'build' unless File.directory? 'build'
	exec 'juicer merge src/jquery.horizontal_box_slider.js\
		--skip-verification\
		--output build/jquery.horizontal_box_slider.js\
		--skip-verification\
		--force\
		--minifyer "closure_compiler"'
end
