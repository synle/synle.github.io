String.prototype._reformatItems = function () {
  return this.split('\n')
    .map((s) => s.trim())
    .filter((s) => s)
    .map((s) => `${s}.`);
};

const resp = {
  Summary: `
I'm Sy Le, a software engineer with a decade of experience at LinkedIn, Salesforce, and Yahoo. I built software for CRM, marketing automation, e-commerce, and monitoring platforms. My skills include JavaScript/TypeScript and React for front-end, and Node.js / RemixJS / Express for back-end development.
    `.trim(),
  Education: {
    rows: [
      {
        degree: 'Master of Science',
        program: 'Software Engineering',
        school: 'San Jose State University',
        graduated: 'Graduated 2019',
        items: ['Graduated with Specialization in Cloud & Mobile Computing.'],
      },
      {
        degree: 'Bachelor of Science',
        program: 'Computer Science',
        school: 'San Jose State University',
        graduated: 'Graduated 2011',
        items: [
          `Graduated Cum Laude with Specialization in Computer Graphics.`,
        ],
      },
    ],
  },
  SideProjects: {
    rows: [
      {
        items: `
<a href='//synle.github.io/sqlui-native'><strong class='mr1'>sqlui-native</strong></a>: a cross-platform native desktop application built with Electron and React, which can manage various databases, including MySQL, PostgreSQL, MS SQL Server, Cassandra, MongoDB, and Redis. It supports Windows, Mac, and Linux operating systems

<a href='//synle.github.io/display-dj'><strong class='mr1'>display-dj</strong></a>: a cross-platform desktop application that allows users to adjust brightness for integrated and external monitors and switch to dark mode. It is compatible with Windows and Mac operating systems

<a href='//synle.github.io/js-import-fixer'><strong class='mr1'>import-fixer</strong></a>: A deterministic npm executable module that removes duplicate or unused JavaScript/TypeScript imports

<a href='//synle.github.io/restapi-typescript-decorators'><strong class='mr1'>Rest API Decorators</strong></a>: a TypeScript library that make writing API Client for Nodejs and Frontend simpler inspired by <a href='//square.github.io/retrofit/'><strong>Square Retrofit library</strong></a>
          `._reformatItems(),
      },
    ],
  },
  Skills: {
    rows: [
      {
        items: `
<strong class='mr1'>Front End:</strong> JavaScript, TypeScript, React, Redux, Reselect, React Query, Jest, Angular, Storybook, Sass, Grunt, Gulp, Puppeteer, Sinon

<strong class='mr1'>Back End:</strong> Node.js, RemixJS, Express, next.js, Python, Flask, Sqlalchemy, Java, Spring Boot, Maven, Mockito, Jackson, Jetty

<strong class='mr1'>Databases / Technologies:</strong> MySQL, Microsoft SQL Server, Redis, MongoDB, Selenium, Cassandra, RabbitMQ

<strong class='mr1'>Tools:</strong> Git, Docker, Vagrant, VirtualBox, NGINX, JIRA, Bash, Jenkins CI, Github Actions, Azure, AWS and SauceLabs
          `._reformatItems(),
      },
    ],
  },
};
resp;
