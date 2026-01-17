import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col items-center justify-center gap-3 leading-10">
      <h1 className="text-[48px] font-bold">404</h1>
      <p className="mb-3 text-[26px] text-gray-700">페이지를 찾을 수 없습니다.</p>
      <Button className="w-80 py-3" onClick={() => navigate('/exchange')} color="black" active>
        홈으로 이동
      </Button>
    </div>
  );
};
