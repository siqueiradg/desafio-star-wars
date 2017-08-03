import { StarWarsDesafioPage } from './app.po';

describe('star-wars-desafio App', () => {
  let page: StarWarsDesafioPage;

  beforeEach(() => {
    page = new StarWarsDesafioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
