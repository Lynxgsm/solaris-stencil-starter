import { newE2EPage } from '@stencil/core/testing';

describe('solaris-theme-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-theme-provider></solaris-theme-provider>');

    const element = await page.find('solaris-theme-provider');
    expect(element).toHaveClass('hydrated');
  });
});
