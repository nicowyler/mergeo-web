import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, FieldValues, useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { login } from '@/lib/auth';
import { useAuth } from '@/hooks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import LoadingIndicator from '@/components/loadingIndicator';
import Card, { CardBody, CardFooter, CardHeader } from '@/components/card';
import PasswordInput from '@/components/passwordInput';
import { z } from 'zod';
import UseCompanyStore from '@/store/company.store';
import { useEffect, memo, useCallback, useMemo } from 'react';
import { ACCOUNT } from '@/lib/constants';
import UseLoginStore from '@/store/login.store';


// Memoize Card and its subcomponents
const MemoizedCard = memo(Card);
const MemoizedCardHeader = memo(CardHeader);
const MemoizedCardBody = memo(CardBody);
const MemoizedCardFooter = memo(CardFooter);

export const Route = createFileRoute('/_authLayout/login')({
  component: () => <Login />,
})

const LoginSchema = z.object({
  email: z.string().min(1, { message: "Tienes que completar este campo!" }).email("Ingresa un email valido!"),
  password: z.string().min(3, { message: "Tiene que tener al menos 3 caracteres!" }),
});

type Schema = z.infer<typeof LoginSchema>

const MemoizedFormField = memo(FormField);

function Login() {
  const { logIn, isAuthenticated, user } = useAuth();
  const companyState = UseCompanyStore();
  const router = useRouter();
  const { toast } = useToast();
  const mutation = useMutation({ mutationFn: login });
  const { setStartAnimation, setEndAnimation, endAnimation } = UseLoginStore();

  // Memoize the form object
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    disabled: mutation.isPending,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Memoize the mutation.isPending state
  const isPending = useMemo(() => mutation.isPending, [mutation.isPending]);

  // Memoize the onSubmit function
  const onSubmit = useCallback(async (fields: Schema) => {
    const response = await mutation.mutateAsync({ email: fields.email, password: fields.password });

    if (response.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    } else if (response.data) {
      const { data } = response.data;
      companyState.saveCompany(data.company);
      logIn(data.user);
    }
  }, [mutation, toast, companyState, logIn]);

  useEffect(() => {
    if (isAuthenticated) {
      if (endAnimation) {
        const accountType = user?.accountType;
        const redirectTo = (accountType === ACCOUNT.provider ? "/provider" : "/client") + "/dashboard";
        setEndAnimation(false);
        setStartAnimation(false);

        router.history.push(redirectTo, { replace: true });
      } else {
        setStartAnimation(true);
      }
    }

    return () => {
      setEndAnimation(false);
      setStartAnimation(false);
    };
  }, [isAuthenticated, router.history, user?.accountType, endAnimation, setStartAnimation, setEndAnimation]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full'>
        <MemoizedCard>
          <MemoizedCardHeader>
            <div className='h-24 flex flex-col justify-center'>
              <h2 className="text-2xl md:text-3xl font-black text-secondary-background pb-2">
                Ingresa a tu cuenta
              </h2>
              <p className='text-muted text-sm md:text-base'>Ingresa tu email y contraseña para ingresar a tu cuenta</p>
            </div>
          </MemoizedCardHeader>
          <MemoizedCardBody className='w-full flex justify-center m-auto h-auto'>
            <div className='w-2/4 space-y-8'>
              <MemoizedFormField
                control={form.control as unknown as Control<FieldValues>}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id='email'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <MemoizedFormField
                control={form.control as unknown as Control<FieldValues>}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel id='password'>Contraseña</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <PasswordInput fieldName={field.name} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-center items-center min-h-24'>
                <p className='text-sm text-muted'>
                  Olvidaste tu contraseña?{' '}
                  <Link to="/forgotPassword">
                    <Button className='-ml-3' variant="link">
                      Recuperar Contraseña
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </MemoizedCardBody>
          <MemoizedCardFooter>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center min-h-24'>
              <p className='text-sm text-muted'>
                No tenes una cuenta?{' '}
                <Link to="/registration">
                  <Button className='-ml-3' variant="link">
                    Registrate
                  </Button>
                </Link>
              </p>
              <Button disabled={isPending} className='min-w-[200px]' type="submit">
                {isPending ? <LoadingIndicator className="w-4 h-4 text-primary-foreground" /> : 'Ingresar'}
              </Button>
            </div>
          </MemoizedCardFooter>
        </MemoizedCard>
      </form>
    </Form>
  );
}


