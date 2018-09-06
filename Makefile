default :
	@echo "=============starting local server============="
	yarn start &

backup :
	@echo "=============backing up .git directory============="
	rm -rf ./bk/.git
	cp -RLp ./build/.git ./bk/

restore :
	@echo "=============restoring .git directory============="
	cp -RLp ./bk/.git ./build/

build : FORCE
	@echo "=============building site============="
	yarn run build

FORCE :

deploy : backup build restore