class ComputerListPageObject {
  navigate() {
    browser.url("/");
  }

  get computerNameColumn() {
    return browser.$("a=Computer name");
  }

  get introducedColumn() {
    return browser.$("a=Introduced");
  }

  get disContinuedColumn() {
    return browser.$("a=Discontinued");
  }

  get companyColumn() {
    return browser.$("a=Company");
  }

  get addNewComputerButton() {
    return browser.$("#add");
  }

  get alertMessage() {
    return browser.$(".alert-message");
  }

  get searchBox() {
    return browser.$("#searchbox");
  }

  get filterByNameButton() {
    return browser.$("#searchsubmit");
  }

  submitSearch() {
    this.filterByNameButton.click();
  }

  get computerTable() {
    return browser.$("table[class='computers zebra-striped']");
  }

  getComputerItemByName(computerName) {
    return browser.$(`a=${computerName}`);
  }

  get computerItems() {
    return browser.$$(".computers  tbody tr");
  }

  get paginationPrevButton() {
    return browser.$("#pagination .prev");
  }

  get paginationNextButton() {
    return browser.$("#pagination .next");
  }

  get paginationCurrentNumberText() {
    return browser.$("#pagination .current");
  }

  get nothingToDisplayMessage() {
    return browser.$("em=Nothing to display");
  }

  get computerNames() {
    return browser.$$(".computers tbody tr td a");
}
}

module.exports = new ComputerListPageObject();
