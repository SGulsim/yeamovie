import { useGetStaffByIdQuery } from '@/entities/video';

export const useStaff = (id: string) => {
	const { data, isLoading, isError } = useGetStaffByIdQuery(id);

	return {
		staff: data || [],
		isLoading,
		isError,
	};
};
