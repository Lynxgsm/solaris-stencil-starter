import { newE2EPage } from '@stencil/core/testing';

describe('solaris-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-icon></solaris-icon>');

    const element = await page.find('solaris-icon');
    expect(element).toHaveClass('hydrated');
  });
});
