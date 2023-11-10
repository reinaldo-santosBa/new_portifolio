import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
interface IProps {
    toggleTheme: () => void,
    mode: string
}

const SwitchButton: React.FC<IProps> = ({toggleTheme, mode}:IProps) => {
	return (
		<S.AreaSwitch onClick={toggleTheme}>
			<FontAwesomeIcon icon={faSun} />
			<div className={mode}/>
			<FontAwesomeIcon icon={faMoon} />
		</S.AreaSwitch>
	);
};

export {SwitchButton};