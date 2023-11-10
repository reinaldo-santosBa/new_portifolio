import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global/style';
import { darkTheme, lightTheme } from './theme/theme';
import { Menu } from './components/menu/menu';
const App: React.FC = () => {
	const [theme, setTheme] = React.useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Menu mode={theme} toggleTheme={toggleTheme}/>
		</ThemeProvider>
	);
};

export default App;
