import { auth, signOut } from '@/auth';
import { Button } from '@nextui-org/react';
import { FaRegSmile } from 'react-icons/fa';

export default async function Home() {
	const session = await auth();

	return (
		<div>
			<h1 className='text-3xl font-semibold underline'>Home Page</h1>
			<h3 className='text-2xl font-semibold'>User session data:</h3>
			{session ? (
				<div>
					<pre>{JSON.stringify(session, null, 2)}</pre>
					<form
						action={async () => {
							'use server';
							await signOut();
						}}
					>
						<Button
							type='submit'
							variant='bordered'
							radius='sm'
							color='primary'
							startContent={<FaRegSmile size={20} />}
						>
							Sign out
						</Button>
					</form>
				</div>
			) : (
				<div>Not signed in</div>
			)}
		</div>
	);
}
