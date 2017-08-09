import { ListlocalPage } from './app.po';

describe('listlocal App', () => {
  let page: ListlocalPage;

  beforeEach(() => {
    page = new ListlocalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
