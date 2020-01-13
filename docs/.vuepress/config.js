module.exports = {
    title: 'Obole Dev',
    description: 'Fiches méthodologiques pour le déroulement d\'un projet dev chez Obole Dev',
    themeConfig: {
        // logo: './assets/img/logo_obole.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Suivi de Projet', link: '/project-management/' },
          { text: 'Outils de développement', link: '/stack/' }
        ],
        sidebar: {
          '/project-management/': [
            '',
            ['tools', 'Outils de suivi'],
            ['backlog', 'La constitution du backlog'],
            ['design', 'Le cas particulier du design'],
            ['rituals', 'Le sprint']
          ],
          
          '/stack/': [
            ''
          ]
        }
      }
  }