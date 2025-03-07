let resp = {
  // contacts
  FullName: `Sy Le`,
  Location: `Morgan Hill, CA`,
  LocationURL: `www.google.com/maps/place/Morgan Hill,CA`,
  PhoneNumber: `408-216-3428`,
  Email: `le.nguyen.sy@gmail.com`,
  HomePageURL: `synle.github.io`,
  GithubURL: `github.com/synle`,
  LinkedinURL: `linkedin.com/in/syle1021`,
  ResumeURL: `/syle-resume.pdf`,

  Summary: `
    I am Sy Le, a software engineer with a decade of experience at LinkedIn, Salesforce, and Yahoo.
    I built software for CRM, marketing automation, e-commerce, and monitoring platforms.
    My skills include JavaScript/TypeScript and React for front-end, and Node.js / RemixJS / Express for back-end development.
  `.trim(),

  // entries
  Education: {
    rows: [
      {
        degree: `Master of Science`,
        program: `Artificial Intelligence`,
        school: `The University of Texas at Austin`,
        graduated: `2024 - Present`,
        items: [],
      },
      {
        degree: `Master of Science`,
        program: `Software Engineering`,
        school: `San Jose State University`,
        graduated: `Graduated 2019`,
      },
      {
        degree: `Bachelor of Science`,
        program: `Computer Science`,
        school: `San Jose State University`,
        graduated: `Graduated 2011`,
        items: [],
      },
    ],
  },

  //
  SideProjects: {
    rows: [
      {
        label: `react-dialog-mui`,
        link: `https://synle.github.io/react-dialog-mui`,
        description: `
          This React library streamlines Material-UI dialog usage by abstracting state management and providing convenient replicas of standard JavaScript dialog methods like alert, confirm, and prompt, simplifying common UX flows
        `._formatString(),
      },
      {
        label: `sqlui-native`,
        link: `https://synle.github.io/sqlui-native`,
        description: `
          a cross-platform native desktop application built with Electron and React,
          which can manage various databases, including MySQL, PostgreSQL, MS SQL Server, Cassandra, MongoDB, and Redis.
          It supports Windows, Mac, and Linux operating systems
        `._formatString(),
      },
      {
        label: `display-dj`,
        link: `https://synle.github.io/display-dj`,
        description: `
          a cross-platform desktop application that allows users to adjust brightness for integrated and external monitors and switch to dark mode.
          It is compatible with Windows and Mac operating systems
        `._formatString(),
      },
      {
        label: `import-fixer`,
        link: `https://synle.github.io/js-import-fixer`,
        description: `
          A deterministic npm executable module that removes duplicate or unused JavaScript/TypeScript imports
        `._formatString(),
      },
      {
        label: `Rest API Decorators`,
        link: `https://synle.github.io/restapi-typescript-decorators`,
        description: `
          a TypeScript library that make writing API Client for Nodejs and Frontend simpler inspired
          by <a href='https://square.github.io/retrofit/'>Square Retrofit library</a>
        `._formatString(),
      },
    ],
  },

  //
  Skills: {
    rows: [
      {
        label: `Programing Languages`,
        description: `
          JavaScript, TypeScript, Python, Java
        `._formatString(),
      },
      {
        label: `Front End`,
        description: `
          React, Redux, Reselect, React Query, Jest, Angular, Storybook, Sass, Grunt, Gulp, Puppeteer, Sinon
        `._formatString(),
      },
      {
        label: `Back End`,
        description: `
          Node.js, RemixJS, Express, next.js, Python / Flask, SQLAlchemy, Java / Spring Boot, Maven, Mockito, Jackson, Jetty
        `._formatString(),
      },
      {
        label: `Databases / Technologies`,
        description: `
          MySQL, Microsoft SQL Server, Redis, MongoDB, Selenium, Cassandra, RabbitMQ
        `._formatString(),
      },
      {
        label: `Tools`,
        description: `
          Git, Docker, Vagrant, VirtualBox, NGINX, JIRA, Bash, Jenkins CI, Github Actions, Azure, AWS and SauceLabs
        `._formatString(),
      },
    ],
  },
};
resp;
