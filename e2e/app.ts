import { browser, by, element } from 'protractor';

export const navigateTo = () => browser.get('/');
export const getParagraphText = () => element(by.css('app-root h1'));
