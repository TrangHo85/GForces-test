class ComputerPageObject {
  get computerNameInput() {
    return browser.$("#name");
  }

  get introducedInput() {
    return browser.$("#introduced");
  }

  get discontinuedInput() {
    return browser.$("#discontinued");
  }

  get companySelectBox() {
    return browser.$("#company");
  }

  getCompanyOptionByName(companyName) {
    return this.companySelectBox.$(`option=${companyName}`);
  }

  get createButton() {
    return browser.$("input[value='Create this computer']");
  }

  get saveButton() {
    return browser.$("input[value='Save this computer']");
  }

  get deleteButton() {
    return browser.$("input[value='Delete this computer']");
  }

  get cancelButton() {
    return browser.$("a=Cancel");
  }

  modifyComputer(computerName, introducedDate, discontinuedDate, companyName) {
    this.computerNameInput.setValue(computerName);
    this.introducedInput.setValue(introducedDate);
    this.discontinuedInput.setValue(discontinuedDate);
    this.getCompanyOptionByName(companyName).click();
  }
}

module.exports = new ComputerPageObject();
