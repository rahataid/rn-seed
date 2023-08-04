import ExampleService from '@services/example';
import { useQuery } from '@tanstack/react-query';
import { IExampleHookReturn } from '../../@types/example';

export const useExample = (): IExampleHookReturn => {
  const { data, isLoading, error } = useQuery(['example'], (async) => {
    const { data } = ExampleService.list();
    return data;
  });
  return {
    list: data,
    loading: isLoading,
    error,
    meta: {},
  };
};
