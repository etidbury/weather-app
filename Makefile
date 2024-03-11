#!make
version  ?= "0.0.0"

.PHONY: sb
sb: ### Run Storybook
	npx nx run weather-app:storybook


.PHONY: dev
dev: ### Run development environment
	npx nx run weather-app:dev

.PHONY: test
test: ### Run unit tests
	npx nx run weather-app:test
	
.PHONY: e2e
e2e: ### Run E2E tests
	npx nx run weather-app-e2e:e2e


.PHONY: help
help: ### Help with commands
	@printf "\033[33mWFR Makefile v$(version)\033[0m\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?### .*$$' ./Makefile | awk 'BEGIN {FS = ":.*?### "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help