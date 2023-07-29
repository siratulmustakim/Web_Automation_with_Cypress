import LoginPage from "../pages/LoginPage";
import MakeAppoinmentPage from "../pages/MakeAppoinmentPage";

describe('Appoinment', ()=>{
    const login = new LoginPage();
    const makeAppoinmentPage = new MakeAppoinmentPage();

    beforeEach(()=>{
        cy.viewport(1920, 1080);
        login.loginToTarget('John Doe', 'ThisIsNotAPassword');
    });

    it('User appoinment', ()=>{
        makeAppoinmentPage.bookAppoinment();
    })
})