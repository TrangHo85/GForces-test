const ComputerList = require("../page-objects/ComputerListPageObject");
const ComputerForm = require("../page-objects/ComputerPageObject");
const randomNumberString = require("../utilities/randomNumberString");

describe("Add/Edit/Delete Computer", () => {
  let computerName = "";
  beforeEach(() => {
    ComputerList.navigate();
  });

  it("User should be able to add a new computer sucessfully", () => {
    ComputerList.addNewComputerButton.click();
    const randomString = randomNumberString();
    computerName = `Auto Computer Name ${randomString}`;
    ComputerForm.modifyComputer(
      computerName,
      "2019-07-25",
      "2025-07-25",
      "Apple Inc."
    );
    ComputerForm.createButton.click();
    expect(ComputerList.computerTable.isDisplayed()).toBe(true);
    expect(ComputerList.alertMessage.getText()).toEqual(
      `Done ! Computer ${computerName} has been created`
    );
  });

  it("User should be able to modify an existing computer sucessfully", () => {
    ComputerList.searchBox.setValue(computerName);
    ComputerList.submitSearch();
    ComputerList.getComputerItemByName(computerName).click();
    const randomString = randomNumberString();
    computerName = `Auto Computer Name ${randomString}`;
    ComputerForm.modifyComputer(
      computerName,
      "2019-07-30",
      "2025-07-30",
      "Sony"
    );
    ComputerForm.saveButton.click();
    expect(ComputerList.computerTable.isDisplayed()).toBe(true);
    expect(ComputerList.alertMessage.getText()).toEqual(
      `Done ! Computer ${computerName} has been updated`
    );
  });

  it("User should be able to delete an existing computer sucessfully", () => {
    ComputerList.searchBox.setValue(computerName);
    ComputerList.submitSearch();
    ComputerList.getComputerItemByName(computerName).click();
    ComputerForm.deleteButton.click();
    expect(ComputerList.computerTable.isDisplayed()).toBe(true);
    expect(ComputerList.alertMessage.getText()).toEqual(
      `Done ! Computer ${computerName} has been deleted`
    );
  });
});

describe("Add new Computer", () => {
  let computerName = "";
  before(() => {
    ComputerList.navigate();
  });

  it("The computer should not be added if user click on cancel button", () => {
    ComputerList.addNewComputerButton.click();
    const randomString = randomNumberString();
    computerName = `Auto Computer Name ${randomString}`;
    ComputerForm.modifyComputer(
      computerName,
      "2019-07-25",
      "2025-07-25",
      "Apple Inc."
    );
    ComputerForm.cancelButton.click();
    ComputerList.searchBox.setValue(computerName);
    ComputerList.submitSearch();
    expect(ComputerList.nothingToDisplayMessage.isDisplayed()).toBe(true);
  });
});
