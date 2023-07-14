# Application Start Guide

## Step 1: Setup

1. Download the application files to your local system.
2. Install the required Node.js modules by running the following command in your terminal: ```npm install```
## Step 2: Starting the Application
1. Open your terminal.
2. Navigate to the directory where you saved the application files.
3. Run the following command to start the application: ```node index.js```
4. The application will automatically select the necessary fields and open a browser window.
5. Please note that you will need to manually close the browser window when you're done using the application.

## Changing Field Values
If you need to change the values in the fields, follow the instructions below:

1. Locate the section of code where the field values are mentioned.
2. Edit the desired values in the code.
Take caution not to edit any other parts of the code to avoid unintended issues.
Please ensure that you make the necessary changes only in the designated areas to maintain the functionality of the application.

## Working explanied 
First we install puppeteer and launch it in headfull mode which means browser window opens for us when we perform all the actions.

I have divided the working into 4 actions(as given in the task):

### Action 1 -Changing in the "chain" field
The code waits for a text input field to appear(this is achieved via use of classname), then types "Arbitrum One" into the field and presses Enter.

### Action 2 - Putting Amount You Sell
The code selects an input field, clears its contents, and types "12" into it. You can modify the value to change the input.

### Action 3 - Selecting the currency for Selling
Issue faced and solved: When we click on the button, then only the section to fill it appears. So i had to perform the action to get the class of search bar feild.
To select the currency we target the class ="1k491an.css-1k491an button"  which is basically the drop down button. Once we click upon the button a new component appears which has a search box we target the input with class=".chakra-input.css-s1d1f4" and write "wbt" which makes all the similar token names appear. We select the 0th option from these options and click on it to select it.

### Action 4 - Selecting the Currency for buying
Issue Faced and solved: The previous button and this button had same classname so i had to store all the buttons os this class into buttonElements and then i accesed it using secondButton = buttonElemets[1].

Once done the process was similar to action 3 with "wbt" replaced with "usd" in which our currrency is the second option hence 1st was used in the options to access it.

### Action 5 - Selecting the second best exchange rate
Issue Faced and solved:- This section is a dynamic section and all the rates keep getting updated every 10sec and they also get reaaranged. First i let the rates be updated and for that i set a timeout of 5 sec. After that  code checks if a second div exists among the div elements with the specified class name and clicks on it if it exists. Otherwise, it logs a message indicating that the second div is not available yet.
This way i solved the error issue if only one exchage rate is there.


