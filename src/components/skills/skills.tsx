import React from 'react';
import * as S from './styles';
import { SkillsItem } from '../skillsItem/skills';

export const SkillsSections: React.FC = () => {
	return (
		<S.Skills>
			<h1>
				My Skills
			</h1>
			<div>
				<SkillsItem name={'HTML'} percent={100} />
				<SkillsItem name={'CSS'} percent={100} />
				<SkillsItem name={'JavaScript'} percent={90} />
				<SkillsItem name={'React JS'} percent={80} />
				<SkillsItem name={'React Native'} percent={80} />
			</div>
		</S.Skills>
	);
};