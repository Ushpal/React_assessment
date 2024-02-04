'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const Backbutton = () => {
  const router = useRouter();
  const handleBack = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.push('/products');
  };
  return (
    <Button
      className=" rounded-full border bg-black p-3 text-white"
      onClick={handleBack}
    >
      Back
    </Button>
  );
};
export default Backbutton;
