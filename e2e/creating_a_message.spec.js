describe('Creating and deleting a message', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should add the message to the list', async () => {
    await element(by.id('messageText')).typeText('New Message');
    await element(by.id('saveButton')).tap();
    await element(by.id('messageText')).tap();
    await element(by.id('messageText')).typeText('Second Message');
    await element(by.id('saveButton')).tap();

    await expect(element(by.id('messageText'))).toHaveText('');
    await expect(element(by.label('New Message'))).toBeVisible();
  });

  it('should delete the message to the list', async () => {
    await element(by.id('deleteNew Message')).tap();

    await expect(element(by.label('New Message'))).toBeNotVisible();
  });
});