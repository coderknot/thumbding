import { ThumbdingPage } from './app.po';

describe('thumbding App', () => {
  let page: ThumbdingPage;

  beforeEach(() => {
    page = new ThumbdingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
