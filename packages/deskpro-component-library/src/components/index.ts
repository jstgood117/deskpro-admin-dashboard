// In this file we explicity export everything. This is just to be thorough
// and explicit. This thorough exporting method can seem like a lot, but it
// allows for simpler scaling when your library grows in size, and even adds
// different tech like TypeScript

// export { DeskproAdminTheme } from './Theme';
export { default as Button } from './Button';
export { default as Grid } from './Grid';
export { default as Header } from './Header';
export { default as Main } from './Main';
export { default as Sidebar } from './Sidebar';
export { default as Table } from './Table';
export { default as Text } from './Text';

export { default as styled } from 'styled-components';