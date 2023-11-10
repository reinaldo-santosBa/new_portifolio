import React from 'react';
import * as S from './styles';
interface IProps {
	item: string;
	text: string
}
export const MenuItem:React.FC<IProps> = ({item,text}) => {
	return (
		<div>
			<S.title href={`#${item}`}>{text}</S.title>
		</div>
	);
};
