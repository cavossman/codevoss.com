deploy: 
	npm run build
	aws s3 sync ./out s3://codevoss.com --acl public-read
	aws cloudfront create-invalidation --distribution-id ECXRWR0BMEDPN --paths "/*"