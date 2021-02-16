
# SpectoStarterAngular

This page will be filled with general guidelines on how we write our code and what standards should be followed.

**NOTE:**  If you don't find answers to your questions in this document, or if something is not specified, you should follow [Angular Style Guide](https://angular.io/guide/styleguide)

# Supported editors:
- VSCode
- Webstom

# Setup

- `npm install`
- `npm install -g @angular/cli`
- To start the project: `ng serve` and open http://localhost:4200 inside your browser


# Prettier/ Linting setup VSCode:

### Prettier:
1.) Install the extension "Prettier" by Esben Petersen.

2.) In your settings.json file enter this lines:
```
{
    "[typescript]": {
        "editor.formatOnSave": true
    },
    "[html]": {
        "editor.formatOnSave": true
    },
}
```

### Linting:
1.) Install the extension TSLint by Microsoft 

## Prettier/ Linting setup Webstorm:

### Prettier:
**1**.) Open settings -> tools -> file watchers,

**2**.) Add new watcher via + sign on the right sidebar,

**3**.) Add this config:
- Name: `Prettier TS`
- File type: `TypeScript`
- Scope: `Open files`
- Program: `$ProjectFileDir$\node_modules\.bin\prettier`
- Arguments: `--write --single-quote --trailing-comma=all --print-width 140 --arrow-parens=always $FilePathRelativeToProjectRoot$`
- Output paths to refresh: `$FilePathRelativeToProjectRoot$`
- Save wathcer and close
- Set the watcher level on Global
- Click the checkbox to enable it

**5**.) Duplicate this watcher

**6**.) Use the same properties as before, change only:
- Name: `Prettier HTML`
- File type: `Angular HTML Template`

### Linting:
Open settings -> Languages & Frameworks -> Typescript -> Tslint

Select `Automatic TSLint configuration`

## Test Prettier and Linting:
- To test TSLint open any component .ts file and add a new public property and below it a new private property: You should get a **member-ordering** linting error.
```
export class TestComponent implements OnInit {
    public testPublic;
    private testPrivate;
}
```

- Test Prettier by opening any .ts file and copying this:
`[].forEach(item => console.log(item))`
Then press save, it should change to:
`[].forEach((item) => console.log(item));`

# Git config:

Every Angular project needs to be linted before commit can be executed. Anytime you use git commit, ng lint will be called first. **Note: commit won't be run if ng lint fails**

Below are instructions for setup:

-   Download Git pre-commit hook [pre-commit](https://doc.specto.si/download/attachments/14975493/pre-commit?version=1&modificationDate=1576678525000&api=v2)
    
-   Add it to project .git folder inside hooks folder (example path: eloterija-front/.git/hooks/)
-   If ng lint command still doesn't run before git commit is finished, change git config settings with this command: git config core.hooksPath .git/hooks

# Rules

## Component TS structure:

Every component should emphasize on this structure and follow it. (structure from top to bottom)

1.  Private properties
2.  Input()
3.  Output()
4.  ViewChild() ViewRef() and others
5.  Protected properties
6.  Public properties
7.  Constructor
8.  Every lifecycle methods
9.  Custom public methods
10.  Custom private methods

## Component template structure:

Template (Html) should follow this structure (structure from top to bottom)

1.  Angular directives → (that includes *ngFor, *ngIf,...)
2.  Component selectors → _#component="component"_
3.  ngModel properties → _[(ngModel)] (ngModel) ngModel_
4.  Value emitters, outputs → _(valueChange) (click) (input)_
5.  Angular class attributes → _[ngClass]_
6.  Other Html attributes → _class, name, id, aria-hidden_


```
<textarea
  #desc="ngModel"
  [(ngModel)]="vehicle.description"
  (valueChange)="getValue($event)"
  id="desc"
  name="desc"
  required
>
</textarea>
```

## Folder structure:

-   **e2e** -  End to end tests
-   **src** - Source folder:
    -   **app** - Source folder:
        -   **core** - Core folder (items that don't need to be imported and will be accessible everywhere):
	        - **guards** - Route guards
	        - **interfaces** - Interfaces
            -   **models**  - Models
            -   **services** - Services (api, state, common):
                -   **api** - Services that call outside sources & servers
                -   **state** - Services that keep state
                - **utils** - Utility services / business logic
        -   **shared** - Shared folder (items, pipes, directives, components, that are used a lot such as input, button, card, modal, wrapper,..)
        -   **other** - Other lazy-loaded components
    -   **assets** -  Assets (img, JSON)
    -   **environments** - Environments folder (prod, hmr, dev)
    -   **scss** -  Styling
    -   **styles.scss** - Global scss (imports from scss folder)
-   **angular.json** - Angular settings
-   **karma.conf.js** - Karma testing library config
-   **package.json** - _Npm packages
-   **tsconfig.json** - Tslint config
-   **tslint.json** - Tslint settings

### Animations:

You can animate components on route change and initialization.

Basic setup:
- Create an animations.ts file with all your animations, for example:
```
// *******************************************************************************
// Route animations
// ":enter"  - component/view that is entering the view and was previously not loaded in dom
// ":leave"  - component/view leaving the view and will be removed from the dom
// Route transitions
// * => *   - switching from one view to other, but not back
// * <=> *  - switching from one view to another and back
// *******************************************************************************
import { animate, group, query, style, transition, trigger } from '@angular/animations';
const timing = '600ms 100ms ease';
const slideIn = [
  query(':enter', [style({ transform: 'translateX(100%)' })]),
  query(':leave', [style({ transform: 'translateX(0)' })]),
  group([
    query(':leave', [animate(timing, style({ transform: 'translateX(-100%)' }))]),
    query(':enter', [animate(timing, style({ transform: 'translateX(0)' }))]),
  ]),
];

const slideOut = [
  query(':enter', [style({ transform: 'translateX(-100%)' })]),
  query(':leave', [style({ transform: 'translateX(0)' })]),
  group([
    query(':leave', [animate(timing, style({ transform: 'translateX(100%)' }))]),
    query(':enter', [animate(timing, style({ transform: 'translateX(0)' }))]),
  ]),
];

export const slideInAnimation = trigger('routeAnimations', [
  // ##################################################
  transition('Gallery => ChooseRealestateCategory', slideIn),
  // ##################################################
  transition('ChooseRealestateCategory => Gallery', slideOut),
]);
```
- Add data parameters to your routes, that will be used for animation triggers:
```
{
  path: '',
  component: GalleryComponent,
  pathMatch: 'full',
  data: { animation: 'Gallery' },
},
```

- Add animations.ts to your app-root component:
```
@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [slideInAnimation],
})
```
- Create a prepareRoute function that will take router as input inside app-root component:
```
public prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
```

- Call prepareRoute() in app-roots template:
```
<div class="main" [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"></router-outlet>
</div>
```



## Additional links and files:

-   Swagger extractor: [https://code.specto.si/specto/core-extractor](https://code.specto.si/specto/core-extractor)
    
-   Endpoint tests: [https://code.specto.si/specto/specto-endpoint-tests](https://code.specto.si/specto/specto-endpoint-tests)

## Known bugs:

-   Node-sass was removed in Angular 8, we are using it in the frontend, you need to run
    
    ```
    npm install node-sass --save-dev
    ```
    
    ref: [https://github.com/angular/angular-cli/issues/14497](https://github.com/angular/angular-cli/issues/14497)
