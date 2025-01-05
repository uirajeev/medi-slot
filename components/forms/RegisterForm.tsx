'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import CustomFormField, { FormFieldType } from '@/components/CustomFormField';
import SubmitButton from '@/components/SubmitButton';
import { UserFromValidartion } from '@/lib/validation';

const RegisterForm = async ({ user }: {user: User}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFromValidartion>>({
    resolver: zodResolver(UserFromValidartion),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async ({
    name,
    email,
    phone,
  }: z.infer<typeof UserFromValidartion>) => {
    setIsLoading(true);
    // try {
    //   const userData = { name, email, phone };
    //   const user = await createUser(userData);
    //   if (user) {
    //     router.push(`/patients/${user.$id}/register`);
    //   }
    // } catch (error) {
    //   console.error('Error creating user:', error);
    // }
    setIsLoading(false);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <section className='mb-10 space-y-4'>
          <h1 className='header'>Hi there 👋</h1>
          <p className='text-dark-700'>Schedule your first appointment.</p>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name='name'
          label='Full name'
          placeholder='What is your full name?'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
