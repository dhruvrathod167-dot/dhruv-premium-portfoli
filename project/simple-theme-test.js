// Simple Theme Toggle Test
// Copy and paste this into your browser console (F12) to test the theme toggle

console.log('🎨 Theme Toggle Test');

// Test 1: Check if theme toggle button exists
const themeToggle = document.querySelector('button[aria-label*="Switch to"]');
if (themeToggle) {
  console.log('✅ Theme toggle button found');
} else {
  console.log('❌ Theme toggle button not found');
  console.log('Looking for alternative theme toggle...');
  const altToggle = document.querySelector('button[title*="theme"], button[aria-label*="theme"]');
  if (altToggle) {
    console.log('✅ Alternative theme toggle found:', altToggle);
  }
}

// Test 2: Check current theme
const isDarkMode = document.documentElement.classList.contains('dark');
console.log(`🌙 Current theme: ${isDarkMode ? 'Dark' : 'Light'}`);

// Test 3: Check localStorage
const savedTheme = localStorage.getItem('portfolio-theme');
console.log(`💾 Saved theme: ${savedTheme || 'None'}`);

// Test 4: Test theme switching
if (themeToggle) {
  console.log('🔄 Testing theme switch...');
  
  // Click the toggle
  themeToggle.click();
  
  // Check if theme changed
  setTimeout(() => {
    const newIsDarkMode = document.documentElement.classList.contains('dark');
    console.log(`🌙 Theme after click: ${newIsDarkMode ? 'Dark' : 'Light'}`);
    
    // Check localStorage
    const newSavedTheme = localStorage.getItem('portfolio-theme');
    console.log(`💾 New saved theme: ${newSavedTheme || 'None'}`);
    
    // Switch back
    themeToggle.click();
  }, 500);
}

// Test 5: Check CSS variables
const rootStyles = getComputedStyle(document.documentElement);
const bgColor = rootStyles.getPropertyValue('--background');
const textColor = rootStyles.getPropertyValue('--text-primary');
console.log(`🎨 Background color: ${bgColor}`);
console.log(`🎨 Text color: ${textColor}`);

console.log('🎉 Test complete!');