import { useEffect, useState } from 'react';
import { type AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSignInMutation } from '@/services/auth.service';
import { Loading } from '@/components';
import { login } from '@/store/features/auth.slice';

const AsanLogin: React.FC = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const [signIn, { isSuccess, isError }] = useSignInMutation();

  const handleAsanLogin = async (code: string, timeout: NodeJS.Timeout) => {
    try {
      const res = await signIn({ data: code }).unwrap();
      if (res.success) {
        dispatch(login(res.data));
      }
    } catch (error) {
      console.log(error);
    } finally {
      timeout;
    }
  };

  const getStatuses = () => {
    if (isSuccess) {
      return 'Uğurlu əməliyyat! Yönləndirilir... ';
    } else if (isError) {
      return 'Xəta baş verdi! Yönləndirilir... ';
    } else return 'Gözləyin zəhmət olmasa... ';
  };

  useEffect(() => {
    if (code) {
      const timeout = setTimeout(() => navigate('/'), 3000);
      handleAsanLogin(code, timeout);
      return () => clearTimeout(timeout);
    }
  }, [code, navigate]);

  // Countdown logic
  useEffect(() => {
    if (count <= 0) return;

    const intervalId = setInterval(() => {
      setCount((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="h-screen flex items-center justify-center text-lg">
      <Loading text={getStatuses()} countdown={count} />
    </div>
  );
};

export default AsanLogin;
