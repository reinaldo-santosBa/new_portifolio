

import React from 'react';
import { SwitchButton } from '../switchButton/switchButton';
import { LogoText } from '../logoText/logoText';
import * as S from './styles';
interface IProps {
    toggleTheme: () => void,
    mode: string
}

const Menu: React.FC<IProps> = ({toggleTheme,mode}:IProps) => {
	return (
		<S.menu>
			<LogoText/>
			
			<SwitchButton mode={mode} toggleTheme={toggleTheme}/>
		</S.menu>
	);
};
export {Menu};