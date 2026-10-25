// Theme System Test Script
// Run this in the browser console to verify theme functionality

console.log('🎨 Theme System Test Suite');

// Test 1: Check if theme toggle exists
const themeToggle = document.querySelector('button[aria-label*="Switch to"]');
if (themeToggle) {
  console.log('✅ Theme toggle found');
} else {
  console.log('❌ Theme toggle not found');
}

// Test 2: Check if dark mode class exists
const isDarkMode = document.documentElement.classList.contains('dark');
console.log(`🌙 Current theme: ${isDarkMode ? 'Dark' : 'Light'}`);

// Test 3: Check theme variables
const rootStyles = getComputedStyle(document.documentElement);
const themeVariables = [
  '--background',
  '--background-secondary',
  '--surface',
  '--surface-hover',
  '--text-primary',
  '--text-secondary',
  '--text-muted',
  '--border',
  '--accent',
  '--accent-hover'
];

console.log('🎯 Theme Variables:');
themeVariables.forEach(varName => {
  const value = rootStyles.getPropertyValue(varName);
  console.log(`  ${varName}: ${value}`);
});

// Test 4: Check localStorage for theme preference
const savedTheme = localStorage.getItem('portfolio-theme');
console.log(`💾 Saved theme in localStorage: ${savedTheme || 'None'}`);

// Test 5: Test theme switching
if (themeToggle) {
  console.log('🔄 Testing theme switch...');
  themeToggle.click();
  
  setTimeout(() => {
    const newIsDarkMode = document.documentElement.classList.contains('dark');
    console.log(`🌙 Theme after switch: ${newIsDarkMode ? 'Dark' : 'Light'}`);
    
    // Check if new theme was saved
    const newSavedTheme = localStorage.getItem('portfolio-theme');
    console.log(`💾 New saved theme: ${newSavedTheme || 'None'}`);
    
    // Switch back
    themeToggle.click();
  }, 500);
}

// Test 6: Check system preference
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(`🖥️ System preference: ${systemPrefersDark ? 'Dark' : 'Light'}`);

// Test 7: Check color scheme property
const colorScheme = document.documentElement.style.colorScheme;
console.log(`🎨 Color scheme: ${colorScheme || 'Not set'}`);

console.log('🎉 Theme system test complete!');