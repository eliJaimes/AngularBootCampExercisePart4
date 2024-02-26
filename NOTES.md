# First commit

## Create application

```shell
ng new ExercisePart4 --skip-tests --dry-run
> Which stylesheet format would you like to use? SCSS
> Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? N
```

https://angular.io/cli

## Do clean up

- Sort imports
- Clean app.component.\* files
- Remove unnecessary editor files

## Install Angular Material

https://material.angular.io/guide/getting-started

```shell
ng add @angular/material --dry-run
> Would you like to proceed? Yes
> Choose a prebuilt theme name, or "custom" for a custom theme: Custom
> Set up global Angular Material typography styles? (y/N) y
> Include the Angular animations module? Include and enable animations
```

- This time 'Roboto' font was include by Angular Material

## Update Angular Material custom theme

https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

- On 'src\styles.scss' update theme variables name
- '@include mat.all-component-typographies();' rule
- Change the primary color
- Extend the configuration to provide a dark theme
- Manually set the background according to the theme
- Include scroll customization rules

https://material.angular.io/guide/theming-your-components

## Install and wire TailwindCss

https://tailwindcss.com/

- We can follow the installation guide https://tailwindcss.com/docs/guides/angular

- Install tailwindcss via npm, and then run the init command to generate a tailwind.config.js file

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- Add the paths to all of your template files in your tailwind.config.js file
- Add the @tailwind directives for each of Tailwind's layers to your ./src/styles.css file
- Get rid of 'src\app\app.component.scss' and the reference from 'styleUrl' property on AppComponent, we will try to only use TW for our styles.
- Note: Tailwind can be use along with SCSS, on certain scenarios the combination of both approaches can be quite powerful

## Configure our theme in Tailwind

https://tailwindcss.com/docs/theme

- We will limit our theme colors to Angular Material Colors
- We want to use the Tailwind's slate pallete so we will import it

https://tailwindcss.com/docs/customizing-colors#using-the-default-colors

## Define application requirements and outputs

- We included the file 'src\assets\desiredOutput.json' which is the required output as a json structure that will be rendered for an external endpoint as a Pdf resume
- We created the file 'enhancedOutput.json', which is a similar structure as 'desiredOutput.json' but allows more that 1 education option and flattens the skills matrix as an skills array. Adjust some nouns to its plural version.
- We can start creating some entities (types or interfaces) out of this, so out application is strongly typed

## Create the ResumeForm component

- Note: we will no create modules anymore, since v15 on Angular, you can create Stand Alone components

```shell
ng generate component components/resumeForm --module home --skip-tests --style none --dry-run
```

- Import ResumeFormComponent on AppComponent imports array
- Use ResumeFormComponent on AppComponent template
- Change the page tile and favicon

## Create application outer layout

https://material.angular.io/components/toolbar/overview

- Let's create the application outer layout using some Angular Material components
- Import MatToolbarModule on AppComponent, using the imports array
- We will set the page title dynamically so we can have consistency

## Add switch theme logic

https://material.angular.io/components/slide-toggle/overview

- Import MatSlideToggleModule on AppComponent, using the imports array
- Extend our toolbar component to include our switch theme toggle
- Configure the toggle with some options
- Inject the Renderer2 class to manipulate DOM elements

## Create ResumeForm component outer layout

- Note: it might be a good practice to use the components selector name as a a class wrapper for the components
- Use Tailwind's utility classes to style App and ResumeForm components

## Create the resume form and handle contact piece

- Get rid of the lorem ipsum text
- Import ReactiveFormsModule on ResumeFormComponent, using the imports array
- Define a resumeForm property and use FormGroup and FormControl classes to define the structure of the ResumeForm contact piece

## Create a proper strong typing mechanism

- Create some helper type that we can reuse ResumeFormComponent

## Improve strong typing mechanism

- We should reuse and consider our main source of truth when we define types, so lets update our internal ResumeFormComponent typing definition

## Reflect the ResumeForm contact piece on the UI

https://material.angular.io/components/button/overview
https://material.angular.io/components/form-field/overview
https://material.angular.io/components/icon/overview
https://material.angular.io/components/input/overview
https://material.angular.io/components/tooltip/overview

- Import MatButtonModule on AppComponent
- Import MatIconModule on AppComponent
- Import MatInputModule on AppComponent
- Import MatSlideToggleModule on AppComponent
- Import MatTooltipModule on AppComponent
- Add a MatFormField with a MatInput and wire the name and title fields
- Add a formGroup directive on form element and wire the resumeForm property

## Add form actions

- Create a new section to add some form actions buttons
- Add the ngSubmit event

## Reflect the ResumeForm profile piece on the UI

- Wire the description field

## Refactor to isolate Tailwind custom classes

https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer

- Let's isolate the utility classes applied to the fieldset element

https://tailwindcss.com/docs/adding-custom-styles#writing-plugins

- Let's isolate the utility classes applied to the legend element

## Refactor to improve template organization

- Use an ng-container directive with a ngTemplateOutlet directive to insert an embedded view from a prepared TemplateRef
- We will use this pattern so we have a clean an easier to handle structure
