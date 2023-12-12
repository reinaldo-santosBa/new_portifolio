import React from 'react';
import * as S from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
	name: string;
	email: string;
	number: string;
	message: string;
}

export const ContactSection: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<S.Contact>
			<h1>
				Get in touch
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<div className='areaInput'>
						<input placeholder='Name' {...register('name', { required: true })} />
						{errors.name && <span>This name is required</span>}
					</div>
				</div>
				<div>
					<div className='areaInput'>
						<input placeholder='E-mail' {...register('email', { required: true })} />
						{errors.email && <span>This email is required</span>}
					</div>
					<div className='areaInput'>
						<input placeholder='Phone number' {...register('number', { required: true })} />
						{errors.email && <span>This phone number is required</span>}
					</div>
				</div>
				<div>
					<div className='areaInput'>
						<textarea placeholder='Message' {...register('message', { required: true })} />
						{errors.number && <span>This message is required</span>}
					</div>
				</div>
				<input type={'submit'} value={'Submit'} />
			</form>
		</S.Contact>
	);
};