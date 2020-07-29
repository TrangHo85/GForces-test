const ComputerList = require("../page-objects/ComputerListPageObject");
const ComputerForm = require("../page-objects/ComputerPageObject");
const randomNumberString = require("../utilities/randomNumberString");
const isSorted = require("../utilities/isSorted");

describe("Filter Computer", () => {
  let computerName = "";
  before(() => {
    ComputerList.navigate();
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
  });

  it("A just created Computer should be show in the search result when filtering by its name", () => {
    ComputerList.searchBox.setValue(computerName);
    ComputerList.submitSearch();
    expect(ComputerList.getComputerItemByName(computerName).isDisplayed()).toBe(
      true
    );
  });

  it("A just created Computer should be show in the search result when filtering by part of its name", () => {
    ComputerList.searchBox.setValue("Auto Computer Name");
    ComputerList.submitSearch();
    expect(ComputerList.getComputerItemByName(computerName).isDisplayed()).toBe(
      true
    );
  });

  after(() => {
    ComputerList.getComputerItemByName(computerName).click();
    ComputerForm.deleteButton.click();
  });
});

describe("Computer List", () => {
  beforeEach(() => {
    ComputerList.navigate();
  });

  it("Should display the Computer List with all Column Headers", () => {
    expect(ComputerList.computerTable.isDisplayed()).toBe(true);
    expect(ComputerList.computerNameColumn.isDisplayed()).toBe(true);
    expect(ComputerList.introducedColumn.isDisplayed()).toBe(true);
    expect(ComputerList.disContinuedColumn.isDisplayed()).toBe(true);
    expect(ComputerList.companyColumn.isDisplayed()).toBe(true);
  });

  it("Pagination - Should display 10 items on each Page", () => {
    expect(ComputerList.computerItems.length).toEqual(10);
    expect(
      ComputerList.paginationPrevButton
        .getAttribute("class")
        .includes("disabled")
    ).toBe(true);
    expect(
      ComputerList.paginationNextButton
        .getAttribute("class")
        .includes("disabled")
    ).toBe(false);
    expect(ComputerList.paginationCurrentNumberText.getText()).toContain(
      "Displaying 1 to 10"
    );
  });

  it("should be sorted by Computer Name in ascending on first load", () => {
    const nameList = [];
    ComputerList.computerNames.forEach((ele) => {
      nameList.push(ele.getText().toLowerCase());
    });
    expect(isSorted(nameList, "asc")).toBe(true);
  });

  it("should be sorted by Computer Name in descending when clicking on Column Name", () => {
    ComputerList.computerNameColumn.click();
    const nameList = [];
    ComputerList.computerNames.forEach((ele) => {
      nameList.push(ele.getText().toLowerCase());
    });
    expect(isSorted(nameList, "desc")).toBe(true);
  });
});
