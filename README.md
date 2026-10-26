# PortifolioVinicius

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 21.2.25

## npm version

the recomended version installed via nvm is 26.12.1 

## node version
node recomended version is 26.12.1  

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
npx ng build --configuration production --base-href "https://viniciussilvano.github.io/portifolio_vinicius/"
|
npx angular-cli-ghpages --dir=../dist/portifolio_vinicius/browser (it must be executed in project's src directory)

## Update local tags from repository
git fetch --all --tags

## Change to tag
git checkout tags/v1.0 -b v1.0-branch



## Adicionar um projeto

1. Crie um arquivo em `src/app/projetos/projetos-especificacao/data/`, usando os arquivos existentes como exemplo.
2. Defina o projeto como `ProjetoEspecificacao`. Informe o próximo identificador em `projeto-dados-comuns.ts` e use-o no campo `id`.
3. Coloque as imagens em uma pasta própria dentro de `src/assets/images/`. Referencie cada imagem com `GlobalStrings.getAssetUrl("images/nome-da-pasta/arquivo.png")` e preencha o texto `alt`.
4. Importe o novo registro em `PROJETOS_DADOS.ts` e inclua-o na lista `PROJETOS_ESPECIFICACOES`.
5. Use `TipoProjeto`, `StatusProjeto` e `Visibilidade` para preencher classificação, situação e visibilidade. Associe as tecnologias existentes em `src/app/tecnologias/data/TECNOLOGIAS_DADOS.ts`.

As descrições detalhadas ficam nos campos `accordionCards` do próprio projeto. IDs de seção: `AccordionSectionId.DESCRIPTION` para descrição, `AccordionSectionId.ABOUT` para seção complementar e `AccordionSectionId.SOURCE` para link/código.
