

import React, { useEffect, useState } from 'react';
import { SwitchButton } from '../switchButton/switchButton';
import { LogoText } from '../logoText/logoText';
import * as S from './styles';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

import { MenuItem } from '../menuItem/menuItem';
interface IProps {
	toggleTheme: () => void,
	mode: string,
}

const Menu: React.FC<IProps> = ({ toggleTheme, mode }: IProps) => {

	const [scrolling, setScrolling] = useState(false);
	const [leftPosition, setLeftPosition] = useState(-500);
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

	const changePosition = () => {
		if (leftPosition === 0) {
			setLeftPosition(-500);
		} else {
			setLeftPosition(0);
		}
	};

	return (
		<>
			<S.menu menuColor={scrolling}>
				<LogoText />
				<div>
					<MenuItem item='about' text='About me' />
					<MenuItem item='services' text='Services' />
					<MenuItem item='skills' text='Skills' />
					<MenuItem item='contact' text='Contact' />
					<SwitchButton mode={mode} toggleTheme={toggleTheme} />
				</div>
			</S.menu>
			<S.icon onClick={changePosition} className='icon' icon={faBars} />
			<S.menuMobile positionLeft={leftPosition}>
				<div>
					<div>
						<S.icon onClick={changePosition} icon={faClose} />
						<LogoText />
						<MenuItem item='about' text='About me' />
						<MenuItem item='services' text='Services' />
						<MenuItem item='skills' text='Skills' />
						<MenuItem item='contact' text='Contact' />
						<SwitchButton mode={mode} toggleTheme={toggleTheme} />
					</div>
				</div>
			</S.menuMobile>

		</>
	);
};
export { Menu };