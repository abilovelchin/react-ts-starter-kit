import type { AppDispatch, RootState } from '@/store/index';
import type { User } from '@/types/user.type';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useToast } from '@/hooks/useToast';
import { Button, Input } from '@/components';

import { login } from '@/store/features/auth.slice';

const LoginPage: React.FC = () => {
  const { toast } = useToast();

  const { register, handleSubmit } = useForm<{
    username: string;
    password: string;
  }>();

  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (user) navigate('/');
  }, []);

  const onSubmit = handleSubmit(async (values) => {
    // send login request here...
    if (!['user', 'admin'].includes(values.username) || values.password != '12345') {
      toast({ title: 'Error', description: 'Username or Password is incorrect' });
      return;
    }
    const user: Partial<User> = {
      id: 1,
      name: 'Elchin',
      username: values.username,
      email: 'abilovelchin@gmail.com',
      website: 'https://abilov.az',
      role: values.username.toUpperCase(),
      token: 'Lorem ipsum, dolor sit',
    };

    dispatch(login(user));
    navigate('/');
  });

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="gap-5 w-[400px] shadow-md p-10 rounded-lg bg-white">
        <h6 className="text-center text-lg font-medium text-gray-500 mb-5">
          LOGIN TO YOUR ACCOUNT
        </h6>
        <div className="flex flex-col text-gray-500 my-2 py-2 text-sm border-y">
          <p>
            <span className="font-medium">Username:</span> user
          </p>
          <p>
            <span className="font-medium">Password:</span> 12345
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* username */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Username</label>
            <Input type="text" {...register('username')} />
          </div>

          {/* password */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-600 text-sm">Password</label>
            <Input type="password" {...register('password')} />
          </div>

          {/* button */}
          <div className="flex flex-col gap-1">
            <Button type="submit" size="lg">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
