describe('Test New Orders Flow', () => {
    it('should tap on new orders', async () => {
        await $('//XCUIElementTypeStaticText[@name=\"New Orders\"]').waitForDisplayed({ timeout: 5000 });
        await $('//XCUIElementTypeStaticText[@name=\"New Orders\"]').click();
      });
    
    it('should tap on order 1224', async () => {
      await $('~Order#1224').waitForDisplayed({ timeout: 5000 });
      expect(await $('~Order#1224').isDisplayed()).toBe(true);
      await $('~Order#1224').click();});
  });