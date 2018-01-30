import * as appPage from './app';

describe('ng-atl App', () => {
  it('should display welcome message', async() => {
    await appPage.navigateTo();

    expect(await appPage.getParagraphText().getText()).toEqual('Welcome to app!');
  });
});
