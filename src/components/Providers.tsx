import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<ToastContainer
				position='bottom-right'
				hideProgressBar
				className='z-50'
			/>
			{children}
		</NextUIProvider>
	);
}
