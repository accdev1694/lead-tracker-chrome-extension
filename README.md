# Leads Tracker

A simple web app for tracking and saving leads (URLs) using browser storage (localStorage). It allows users to save leads manually by input or by using the current active browser tab URL. It also supports clearing all saved leads.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Event Listeners](#event-listeners)
  - [Functions](#functions)
- [Browser Compatibility](#browser-compatibility)
- [Deploying the Extension on Chrome](#deploying-the-extension-on-chrome)
- [Contributing](#contributing)
- [License](#license)

## Features

- Save leads manually by entering them into an input field.
- Save the URL of the currently active browser tab.
- Persist leads using local storage.
- Clear all saved leads.

## Installation

1. Clone the repository or download the source files.
2. Open the `index.html` file in a browser.

## Usage

1. Enter a URL into the input field and click the "Save Input" button to add the URL to the list.
2. Click the "Save Tab" button to save the current browser tab's URL.
3. Click "Clear All" to remove all saved leads.
4. The saved leads are displayed in a list and persisted using local storage.

## Code Overview

### Event Listeners

- **`inputBtnEl.addEventListener("click")`:** Triggers when the "Save Input" button is clicked. It adds the URL entered in the input field to the list and stores it in local storage.
  
- **`clearAllEl.addEventListener("click")`:** Triggers when the "Clear All" button is clicked. It clears all leads from the list and local storage.

- **`tabBtnEl.addEventListener("click")`:** Triggers when the "Save Tab" button is clicked. It saves the URL of the current active browser tab into the list and local storage.

### Functions

- **`renderLeads(leads)`:** 
  - Clears the current list of leads displayed in the UI.
  - Iterates through the `leads` array and generates a list item for each URL.
  - Displays each URL as a clickable link in a new tab.

## Browser Compatibility

- The app works on any modern browser that supports:
  - `localStorage`
  - `chrome.tabs.query` API (for saving the current tab)

## Deploying the Extension on Chrome

To run this project as a Chrome extension, follow these steps:

1. **Prepare the Project:**
   - Clone the repo to your computer. Ensure the `manifest.json` file is in your project directory. This file should define the Chrome extension’s metadata (name, version, permissions, etc.).
   
2. **Load the Extension Locally:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle at the top right).
   - Click the **Load unpacked** button.
   - Select the project directory that contains the `manifest.json` file.

3. **Run the Extension:**
   - Once the extension is loaded, it will appear in the extensions list.
   - You can now open a new tab, click on the extension icon, and start using the app.

4. **Update the Extension:**
   - If you make changes to the code, go back to `chrome://extensions/` and hit the **Reload** button under your extension to see the updates.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests.

## License

This project is licensed under the MIT License.

## Repository
https://github.com/accdev1694/lead-tracker-chrome-extension

## Deployed Site
https://leadgeneratorchromeextension.netlify.app/

