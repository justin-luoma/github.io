default :
	@echo "=============running yarn install=============="
	yarn install
	@echo "=============starting local server============="
	yarn start

backup : FORCE
	@echo "=============backing up .git directory============="
	rm -rf ./bk/.git
	cp -RLp ./build/.git ./bk/
	cp -Lp ./build/License ./bk/

restore :
	@echo "=============restoring .git directory============="
	cp -RLp ./bk/.git ./build/
	cp -Lp ./bk/License ./build/

build : backup FORCE
	@echo "=============building site============="
	yarn run build

FORCE :

deploy : backup build restore
