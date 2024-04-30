import { newE2EPage } from '@stencil/core/testing';

describe('solaris-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-avatar></solaris-avatar>');

    const element = await page.find('solaris-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
