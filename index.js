//getting puppeteer
const puppeteer = require("puppeteer");

(async () => {
  // Launch headful browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });

  // Opening a new tab
  const page = await browser.newPage();

  // Go to DefiLlama Swap website
  await page.goto("https://swap.defillama.com/");

  // Action 1 -Changing in the "chain" field
  await page.waitForSelector('.css-ern9ru input[type="text"]');
  await page.type('.css-ern9ru input[type="text"]', "Arbitrum One");
  await page.keyboard.press("Enter");

  // Action 2 - Amount You Sell
  const inputSelector = '.css-79elbk input[type="text"]';
  await page.waitForSelector(inputSelector);
  await page.click(inputSelector);
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  //if you want to change the value of "You Sell" field just edit 12 and give the value that you want
  await page.keyboard.type("12");

  //Action 3

  // Access the button within the div with class name 'css-1k491an'
  const buttonElements = await page.$$(".css-1k491an button");

  // Access the second button element 
  const secondButton = buttonElements[1];

  // Click the second button to open the dropdown
  await secondButton.click();

  // Wait for the search box to be visible and interactable
  await page.waitForSelector(".chakra-input.css-s1d1f4");

  // Type "usd coin" into the search box
  await page.type(".chakra-input.css-s1d1f4", "usd coin");

  // Wait for the second option to be visible and interactable
  await page.waitForSelector('.List [class^="sc-b49748d5-3"]');

  // Click on the second option
  const options = await page.$$('[class^="sc-b49748d5-3"]');
  await options[3].click();

  //Action 4

  await page.waitForSelector(".sc-18d0abec-0.knYyMy.RouteWrapper");

  // Waiting for 5 seconds so that every div appears and gets reaaranged
  await page.waitForTimeout(5000);

  // Access all the divs with the specified class name
  const divElements = await page.$$(".sc-18d0abec-0.knYyMy.RouteWrapper");

  // Check if the second div exists in the list
  if (divElements.length > 1) {
    // Access the second div (index 1)
    const secondDiv = divElements[1];

    // Click the second div
    await secondDiv.click();
  } else {
    console.log("The second div is not available yet.");
  }
})();
