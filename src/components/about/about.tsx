/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as S from './styles';
import { DatasAbout } from '../datasAbout/datasAbout';


export const AboutSection: React.FC = () => {
	return (
		<S.About >
			<h1>About</h1>
			<p>
				Hello! I'm Reinaldo, a seasoned systems analyst with extensive experience in frontend development for web and mobile, specializing in React Native and React JS. My passion lies in crafting engaging and functional interfaces that deliver exceptional user experiences. Throughout my career, I've continually sought to enhance my skills and stay updated with the latest technological trends. I believe in the power of collaboration and look forward to contributing to innovative and challenging projects. Let's turn ideas into digital reality!
			</p>
			<div>
				<DatasAbout text='(71) 9 8885-3971' title='Phone' />
				<DatasAbout text='reinaldodevcontato@gmail.com' title='E-mail' />
				<DatasAbout text='(71) 9 8772-0248' title='Whatsapp' />
			</div>
		</S.About>
	);
}; S;