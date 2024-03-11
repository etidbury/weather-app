'use server';

import { RedirectType, redirect } from 'next/navigation';

import { z } from 'zod';

const schema = z.object({
  theme: z
    .string({
      invalid_type_error: 'Invalid theme specified',
    })
    .optional(),
  location: z.string({
    invalid_type_error: 'Invalid location specified',
  }),
  unit: z.enum(['fahrenheit', 'celcius'], {
    invalid_type_error: 'Invalid temperature measure unit specified',
  }),
});

export async function queryWeather(formData: FormData) {
  const validatedFields = schema.safeParse({
    location: formData.get('location'),
    unit: formData.get('unit'),
    theme: formData.get('theme'),
  });

  if (!validatedFields.success) {
    console.log('errors', validatedFields.error.flatten().fieldErrors);
    throw new Error('Invalid URL');
  } else {
    return redirect(
      `/?${new URLSearchParams(validatedFields.data).toString()}`,
      RedirectType.replace
    );
  }
}
