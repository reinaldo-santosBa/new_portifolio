

import React, { useEffect, useState } from 'react';
import { SwitchButton } from '../switchButton/switchButton';
import { LogoText } from '../logoText/logoText';
import * as S from './styles';
import { MenuItem } from '../menuItem/menuItem';
interface IProps {
    toggleTheme: () => void,
    mode: string
}

const Menu: React.FC<IProps> = ({toggleTheme,mode}:IProps) => {

	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
  
		window.addEventListener('scroll', handleScroll);
  
		// Cleanup function to remove the event listener when the component is unmounted
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<S.menu menuColor={scrolling}>
			<LogoText/>
			<div>
				<MenuItem item='about' text='About me'/>
				<MenuItem item='skills' text='Skills'/>
				<MenuItem item='services' text='Services'/>
				<MenuItem item='contact' text='Contact'/>
				<SwitchButton mode={mode} toggleTheme={toggleTheme}/>
			</div>
		</S.menu>
	);
};
export {Menu};