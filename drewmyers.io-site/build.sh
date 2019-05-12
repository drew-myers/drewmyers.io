rm -rf .cache public ../docs
gatsby build --prefix-paths
mv public ../docs
rm -rf public
