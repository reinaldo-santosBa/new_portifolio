import React from 'react';
import { ServiceItemArea } from './styles';
interface IProps {
	Icon: React.ReactElement;
	text: string
}
export const ServiceItem: React.FC<IProps> = ({ Icon, text }) => {
	return (
		<ServiceItemArea>
			{Icon}
			<p>
				{text} <br /> Development
			</p>
		</ServiceItemArea>
	);
};
