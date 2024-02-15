import { newE2EPage } from '@stencil/core/testing';

describe('solaris-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-switch></solaris-switch>');

    const element = await page.find('solaris-switch');
    expect(element).toHaveClass('hydrated');
  });
});
