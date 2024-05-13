import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const { window } = new JSDOM(
  '<!DOCTYPE html><html><body><div id="fileContentDiv"></div><input type="file" id="fileInput"></body></html>'
);
global.window = window;
global.document = window.document;
const fileInput = window.document.getElementById("fileInput");
const fileContentDiv = window.document.getElementById("fileContentDiv");

describe("csvFile", () => {
  beforeEach(() => {
    fileContentDiv.innerHTML = "";
  });

  test("should parse CSV file and create table", () => {
    const csvFilePath = path.join(__dirname, "test.csv");
    const csvFile = fs.readFileSync(csvFilePath, "utf-8");
    const file = new File([csvFile], "test.csv", {
      type: "text/csv",
    });
    const changeEvent = new Event("change", {
      bubbles: true,
    });
    Object.defineProperty(fileInput, "files", {
      value: [file],
    });
    fileInput.dispatchEvent(changeEvent);

    const table = fileContentDiv.querySelector("table");
    expect(table).not.toBeNull();

    const rows = table.querySelectorAll("tr");
    expect(rows.length).toBe(3);

    const cells = rows[1].querySelectorAll("td");
    expect(cells.length).toBe(3);
    expect(cells[0].textContent).toBe("John");
    expect(cells[1].textContent).toBe("Doe");
    expect(cells[2].textContent).toBe("30");
  });

  test("should handle empty CSV file", () => {
    const file = new File([""], "empty.csv", {
      type: "text/csv",
    });
    const changeEvent = new Event("change", {
      bubbles: true,
    });
    Object.defineProperty(fileInput, "files", {
      value: [file],
    });
    fileInput.dispatchEvent(changeEvent);

    const table = fileContentDiv.querySelector("table");
    expect(table).not.toBeNull();

    const rows = table.querySelectorAll("tr");
    expect(rows.length).toBe(1);
  });
});
