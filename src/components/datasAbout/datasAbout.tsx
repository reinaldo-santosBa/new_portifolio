import React from 'react';
import { AreaCircle } from './styles';
interface IProps {
    text: string;
    title: string;
}
export const DatasAbout:React.FC<IProps> = ({text,title}) => {
	return (
		<AreaCircle>
			<div className='circleOut'>
				<div className='circleIn'></div>
			</div>
			<h2>
				{title}
			</h2>
			<h3>
				{text}
			</h3>
		</AreaCircle>
	);
};

