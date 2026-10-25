# Theme System Test Guide

## Overview
This guide provides instructions for testing the premium light mode + dark mode system implementation.

## Test Cases

### 1. Theme Toggle Functionality
- [ ] Click the theme toggle in the navigation (moon/sun icon)
- [ ] Verify the theme switches between light and dark modes
- [ ] Confirm the toggle has smooth transitions (300-500ms)
- [ ] Test the toggle on both desktop and mobile

### 2. System Preference
- [ ] Set system preference to dark mode in OS settings
- [ ] Refresh the page - should start in dark mode
- [ ] Set system preference to light mode in OS settings
- [ ] Refresh the page - should start in light mode

### 3. Persistence
- [ ] Select a theme (light or dark)
- [ ] Close the browser tab/window
- [ ] Reopen the page - should remember the selected theme
- [ ] Verify localStorage contains 'portfolio-theme' key

### 4. No Flash on Load
- [ ] Clear browser cache and cookies
- [ ] Open the page - should not show a flash of incorrect theme
- [ ] Test with both system preferences (light/dark)

### 5. Section Testing
- [ ] **Hero Section**: Verify text and background colors in both themes
- [ ] **Navigation**: Check navbar background, text, and toggle colors
- [ ] **Selected Work**: Test project cards, borders, and hover states
- [ ] **Expertise**: Check capability items and hover effects
- [ ] **CodeAI**: Verify AI section colors and accents
- [ ] **About**: Check timeline and text colors
- [ ] **Services**: Test service cards and process sections
- [ ] **FAQ**: Verify accordion colors and states
- [ ] **Contact**: Check form elements and buttons
- [ ] **Footer**: Verify text and link colors

### 6. Interactive Elements
- [ ] **Project Hover**: Test hover effects on project cards
- [ ] **Links**: Verify all links have proper hover states
- [ ] **Buttons**: Test button hover and active states
- [ ] **Form Elements**: Check input fields and text areas
- [ ] **Cursor**: Verify custom cursor changes color per theme

### 7. Transitions
- [ ] Test theme switching animations (300-500ms)
- [ ] Verify smooth color transitions on all elements
- [ ] Check that animations are not jarring or distracting

### 8. Accessibility
- [ ] Verify sufficient color contrast in both themes
- [ ] Test keyboard navigation with theme toggle
- [ ] Check ARIA labels on theme toggle
- [ ] Verify reduced motion support

### 9. Responsive Design
- [ ] Test theme on all breakpoints (320px, 375px, 430px, 768px, 1024px, 1280px, 1440px, 1920px+)
- [ ] Verify theme toggle works on mobile devices
- [ ] Check that mobile menu respects theme colors

### 10. Performance
- [ ] Verify no layout shifts during theme transitions
- [ ] Check for console errors when switching themes
- [ ] Test performance on slower devices

## Expected Behavior

### Dark Mode
- Background: #080808, #0B0B0B, #101010
- Text: #F5F5F2 (primary), #A1A1A1 (secondary), #777777 (muted)
- Borders: rgba(255,255,255,0.10)
- Accent: #FF4D24, #FF6338
- Feeling: Cinematic, premium, technical, sophisticated

### Light Mode
- Background: #F5F3EF, #EBE9E4
- Text: #111111 (primary), #555555 (secondary), #858585 (muted)
- Borders: rgba(0,0,0,0.10)
- Accent: #E84A25, #C93618
- Feeling: Luxury editorial, modern technology, minimal Swiss design

## Debugging Tips

1. **Theme Not Switching**: Check for localStorage errors and ensure proper class toggling
2. **Colors Not Updating**: Verify CSS variables are properly defined and used
3. **Transitions Not Working**: Check transition properties and timing functions
4. **Mobile Issues**: Verify responsive design and touch interactions
5. **Performance Issues**: Check for unnecessary re-renders during theme switches

## Browser Testing
- Test in Chrome, Firefox, Safari, and Edge
- Check both desktop and mobile browsers
- Test with different viewport sizes
- Verify with reduced motion enabled/disabled