# Changelog

## [0.39.2] - 2020-05-25
  - Filipe Raiz

### Fix
  - Refactor component select

#


## [0.39.1] - 2020-05-25
  - Filipe Raiz

### Add
  - Loader Topbar

### Change
  - Refactor component select

#

## [0.38.3] - 2020-05-21
  - Evandro Teixeira

### Fixed
  - Select: Fixed defaultValue update when componente state change

#

## [0.38.2] - 2020-05-18
  - Ruy Freire

### Fixed
  - Toast: Fix condition to close Toast
  - Select: Fix styled component from camelCase to PascalCase
  - ImputGroup: Fix styled component from camelCase to PascalCase

#

## [0.38.0] - 2020-05-05
  - Filipe Raiz

### Change
  - Refactor header mobile and desktop

#

## [0.37.0] - 2020-04-24
  - Jorge Silva

### Change
  - Add mask Hide Email

#


## [0.36.0] - 2020-04-14
  - Filipe Raiz

### Change
  - Add float select

#



## [0.35.9] - 2020-04-08
  - Filipe Raiz

### Fix
  - change default dataTest

#

## [0.35.8] - 2020-04-07
  - Filipe Raiz

### Change
  - Input: change default dataTest
  - InputGroup: change default dataTest
  - FormBox: change variant subtitle to paragraph
  - Header: route /Entrar to /entrar
#


## [0.35.7] - 2020-04-07
  - Vitor Camargo

### Improvement
  - LimitHeader: working with mobile

#

## [0.35.6] - 2020-04-05
  - Filipe Raiz

### Fix
  - Loader: change z-index
  - Modal: change z-index

#


## [0.35.5] - 2020-03-30
  - Filipe Raiz

### Fix
  - Input: Color label error
  - Simulator: Currency value

#


## [0.35.3] - 2020-03-20
  - Filipe Raiz

### Fix
  - Modal - Adjust height

#

## [0.35.2] - 2020-03-20
  - Filipe Raiz

### Fix
  - Input - Adjust color and background label disabled
  - Modal - Adjust for mobile view

### Removed
  - Select - removed z-index in arrow-icon

#


## [0.35.1] - 2020-03-20
  - Ruy Freire

### Added
  - Header - Adjust mobile header notLogged
  - LoaderLogo - added z-index loader container

### Removed
  - Select - removed z-index in arrow-icon


#
## [0.35.0] - 2020-03-18

## Author
  - Filipe Raiz

### Added
  - Organism: Page Error 404
  - Button: style button group

### Changed
  - Button: Prop type, default type button;
  - webpack loader for gif images;
  - Input: fix to props value, to clean input after reset formik;
  - InputGroup: forward id and onblur props to the correct fields

#


## [0.34.8] - 2020-03-16

## Author
  - Filipe Raiz

### Style
  - Fix style loader logo

#

## [0.34.7] - 2020-03-10

## Author
  - Filipe Raiz

### Style
  - Ajuste no tamanho da fonte do botao do simulador

#
## [0.34.5] - 2020-03-09

## Author
  - Ruy Freire

### Fixed
  - Card - change props onClick to buttonClick, fix actions onClick on Card.

#
## [0.34.4] - 2020-03-09

## Author
  - Filipe Raiz

### Fix
  - InputGroup fix float label on show password
  - Scroll page safari
  - Refactor select and show error select
  - insert red border for better view storybook

#
## [0.34.3] - 2020-03-06

## Author
  - Ruy Freire

### Added
  - Modal Content - New props "size", define max width container
  - Modal - New props "size" in Modal Content, passed on Modal
  - Input - New props onBlur

### Changed
  - Select - new props, defaultValue, fixed props className, set height style
  - Input Group - icon showPassword added, default styled changed

### Removed
  - Card - Max widht removed


### Fixed
  - Select - fix props text to tag option

#
## [0.34.2] - 2020-03-04

## Author
  - Filipe Raiz

### Add
  - Input label float

#
## [0.34.1] - 2020-03-03

## Author
  - Evandro Teixeira

### Fix
  - Some properties errors was fixed

#
## [0.34.0] - 2020-03-03

## Author
  - Evandro Teixeira

### Changed
  - Component `LoaderText`
    - Removido a `div(container)` devido a conflitos de HTML (uma div não pode ir dentor de um p)
    - Alterado o element para span
    - Alterado largura para ocupar 100% do espaço disponível

- Component `Select`
    - Adicionada propriedade `defaultOptionText: string`, usada pra alterar o texto da opção default `Selecione uma opção`
    - Removida obrigatoriedade da propriedade `options:array(objects)` e alterado seu `PropTypes` para que sempre seja um array de objetos

- Component `Modal`
  - Alterada lógica de funcionamento do modal, agora o modal precisa receber uma propriedade `active:boolean` para ser exibido
  - Adicionada propriedade `closeOutside:boolean` que ativa/desativa o fechamento do modal ao clicar fora do conteúdo

- Component `Card`
  - Card agora recebe uma propriedade `onClick:function` que será atribuida ao botão quando disponível

- Component `InputGroup`
  - A propriedade `error:boolean` foi alterada para `errorMessage:string`
  - A propriedade `classNameError:string` foi removida

- O Component `DocumentsSidebar` foi movido para dentro da aplicação `conversion` por ser proprio da aplicação em questão

## [0.33.12] - 2020-02-28

## Author
  - Ruy Freire

### Fixed
  - Toast - closeTime props fixed for useEffect in the Toast component


## [0.33.11] - 2020-02-27

## Author
  - Ruy Freire

### Added
  - Checkbox - added function effect to observable props isChecked

### Changed
  - Organism Modal - Move classname from button to modal content
  - Button - Change padding

## [0.33.10] - 2020-02-21

## Author
  - Filipe Raiz

### Refactor
  - Alert component
  - inputGroup component
  - selectGroup component
  - Radio component
#

## [0.33.9] - 2020-02-21
  - Filipe Raiz

### Add
  - token radius
    - values:
      - xs: 2,
      - s: 3,
      - base: 4,
      - m: 8,
      - l: 100,

    - usage:
      - ${pxToRem(ds.get('radius.base'))};
#


## [0.33.8] - 2020-02-21
  - Lucas Augusto

### Add
  - style for show message error in **InputGroup** and **Select**
  - add style for error in radio button
  - add example radio input in storybook
  - add prop `classNameError` in **InputGroup** for input

#

## [0.33.7] - 2020-02-20

## Author
  - Evandro Teixeira

### Add
  - Add a property called `disabled:boolean` to not allow user uncheck the field.

### Changed
  - Now Checkbox component can receive a property called `isChecked:boolean` to define if it'll start checked, by default its value is `false`

## [0.33.6] - 2020-02-20

## Author
  - Vitor Camargo Fernandes

### Changed
  - Radio Button contained option now has a border color change and font weight change when checked

#

## [0.33.5] - 2020-02-20
  - Lucas Augusto

### Add
  - function for remove mask for type currency
#

## [0.33.4] - 2020-02-17

## Author
  - Evandro Teixeira

### Changed
  - Toast component behavior was changed, now toast isn't responsible for its own state, so, you'll have to tell when it is open and how to close it.

#

## [0.33.3] - 2020-02-17

## Author
  -  Vitor Camargo Fernandes

### Changed
  - Header fix to work in smaller mobile resolution
  - DocumentsSideBar now works with mobile
  - Template Layout now works with mobile

### Added
  - Option for button Disabled
#

## [0.33.1] - 2020-02-13

## Author
  - Filipe Raiz

### Changed
- Alteração no arquivo de breakpoints, agora chamado de grid;
- Mudança na forma de importar os breakpoints:
  -   ${pxToRem(ds.get('grid.breakpoints.sm'))}
  -   ${pxToRem(ds.get('grid.breakpoints.md'))}
  -   ${pxToRem(ds.get('grid.breakpoints.lg'))}
  -   ${pxToRem(ds.get('grid.breakpoints.xl'))}

  - Container Component:
    `container: {
      sm: 540,
      md: 720,
      lg: 960,
      xl: 1140,
    }`

    passar o valor `[sm/md/lg/xl]` como props. Por default ele vai esta setado como fluid, onde o mesmo pegara 100% da tela

    `<Container size='fluid'> Teste </Container>`

- Typography Component:
  - inserido o peso para os parágrafos

- Header Component
  - Ajustado o seu width baseado no tamanho do component Container
#


## [0.32.21] - 2020-02-12

## Author
  - Filipe Raiz

### Changed
  - Remove padding layout component

#

## Author
  - Vitor Camargo Fernandes

### Added
  - New Storybook Addon viewPort to view mobile responsiveness

### Changed
  - LendicoLogo component width now is 100%
  - Header to work with responsiveness in mobile (Only logged menu)
#
## [0.31.21] - 2020-02-12

## Author
  - Vucamberg Santos

### Changed
  - Add props in component Alert

#
## [0.31.20] - 2020-02-12

## Author
  - Lucas Augusto

### Changed
  - Changed props **value** and **OnChange** for MaskedInput
  - create state for inputs in stories
  - change setName of **name** for **value** in stories of component **InputGroup**

### Removed
  - removed props **value** and **onChange** in component input
  - removed **defaultValue** in component **InputGroup**

#

## [0.31.19] - 2020-02-11

## Author
  - Evandro Teixeira

### Changed
  - ProgressBar styles was fixed to mirror old application styles

## [0.31.18] - 2020-02-11

#

## Author
  - Lucas Augusto

### Changed
  - Add FormBox component
  - Add props in component Input

#

## [0.31.17] - 2020-02-11

## Author
  - Filipe Raiz

### Refactor
  - Typography align
  - Button removing required onClick

#

## [0.31.15] - 2020-02-10

## Author
  - Filipe Raiz

### Refactor
  - Modal: receive title and option close or not click outside
  - Layout: adjust position content without sidebar
  - LimitInfo: layout and click action to open
  - style typography component
  - merge with other branch

#
## [0.30.15] - 2020-02-10

## Author
  - Ruy Freire

### Fix
  - Checkbox possibility receive icons checked and unchecked


## [0.30.14] - 2020-02-10

## Author
  - Vitor Camargo Fernandes

### Fix
  - Changed SideBar Behavior

### Changes
  - Some css changes was made to ensure component behavior won`t broke to receive the right informations

#

## [0.30.13] - 2020-02-07

## Author
  - Evandro Teixeira

### Fix
  - Fix Layout component css to work properly with sidebar, page scroll was disabled and only content place will have a scroll when content is higher then the screen height
  - Fix DocumentsSidebar prop name, Items now is called items, prop names should always be in lowercase

#

## [0.30.12] - 2020-02-07

## Author
  - Evandro Teixeira

### Changes
  - The size of sidebar was changed to a fixed value at grid component Layout

#

## [0.30.11] - 2020-02-06

## Author
  - Evandro Teixeira

### Add
  - A Layout component to be used as a wrapper to application pages

### Changes
  - Some css changes was made to ensure component behavior

#

## [0.29.10] - 2020-02-06

## Author
  - Filipe Raiz

### Fix
  - Svg not generator

#

## [0.29.9] - 2020-02-06

## Author
  - Filipe Raiz

### Fix
  - All components contains props className
#

## [0.29.8] - 2020-02-05

## Author
  - Lucas Augusto

### Changed
  - Add prop active and useEffect for change show component alert
  - Add props in Container component
  - Add knob in component
    - Image
    - Link
#

## [0.29.7] - 2020-02-05

## Author
  - Lucas Augusto

### Changed
  - Add prop value and onChange in DatePicker and Checkbox
#

## [0.29.6] - 2020-02-05

## Author
  - Vitor Camargo Fernandes

### Fix
  - ALL WARNINGS

### Add
  - Asset CallIcon
#

## [0.29.5] - 2020-02-05

## Author
  - Filipe Raiz

### Changed
  - Merge with master
#

## [0.29.4] - 2020-02-05

## Author
  - Lucas Augusto

### Changed
  - Add InputGroup Export

#

## [0.29.3] - 2020-01-31

## Author
  - Lucas Augusto

### Changed
  - Updated storybook of Toast

#

## [0.29.2] - 2020-01-31

## Author
  - Filipe Raiz

### Changed
  - Merge with master

#

## [0.29.1] - 2020-01-31

## Author
  - Filipe Raiz

### Changed
  - Refactor and update components

#

## [0.28.1] - 2020-01-29

## Author
  - Filipe Raiz

### Changed
  - Update new components with design system

#

## [0.27.1] - 2020-01-29

## Author
  - Evandro Teixeira

### Add
  - Was add a new molecule called InputCameraIntructions
  - Was add a new organism called InputCamera
  - Was add a new directory called `helpers` inside utils directory

## [0.26.1] - 2020-01-29

## Author
  - Filipe Raiz

### Changed
  - Refactor components with design system

### Fix
  - fix Color and buttons of modal and simulator

#

## [0.25.1] - 2020-01-29

## Author
  - Ruy Freire

### Added
  - New atom component - Input default
  - News mask inputs

## [0.24.1] - 2020-01-29

## Author
  - Vitor Camargo Fernandes

### Added
  - Create Documents Sidebar

#
## [0.23.1] - 2020-01-28

## Author
  - Filipe Raiz

### Changed
  - Refactor all components with design system

#
## [0.22.1] - 2020-01-27

## Author
  - Evandro Teixeira

### Changed
  - Add FileImagePreview molecule

#
## [0.21.1] - 2020-01-27

## Author
  - Vucamberg Santos

### Added
  - Create DatePicker

#
## [0.19.1] - 2020-01-24

## Author
  - Filipe Raiz

### Changed
  - Refactor ProgressBar atom component

#
## [0.18.1] - 2020-01-24

## Author
  - Vitor Camargo Fernandes

### Added
  - Create new Organism - ClientSideBar

### Fix

  - Accordion click fix
  - Accordion open animation

#

## [0.17.1] - 2020-01-23

## Author
  - Evandro Teixeira

### Added
  - Add DragArea component

#
## [0.16.1] - 2020-01-23

## Author
  - Filipe Raiz

### Changed
  - Refactor components
#
## [0.15.1] - 2020-01-23

## Author
  - Ruy Freire

### Added
  - Create new molecule - Card

#
## [0.14.1] - 2020-01-22

## Author
  - Evandro Teixeira

### Added
  - Add Tab atom to component libary

#
## [0.13.1] - 2020-01-20

## Author
  - Lucas Augusto

### Added
  - Add sizes of buttons
    - create test of some cases and props

### Changed
  - Size of button

#
## [0.12.1] - 2020-01-22

## Author
  - Vitor Fernandes

### Added
- Create New Atom - Toast


#
## [0.11.1] - 2020-01-21

## Author
  - Filipe Raiz

### Added
- Create New Atom - Alert


#
## [0.10.19] - 2020-01-21

## Author
  - Vitor Fernandes

### Added
- Create New Atom - ProgressBar


#
## [0.9.19] - 2020-01-21

### Author
  - Vucamberg Santos

### Added
  - Accordion Atom

#
## [0.8.19] - 2020-01-21

### Author
  - Ruy Silva

### Added
  New Styled Componente - Checkbox

#
## [0.7.19] - 2020-01-21

## Author
  - Filipe Raiz

### Fix
- Fix render component header storybook

#
## [0.7.18] - 2020-01-20

## Author
  - Filipe Raiz

### Changed
- Import Path modules with alias

#
## [0.6.18] - 2020-01-20

### Author
  - Ruy Freire

### Fixed
  - Event click and Text modified in Radio Button

#
## [0.6.17] - 2020-01-20

## Author
  - Vucamberg Santos

### Added
  - Create new Atom - Badge

#
## [0.5.17] - 2020-01-20

## Author
  - Filipe Raiz

### Added
  - Add alias to import any modules
    - @atoms
    - @molecules
    - @organisms
    - @designSystem
    - @utils

### Changed
- Path modules

### Author
  - Ruy Freire

### Added
  - Create new Atom - Radio Button

#
## [0.4.17] - 2020-01-17

## Author
  - Vitor Fernandes

### Added
  - Create new Molecule - Menu Header

### Changed
- Menu structure
- Design system to receive pxToRem

#
## [0.3.17] - 2020-01-17

## Author
  - Jhonatan Batista

### Added
  - Added deploy of storybook on pipeline

#
## [0.3.16] - 2020-01-17

## Author
  - Vucamberg Santos

### Added
  - Create new Atom Element - Select

#
## [0.2.16] - 2020-01-16

## Author
  - Ruy Freire

### Added
  - Create new Atom - Input Label

#
## [0.1.16] - 2020-01-16

### Author
  - Jhonatan Batista

### Changed
- bitbucket-pipelines enabled unit tests
- jest.config.js changed testPathIgnorePatterns to pass tests
- package.json add --config parameter on test script command

#
## [0.1.15] - 2020-01-15

### Author
  - Filipe Raiz

### Added
- All components with test and storybook files
- .vscode folder with extension files and base settings
- .editorConfig
- Commit task using husk and lint-staged

### Changed
- Ui refactoring
- New folder structure
- Components structure
- Update Changelog

### Fixed
- Correction of Eslint and Prettier of the files

#
## [0.1.14] - 2020-01-14

### Author
  - Jhonatan Batista

### Added
- Added README

### Changed
- Update Changelog

#
## [0.1.13] - 2020-01-14 - Example CHANGELOG

### Added
- Better explanation of the difference between the file ("CHANGELOG")
and its function "the change log".

### Changed
- Refer to a "change log" instead of a "CHANGELOG" throughout the site
to differentiate between the file and the purpose of the file - the
logging of changes.

### Removed
- Remove empty sections from CHANGELOG, they occupy too much space and
create too much noise in the file. People will have to assume that the
missing sections were intentionally left out because they contained no
notable changes.

### Fixed
- Fix Markdown links to tag comparison URL with footnote-style links.
