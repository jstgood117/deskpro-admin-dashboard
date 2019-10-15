#!/bin/bash

if [ ! -d build ]; then
    echo "./build directory does not exist."
    echo "Did you forget to run: npm run build"
    exit 1
fi

if [ ! -d storybook-static ]; then
    echo "./storybook-static directory does not exist."
    echo "Did you forget to run: npm run storybook:build"
    exit 1
fi

if [ -d gh-pages ]; then
    rm -rf gh-pages
fi

mkdir gh-pages

mv ./build gh-pages/app
mv ./storybook-static gh-pages/storybook
cp ./.travis/landing-page.html gh-pages/index.html