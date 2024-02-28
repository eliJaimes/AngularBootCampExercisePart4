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
ng generate component components/resumeForm --skip-tests --style none --dry-run
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

## Include some basic built in validators on the form fields

- Add built in validators to current field
- Fix and issue on Contact Title field, replace formControlTitle to formControlName, this was a replace title, sorry ☺
- Disabled form submission if the form is no valid

## Show error messages on form controls

- Add some label properties to display on the template
- Include elements to render errors base on validator rules

## Improve template organization by isolate field errors

https://angular.io/api/common/NgTemplateOutlet

- Use an ng-container directive with a ngTemplateOutlet directive to insert an embedded view from a prepared TemplateRef
- The TemplateRef should receive a context object so it can apply logic depending on the corresponding form control

## On form handle capabilities piece

- Use FormGroup and FormControl classes to define the structure of the ResumeForm capability piece
- Use FormArray class to define the capabilities property on the resumeForm property

## Reflect the ResumeForm capabilities piece on the UI

- Create basic layout to render capabilities on the UI
- Use the formArrayName directive to wire the capabilities resumeForm property

## Create dynamic capabilities piece on the UI

- Create necessary structures to wire the description and title properties according to the capabilities field length

## Create logic to add capabilities

- Add logic and UI to add capabilities on user demand

## Create logic to remove capabilities

- Add logic and UI to remove capabilities on user demand

## Fix visual issue when deleting a capability

- Update the track predicate to capabilityControl on the @for template block
- Note: we can also make the formControl nonNullable ones, so our typings match our validators

## Reflect the ResumeForm capabilities piece on the UI

- Create necessary structures to wire the input according to the skills field length
- Add logic and UI to add skills on user demand
- Add logic and UI to remove skills on user demand
- Improve removeCapability and removeSkill logic

## Reflect the ResumeForm for educations pieces on the UI

- Replicate above steps to complete the educations form

## Reflect the ResumeForm for certifications pieces on the UI

https://material.angular.io/components/datepicker/overview

- Import MatDatepickerModule on ResumeFormComponent
- On 'src\app\app.config.ts' add provideNativeDateAdapter
- Replicate above steps to complete the certifications form

## Reflect the ResumeForm for experiences pieces on the UI

- Replicate above steps to complete the experiences form

## Fix issue on certifications date field

- Sometimes Angular Material has edge cases. Currently seems like we can not disable user input on simple datepicker while we are using reactive forms. This could be a good artificial scenario to know the getRawValue method.

## Add cosmetic enhancements

https://material.angular.io/components/expansion/overview

- Let's constraint our form according to the view port
- Import MatDatepickerModule on ResumeFormComponent
- Improve UI by allowing user to expand-collapse form sections

## Refactor, isolate labels to a file

- Lets create a file that contains all ResumeFormComponent labels

## Refactor, isolate internal types to a file

- Lets create a file that contains all ResumeFormComponent internal types

## Refactor ResumeFormComponent to reuse code where possible

- Let's reuse code where we can on ResumeFormComponent class

- Note: we should reduce ResumeFormComponent template, we can achieve this by creating multiple small components that handle the UI. However when involving a form, this enhance involve several advance concepts outside the context of this course.

## Add temporary save functionality

- Lets create some functionality to reset the form
- Lets create some functionality to load test data as developer helper functionality. We will remove this at some point.
- Comment Validators.pattern from sentenceValidators and extendedSentenceValidators properties, you can enable with a better regex pattern when you needed

## Fix issues with form, inputs not clearing form model

- When we clear the Angular Material Input we are not updating the form data, we need to fix it

## Fix issues with form, not creating form initial state when reset

- We need to destroy dynamically created items on the form to recreate initial state

## Add save and load functionality

- Add save functionality
- Add load functionality while refactoring loadTestData method
- Fix clear input buttons, since we do not declare them as type button

## Improve UI with dialogs and toast messages

https://material.angular.io/components/dialog/overview
https://material.angular.io/components/snack-bar/overview

- Create a confirmationDialog component

```shell
ng generate component components/confirmationDialog --skip-tests --style none --dry-run
```

- Import MatDialogModule on ConfirmationDialogComponent
- Import MatButtonModule on ConfirmationDialogComponent
- Create a ConfirmationDialogDataT type on 'src\app\entities\confirmationDialogData.type.ts'
- On ConfirmationDialogComponent inject MAT_DIALOG_DATA typed as ConfirmationDialogDataT
- Update ConfirmationDialogComponent template using data properties
- Import ConfirmationDialogComponent on ResumeFormComponent
- Inject MatDialog class on ResumeFormComponent

## Add company logo and final touches

- Fix text color on theme switcher
- Add company logo depending on the theme
- Fix ResumeFormComponent action form buttons
