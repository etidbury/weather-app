'use server';

import { RedirectType, redirect } from 'next/navigation';

import { z } from 'zod';

const schema = z.object({
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
  });

  if (!validatedFields.success) {
    console.log('errors', validatedFields.error.flatten().fieldErrors);
    throw new Error('Invalid URL');
  } else {
    return redirect(
      `/?location=${validatedFields.data.location}&unit=${validatedFields.data.unit}`,
      RedirectType.replace
    );
  }
}
