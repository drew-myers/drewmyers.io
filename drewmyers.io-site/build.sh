rm -rf .cache public ../docs
gatsby build
mv public ../docs
rm -rf public
