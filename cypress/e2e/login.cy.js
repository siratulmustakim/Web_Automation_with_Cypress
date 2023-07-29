import LoginPage from "../pages/LoginPage"

describe('login', ()=>{
    const loginPage = new LoginPage();

    it('Valid creds', ()=>{
        loginPage.loginToTarget('John Doe', 'ThisIsNotAPassword')
    })
    it('Invalid creds', ()=>{
        loginPage.loginToTarget('wrongUser', 'wrongPass');
        loginPage.invalidAssertion;
    })
})