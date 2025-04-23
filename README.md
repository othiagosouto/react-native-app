# Module 2 Homework

As your CTO and Tech Leader want to continue to expand their digital presence, it becomes imperative to reach a wider audience through multiple platforms. Adding a mobile app to complement your existing web app is a strategic step towards improving user experience and increasing engagement.
Now that you know React, let's embark on an exciting journey into the world of React Native.

React Native enables developers to write code in JavaScript or TypeScript and deploy it on both Android and iOS platforms, maximizing code reusability and reducing development time.

### Homework management :house:

The final result of all homework is the React Native Application full of features implemented iteratively in the end phase of each module in the course. In order to keep consistency and track all of your changes we highly recommend you to create your own GitHub repository where your work as a participant will be stored. Your GitHub repository should be shared with all trainers, which will enable us to verify your work and communicate:

- Tomasz Leśniakiewicz - https://github.com/rinej
- Bartłomiej Tomczyk - https://github.com/barttom
- Michał Staniewski - https://github.com/michalstaniewski-cs

Each module in the course will end up with homework consisting of a few tasks to fulfil. We would like to suggest a comfortable system for you to submit each task of the homework as a separate PR to the main branch in your repository. This will create a space for us to communicate with you, by doing code reviews - thanks to that we will be able to check your homework, discuss some uncertainties, or respond to questions you will leave in the PR. In case you have any trouble with homework you can always book a 1 to 1 session with the trainer, and also don't hesitate to ask your questions in the dedicated communication channel. Keep in mind that you don't have to worry about being blocked for the next homework, every homework will have a starting point, so you always will be able to override the content of your repository with the prepared starting point.

### The goal of this module’s homework

The goal of this homework is to build the mobile part of the Lotteries app. We will focus on specific features of React Native, such as navigation, core components, styling, lists and data persisting.

### Starting point

You should be able to continue working on the same homework project but if you don’t have it available or you want to start fresh here is a starting point for this homework - 

https://github.com/hellofresh/react-native-training-module-02-homework


### Checkpoints 💡

The homework repository contains periodic checkpoints for your convenience. You will see callouts denoting the current checkpoint throughout this instruction. They will look something like this:


> 💡 You are now here → `checkpoint-xyz`

Feel free to check out the corresponding branch of any given checkpoint if you’re struggling or simply want to compare your solution with ours.

With that out of the way, let’s start!

## Part 1: Project setup
In case of environment issues please follow https://reactnative.dev/docs/getting-started-without-a-framework

<details>
  <summary><b>Step 1: Install new project without framework</b></summary><br>

1. Run the following command in the root of the repository to create new expo project and TypeScript already setup. Choose `mobile` as the name of the application

  ```bash
    npx @react-native-community/cli@latest init mobile
  ```

2. Navigate to the directory and run one of the following npm commands

```bash
 cd mobile
 npm start
``` 
In the new terminal window run
```bash
npm run ios && npm run andriod
```

</details>

<details>
  <summary><b>Step 2: Configure `eslint` and `prettier`</b></summary><br>

  1.Install necessary dependencies for eslint
  ```bash
    npm install --save-dev eslint prettier@3 eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-filenames-simple eslint-plugin-import eslint-plugin-jest eslint-plugin-prefer-arrow eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-testing-library 
  ```

  2. Modify configuration files for ESLint [config](https://github.com/hellofresh/shared-mobile-modules/blob/master/.eslintrc.js):
  ```js
  // .eslintrc
const config = {
  extends: [
    '@react-native',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: [
        'babel.config.js',
        'metro.config.js',
        'react-native.config.js',
        '**/__tests__/**/*.ts?(x)',
        'scripts/**/*.?(c)js',
        '**/?(*.)+(spec|test).ts?(x)',
        '.lintstagedrc.js',
      ],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['src/**/*.js?(x)', 'app/**/*.js?(x)'],
      excludedFiles: [
        'src/depman.js',
        'babel.config.js',
        'app/index.js',
        'metro.config.js',
        'react-native.config.js',
      ],
      rules: {
        'no-restricted-syntax': [
          'error',
          {
            selector: 'Program',
            message:
              'JavaScript files (.js, .jsx) are not allowed. Use TypeScript (.ts, .tsx) instead.',
          },
        ],
      },
    },
    {
      files: ['src/**/*', 'app/src/**/*'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase'],
            filter: {
              regex: '^use[A-Z]',
              match: true,
            },
          },
          {
            selector: 'variable',
            format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        'prefer-arrow/prefer-arrow-functions': [
          'error',
          {
            disallowPrototype: true,
            singleReturnOnly: false,
            classPropertiesAllowed: false,
          },
        ],
        'import/no-default-export': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'react/jsx-pascal-case': ['error', {allowNamespace: true}],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: ['external', 'internal', 'parent', 'sibling', 'index'],
            alphabetize: {order: 'asc', caseInsensitive: true},
            pathGroups: [
              {
                pattern: '@assets/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@data-access/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@entry-providers/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@features/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@libs/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@modules/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@navigation/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@operations/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@query/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@types/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@zest/**',
                group: 'internal',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
          },
        ],
        'id-length': [
          'error',
          {min: 3, properties: 'never', exceptions: ['_', 'id', 'z']},
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              '@libs/*/*',

              // Allow exact imports (no deeper nesting)
              '!@libs/*',

              '!@libs/native-modules',
              '!@libs/native-modules/*',

              '!@data-access/native',
              '!@data-access/native/*',

              '!@data-access/query',
              '!@data-access/query/*',

              '!@data-access/graphql',
              '!@data-access/graphql/*',

              // Disallow deeper imports
              '@libs/native-modules/*/*',
              '@data-access/native/*/*',
              '@data-access/query/*/*',
              '@data-access/graphql/*/*',
            ],
            paths: [
              // ❌ Prevent importing gql from @apollo/client
              {
                name: '@apollo/client',
                importNames: ['gql'],
                message: 'Please import gql from @data-access/graphql instead.',
              },
            ],
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'prefer-arrow',
    'import',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'react-native/no-inline-styles': 'error',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
    curly: 'error',
    'no-var': 'error',
    'no-loop-func': 'error',
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-restricted-disable': [
      'warn',
      'eslint-comments/no-restricted-disable',
      '@typescript-eslint/no-explicit-any',
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': false,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
  },
  ignorePatterns: ['!.*'],
};

module.exports = config;

  ```
  ```js
  // .prettierrc
module.exports = {
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
};

  ```


  3. Check you code with eslint plugin and fix the issues
  ```bash
npm run lint
  ```

4. Remove `.git` directory from '/mobile'
  ```bash
rm -rf mobile/.git
  ```

<b>Congratulations. You already set your mobile project!</b>


</details>

> 💡 You are now here → [Checkpoint 1](../../tree/checkpoint-1) 

## Part 2: Add a lottery

<details>
  <summary>In this part we will implement the given UI:</summary> 

  <img width="511" alt="ui" src="./images/02.gif" />


</details>

1. Install react navigation: https://reactnavigation.org/docs/hello-react-navigation
2. Create native stack navigator: https://reactnavigation.org/docs/hello-react-navigation
3. Add two screens: `Home` and `AddLottery`
4. Create `FAB` and `Form` components
5. You can reuse and copy `useNewLottery` hook from web part
6. Add form validation:
  <details>
    <summary>Form validation</summary>
    
  <img width="511" alt="ui" src="./images/01.png" />

    
  </details>


Add lottery feature should have following things implemented:

- FAB button to navigate to new screens
- New “Add lottery screen” with add new lottery form
- Forms should be validated (implement the same functionality as on web)
- Loading state should be present when form is submitted
- After successful submission we should be navigated back to Home Screen and Toast with a `'New lottery added successfully!'` message should be displayed

💡Tips:
- if you want to store API's url into environment variable use https://www.npmjs.com/package/react-native-dotenv
- for calling API in mobile devices worth to set it as local IP of your device to avoid connections issues
- for icons please use https://github.com/oblador/react-native-vector-icons


> 💡 You are now here → [Checkpoint 2](../../tree/checkpoint-2)

## Part 3: List lotteries

Given the UI design implement List lotteries feature. 

<details>
  <summary><b>Fetch and display lottery data</b></summary><br>

<img width="511" alt="Screenshot 2023-07-17 at 14 46 14" src="./images/02.png">


</details>

<details>
  <summary><b>Add text input to filter fetched lotteries</b></summary><br>

<img width="511" alt="Screenshot 2023-07-17 at 14 47 16" src="./images/03.png">


</details>

<details>
  <summary><b>Handle no search result case</b></summary><br>

<img width="511" alt="Screenshot 2023-07-17 at 14 48 54" src="./images/04.png">


</details>




List lotteries feature:

- Should display list off lotteries with react-query (you can be inspired by `useLotteries` hook from the web part
- Adding a new lottery should re-fetch the lotteries
- Loading state should be present while fetching the lotteries
- Should have text input to with a search icon
- Typing in the input should filter the results
- When there are no search results for a given filter, no search result information should be displayed


> 💡 You are now here → [Checkpoint 3](../../tree/checkpoint-3)

## Part 4: Store register lottery data


<details>
  <summary><b>Make lotteries selectable and add `Register` button</b></summary><br>
  
<img width="511" alt="Screenshot 2023-07-17 at 14 11 22" src="./images/06.png">

</details>

<details>
  <summary><b>Add register modal with name input and validation:</b></summary><br>

<img width="511" alt="Screenshot 2023-07-17 at 14 10 30" src="./images/07.png">


</details>

<details>
  <summary>Registered lotteries:</summary>

<img width="511" alt="Screenshot 2023-07-17 at 14 08 42" src="./images/08.png">

  
</details>

Registered lotteries feature:
Please use Zustand for this feature

- Lotteries should be selectable by pressing on them
- Register button should open a modal to register for selected lotteries
- Register button should be disabled when no lotteries are selected
- Register modal should close after successful submission and registered lottery IDs need to be persisted in AsyncStorage
- Registered lotteries should be grayed-out and not be selectable


> 💡 You are now here → [Checkpoint 4](../../tree/checkpoint-4)
