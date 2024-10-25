//your code here!

// Select the list container
const list = document.getElementById('infi-list');

// Set initial items count and items to add per scroll
const initialItems = 999;
const itemsPerScroll = 1;

// Function to add items to the list
function addItems(numItems) {
  for (let i = 0; i < numItems; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Initialize with default items
addItems(initialItems);

// Event listener for scrolling within the list container
list.addEventListener('scroll', () => {
  // Check if user scrolled to the bottom of the list container
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(itemsPerScroll); // Add more items
  }
});
