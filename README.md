# PortifolioVinicius

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## npm version

the recomended version installed via nvm is 10.24.1 

## node version
node recomended version is 10.24.1

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## create new tags
git tag -a v1.4 -m "my version 1.4"

## pushing the new tags
git push origin --tags

## deploy to git hub pages
npx ng build --prod --base-href "https://viniciussilvano.github.io/portifolio_vinicius/"
|
npx angular-cli-ghpages --dir=dist/portifolio_vinicius (tem que rodar no diretório raiz)
