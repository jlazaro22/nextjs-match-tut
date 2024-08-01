import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl font-semibold underline'>Home Page</h1>
			<Button
				as={Link}
				href='/members'
				variant='bordered'
				radius='sm'
				color='primary'
				startContent={<FaRegSmile size={20} />}
			>
				Members Page
			</Button>
		</div>
	);
}
