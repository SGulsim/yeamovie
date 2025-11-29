import type { ReactNode } from 'react';

interface TabProps {
	label: string;
	children?: ReactNode;
	onClick?: () => void;
}

const Tab = ({ children }: TabProps) => {
	return <>{children}</>;
};

export default Tab;
