const sublinks = [
    {
      page: 'CV/Resume',
      links: [
        { label: 'CV/Resume intéractif', icon: 'fas fa-address-card', url: 'resume.html' },
        { label: 'CV/Resume (PDF)', icon: 'fas fa-address-card', url: 'cv.pdf' },
        { label: 'Certificat UDEMY', icon: 'fas fa-graduation-cap', url: 'https://www.udemy.com/certificate/UC-552f2d06-6b8f-4d29-8669-b531ec459154' },
      ],
    },
    {
      page: 'Portfolio',
      links: [
        { label : 'Présentation de mes projets', icon : 'fas fa-book', url : './portfolio.html'},
        { label: 'Catalogue de recettes de cuisine', icon: 'fas fa-book', url: '/RecipeApp/index.html' },
        { label: 'Quiz : géographie du Canada', icon: 'fas fa-book', url: '/CapitalQuiz/welcome.html' },
      ],
    },
    {
      page: 'Langue',
      links: [
        { label: 'FR', icon: 'fas fa-language', url: '/welcome/FR/indexFR.html' },
        { label: 'EN', icon: 'fas fa-language', url: '/welcome/EN/indexEN.html' },
      ],
    },
  ];
  
  export default sublinks;