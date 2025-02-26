import { Member } from '@prisma/client';
import { Card, CardFooter, Image } from '@nextui-org/react';
import Link from 'next/link';
import { calculateAge } from '@/lib/util';

type Props = {
	member: Member;
};

export default function MemberCard({ member }: Props) {
	return (
		<Card fullWidth as={Link} href={`/members/${member.userId}`}>
			<Image
				isZoomed
				alt={member.name}
				width={300}
				height={300}
				src={member.image || '/images/user.png'}
				className='aspect-square object-cover'
			/>
			<CardFooter className='flex justify-start bg-black bg-dark-gradient overflow-hidden absolute bottom-0 z-10'>
				<div className='flex flex-col text-white'>
					<span className='font-semibold'>
						{member.name}, {calculateAge(member.dateOfBirth)}
					</span>
					<span className='text-sm'>{member.city}</span>
				</div>
			</CardFooter>
		</Card>
	);
}
