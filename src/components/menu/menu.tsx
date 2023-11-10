

import React from 'react';
import { SwitchButton } from '../switchButton/switchButton';

interface IProps {
    toggleTheme: () => void,
    mode: string
}

const Menu: React.FC<IProps> = ({toggleTheme,mode}:IProps) => {
	return (
		<nav>
			<SwitchButton mode={mode} toggleTheme={toggleTheme}/>
		</nav>
	);
};
export {Menu};