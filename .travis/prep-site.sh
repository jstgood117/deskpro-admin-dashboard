#!/bin/bash

mkdir gh-pages

mv ./packages/admin-react-app/build gh-pages/app
mv ./packages/deskpro-component-library/storybook-static gh-pages/storybook
cp ./.travis/landing-page.html gh-pages/index.html