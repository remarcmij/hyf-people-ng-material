import { HyfPeopleNgPage } from './app.po';

describe('hyf-people-ng App', function() {
  let page: HyfPeopleNgPage;

  beforeEach(() => {
    page = new HyfPeopleNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
