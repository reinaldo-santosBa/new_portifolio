import React from 'react';
import * as S from './styles';
interface Iprops {
	percent: number;
	name: string;
}
export const SkillsItem: React.FC<Iprops> = ({ percent, name }) => {
	return (
		<S.SkillsItem>
			<h2>{percent}%</h2>
			<h4>{name}</h4>
		</S.SkillsItem>
	);
};