class loginPage {
    constructor() {
        this.login = 'text=Log in'
        this.emailField = "//*[@name='email']"
        this.passwordField = "//*[@name='password']"
        this.submit = "//button[text()='LOGIN']"
        this.signOut = 'text=Sign out'
        this.toast = "//div[contains(@class,'toast-message')]"
    }
}

module.exports = new loginPage();