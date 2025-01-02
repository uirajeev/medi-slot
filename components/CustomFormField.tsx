'use client';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Control } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHORN_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  RADIO = 'radio',
  SELECT = 'select',
  FILE = 'file',
  TIME_PICKER = 'timePicker',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  CURRENCY = 'currency',
  SKELETON = 'skeleton',
}

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  timeFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, iconAlt, placeholder, name } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || 'icon'}
              height={24}
              width={24}
              className='ml-2'
            />
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className='shad-input border-0'
            />
          </FormControl>
        </div>
      );

    case FormFieldType.PHORN_INPUT:
      return (
        <PhoneInput
          placeholder={placeholder}
          defaultCountry='IN'
          international
          withCountryCallingCode
          countryCallingCodeEditable={false}
          value={field.value as E164Number | undefined}
          onChange={(value) => field.onChange(value)}
          className='input-phone'
        />
      );
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel htmlFor={name}>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className='shad-error'></FormMessage>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
