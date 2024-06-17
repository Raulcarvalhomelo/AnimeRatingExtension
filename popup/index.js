// Select the text in the active tab
document.addEventListener('DOMContentLoaded', async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let result;
    try {
      [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => getSelection().toString(),
      });
    } catch (e) {
      return; 
    }
    document.body.append(result);
  });

document.body.append('Hello, World!');