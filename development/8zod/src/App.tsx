import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Basic Schema Validation 
const basicSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

// 2. Nested Objects 
const nestedSchema = z.object({
  user: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
  }),
});

// 3. Arrays 
const arraySchema = z.object({
  items: z.array(z.string().min(1, "Item cannot be empty")),
});

// 4. Union Types
const unionSchema = z.object({
  type: z.union([z.literal('A'), z.literal('B')]),
  value: z.string(),
});

// 5. Custom Validation
const customSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .refine(val => /[A-Z]/.test(val), "Password must contain an uppercase letter")
    .refine(val => /[0-9]/.test(val), "Password must contain a number"),
});

type FormValuesBasic = z.infer<typeof basicSchema>;
type FormValuesNested = z.infer<typeof nestedSchema>;
type FormValuesArray = z.infer<typeof arraySchema>;
type FormValuesUnion = z.infer<typeof unionSchema>;
type FormValuesCustom = z.infer<typeof customSchema>;

const MyForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesBasic>({
    resolver: zodResolver(basicSchema),
  });

  const onSubmit = (data: FormValuesBasic) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Basic Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MyNestedForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesNested>({
    resolver: zodResolver(nestedSchema),
  });

  const onSubmit = (data: FormValuesNested) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Nested Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register('user.name')} />
          {errors.user?.name && <p>{errors.user.name.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('user.email')} />
          {errors.user?.email && <p>{errors.user.email.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MyArrayForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesArray>({
    resolver: zodResolver(arraySchema),
  });

  const onSubmit = (data: FormValuesArray) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Array Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Item 1</label>
          <input {...register('items.0')} />
          {errors.items?.[0] && <p>{errors.items[0].message}</p>}
        </div>
        <div>
          <label>Item 2</label>
          <input {...register('items.1')} />
          {errors.items?.[1] && <p>{errors.items[1].message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MyUnionForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesUnion>({
    resolver: zodResolver(unionSchema),
  });

  const onSubmit = (data: FormValuesUnion) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Union Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Type</label>
          <select {...register('type')}>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div>
          <label>Value</label>
          <input {...register('value')} />
          {errors.value && <p>{errors.value.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MyCustomValidationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesCustom>({
    resolver: zodResolver(customSchema),
  });

  const onSubmit = (data: FormValuesCustom) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Custom Validation Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <MyForm />
      <MyNestedForm />
      <MyArrayForm />
      <MyUnionForm />
      <MyCustomValidationForm />
    </div>
  );
};

export default App;
