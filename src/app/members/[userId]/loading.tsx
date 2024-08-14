import { Spinner } from '@nextui-org/react';

export default function Loading() {
	return (
		<div className='flex items-center justify-center vertical-center'>
			<Spinner label='Loading...' color='secondary' labelColor='secondary' />
		</div>
	);
}
