

import React from 'react';
import { SwitchButton } from '../switchButton/switchButton';
import { LogoText } from '../logoText/logoText';
import * as S from './styles';
import { MenuItem } from '../menuItem/menuItem';
interface IProps {
    toggleTheme: () => void,
    mode: string
}

const Menu: React.FC<IProps> = ({toggleTheme,mode}:IProps) => {
	return (
		<S.menu>
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