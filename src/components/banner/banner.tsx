import React from 'react';
import * as S from './styles';
import Person from '../../assets/person.jpeg';


export const BannerSecion: React.FC = () => {
	const handleDownload = () => {
		const link = document.createElement('a');

		link.href = '../../assets/curriculum_vitae.pdf';
		link.download = 'curriculum.pdf';

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

	};
	return (
		<S.Banner>
			<div>
				<h1>Hi, I am <br />
					Reinaldo Santos
				</h1>
				<h3>
					Frontend Developer
				</h3>
				<S.AreaBtn>
					<S.Button onClick={handleDownload}>Download CV</S.Button>
					<S.Button outline>Learn more</S.Button>
				</S.AreaBtn>
			</div>
			<div>
				<div>
					<img src={Person} alt="Foto de perfil" />
				</div>
			</div>
		</S.Banner>
	);
};