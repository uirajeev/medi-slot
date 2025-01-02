import Image from 'next/image';
import Link from 'next/link';
import PatientForm from '../components/forms/PatientForm';

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      {/* TODO: OTP Verification | Pass key modal */}
      <section className='remove-scrollbar container my-auto'>
        <div className='dub-container max-w-[496px]'>
          <Image
            src='/assets/icons/logo-full.svg'
            alt='MediSlot Logo'
            width={100}
            height={100}
            className='mb-11 h-8 w-fit'
          />
          <PatientForm />

          <div className='text-14-regular mt-10 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              &copy; 2025 Patient. All rights reserved.
            </p>
            <Link href='/?admin=true' className='texit-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src='/assets/images/onboarding-img.png'
        alt='Patient'
        width={1000}
        height={1000}
        className='side-img max-w-[50%]'
      />
    </div>
  );
}
