import { newE2EPage } from '@stencil/core/testing';

describe('solaris-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-button></solaris-button>');

    const element = await page.find('solaris-button');
    expect(element).toHaveClass('hydrated');
  });
});
