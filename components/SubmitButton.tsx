import { Button } from '@/components/ui/button';
import Image from 'next/image';
interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type='submit'
      className={className ?? 'shad-primary-btn w-full'}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/icons/loading.svg'
            alt='loading'
            width={24}
            height={24}
            className='animate-spin'
          />
          Loading...
        </div>
      ) : (
        children ?? 'Submit'
      )}
    </Button>
  );
};

export default SubmitButton;
