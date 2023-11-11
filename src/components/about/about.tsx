import React from 'react';
import * as S from './styles';
import Person from '../../assets/person.jpeg';
export const AboutSection:React.FC = () =>{
	return(
		<S.About>
			<div>

			</div>
			<div>
				<div>
					<img src={Person} alt="" />
				</div>
			</div>
		</S.About>
	);
};