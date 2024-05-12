module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{kebabCase name}}/page.tsx',
        templateFile: 'templates/Page.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/app/[locale]/dictionaries/en/{{camelCase name}}.json',
        templateFile: '{}'
      },
      {
        type: 'add',
        path: '../src/app/[locale]/dictionaries/pt/{{camelCase name}}.json',
        templateFile: '{}'
      }
    ]
  })
}
