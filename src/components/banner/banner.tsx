import React from 'react';
import * as S from './styles';
import Person from '../../assets/person.jpeg';
export const BannerSecion:React.FC = () =>{
	return(
		<S.Banner>
			<div>
				<h1>Hi, I am <br/>
					Reinaldo Santos
				</h1>
				<h3>
					Frontend Developer
				</h3>
				<S.AreaBtn>
					<S.Button>Download CV</S.Button>
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