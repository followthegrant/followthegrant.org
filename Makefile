all: clean publish

install:
	npm i

out:
	npm run build

publish: out
	aws s3 --endpoint-url https://s3.investigativedata.org sync ./out s3://followthegrant.org

clean:
	rm -rf out

serve: out
	cd out ; python3 -m http.server
