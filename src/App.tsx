import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global/style';
import { darkTheme, lightTheme } from './theme/theme';
import { Menu } from './components/menu/menu';
import { AboutSection } from './components/about/about';
import { BannerSecion } from './components/banner/banner';
import { ServiceSection } from './components/services/services';
import { SkillsSections } from './components/skills/skills';
import { ContactSection } from './components/contact/contact';
const App: React.FC = () => {
	const [theme, setTheme] = React.useState('');
	useEffect(() => {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (prefersDarkMode) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Menu mode={theme} toggleTheme={toggleTheme} />
			<BannerSecion />
			<AboutSection />
			<ServiceSection />
			<SkillsSections />
			<ContactSection />
		</ThemeProvider>
	);
};

export default App;
