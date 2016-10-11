export class App {
  configureRouter(config, router) {
    config.title = 'Project Chyno';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
       { route: ['kota', 'kota'], name: 'kota',      moduleId: './kota',      nav: true, title: 'Kota' }
     /*
      { route: 'users', name: 'users', moduleId: './users', nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
      */

    ]);

    this.router = router;
  }
}
