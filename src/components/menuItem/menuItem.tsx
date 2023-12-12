import React from 'react';
import * as S from './styles';
import { Link } from 'react-scroll';
interface IProps {
	item: string;
	text: string
}
export const MenuItem: React.FC<IProps> = ({ item, text }) => {
	return (
		<div>
			<Link to={item} smooth={true} duration={500} offset={-200} >
				<S.title>{text}</S.title>
			</Link>
		</div>
	);
};
