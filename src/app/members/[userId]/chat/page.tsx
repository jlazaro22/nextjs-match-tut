import { CardHeader, Divider, CardBody } from '@nextui-org/react';

export default function MemberChatPage() {
	return (
		<>
			<CardHeader className='text-2xl font-semibold text-secondary'>
				Chat
			</CardHeader>
			<Divider />
			<CardBody>Chat goes here</CardBody>
		</>
	);
}
