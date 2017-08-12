import { Ng2PocPage } from './app.po';

describe('ng2-poc App', () => {
  let page: Ng2PocPage;

  beforeEach(() => {
    page = new Ng2PocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
