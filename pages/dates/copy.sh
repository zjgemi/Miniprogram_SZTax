#!/bin/bash
for((i=3;i<=29;i++)); do
	cp 7.2/7.2.js 7.$i/7.$i.js;
	sed -i ".bak" "s/2/$i/g" 7.$i/7.$i.js;
	rm 7.$i/7.$i.js.bak;
done
