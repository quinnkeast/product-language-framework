import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#222'
});

export const textColor = theme('mode', {
  light: '#454f5b',
  dark: '#fff'
});

export const headerLinkColor = theme('mode', {
  light: '#222',
  dark: '#fff'
});

export const sideBarNavColor = theme('mode', {
  light: '#454f5b',
  dark: '#fff'
});

export const usageBackgroundColor = theme('mode', {
  light: '#f9fafb',
  dark: '#777'
});

export const codeTextColor = theme('mode', {
  light: '#f9fafb',
  dark: '#777'
});

export const codeBackgroundColor = theme('mode', {
  light: '#f9fafb',
  dark: '#777'
});