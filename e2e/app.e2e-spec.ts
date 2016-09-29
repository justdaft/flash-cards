import { FlashCardsPage } from './app.po';

describe('flash-cards App', function() {
  let page: FlashCardsPage;

  beforeEach(() => {
    page = new FlashCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
