export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff7938062ecfc31fcd6bfcb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ryjv5kff',
                  apiId: '31164812-987a-425e-a07b-cc2f88e8bed7'
                },
                {
                  buildHookId: '5ff7938114ce6e26da7e1e41',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nmcm7v8a',
                  apiId: 'ad4600bf-6616-4e80-88a4-f0fca2c5b77d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mgallagher56/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nmcm7v8a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
