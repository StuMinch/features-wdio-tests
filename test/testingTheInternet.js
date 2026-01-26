describe('Testing The Internet', () => {
  
  it('should click through lots of things', async () => {
    await browser.setTimeout({ 'script': 60000 });
    await browser.url('https://the-internet.herokuapp.com/');
    expect(browser).toHaveTitle('The Internet');
    await browser.url('https://the-internet.herokuapp.com/login');
    expect(browser).toHaveText('Login Page');
    const username = await $('#username');
    const password = await $('#password');
    const login = await $('#login > button')
    await username.click();
    await username.setValue('tomsmith');
    await password.click();
    await password.setValue('SuperSecretPassword!');
    await login.click();
    const logout = await $('#content > div > a')
    await browser.url('https://the-internet.herokuapp.com/checkboxes');
    const checkboxOne = await $('#checkboxes > input[type=checkbox]:nth-child(1)')
    const checkboxTwo = await $('#checkboxes > input[type=checkbox]:nth-child(3)')
    await checkboxOne.click();
    await checkboxTwo.click();
  });

});

