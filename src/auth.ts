import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './lib/prisma';
import credentials from 'next-auth/providers/credentials';
import { loginSchema } from './lib/schemas/loginSchema';
import { getUserByEmail } from './app/actions/authActions';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	callbacks: {
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			return session;
		},
	},
	providers: [
		credentials({
			name: 'credentials',
			authorize: async (credentials) => {
				const validated = loginSchema.safeParse(credentials);

				if (validated.success) {
					const { email, password } = validated.data;
					const user = await getUserByEmail(email);

					if (!user || !(await compare(password, user.passwordHash))) {
						return null;
					}

					return user;
				}

				return null;
			},
		}),
	],
});
