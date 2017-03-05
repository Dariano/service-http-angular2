import { ServiceHttpAngular2Page } from './app.po';

describe('service-http-angular2 App', () => {
  let page: ServiceHttpAngular2Page;

  beforeEach(() => {
    page = new ServiceHttpAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
