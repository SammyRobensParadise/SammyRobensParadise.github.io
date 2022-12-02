# makefile


.PHONY: help


help:
	@echo "--- Options ---"
	@echo "install ...... installs gem 💎 dependencies"
	@echo "start   ...... starts a local server"

MYDIR= .

install:
	@echo "Installing depencies..."
	bundle
	@echo "Done! ✨"

start:
	@echo "Starting Server...."
	bundle exec jekyll serve