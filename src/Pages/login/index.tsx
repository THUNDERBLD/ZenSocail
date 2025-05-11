import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { UserLogin } from '@/types';
import { UseUserAuth } from '@/context/userAuthContext';
import { useNavigate, Link } from 'react-router-dom';

const initialValues: UserLogin = {
  email: '',
  password: '',
};

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = () => {
  const { googleSignIn, logIn } = UseUserAuth(false);
    const [userLoginInfo, setUserLoginInfo] = useState<UserLogin>(initialValues);
    const navigate = useNavigate();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await logIn(userLoginInfo.email, userLoginInfo.password);
        navigate('/');
        console.log('userLoginInfo is:', userLoginInfo);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate('/');
        console.log('Google Sign-In clicked');
      } catch (error) {
        console.error('Error signing in with Google:', error);
      }
    };

  return (
    <div className="w-full h-screen bg-[#212121] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login User</CardTitle>
            <CardDescription>
              Enter your email and password below to login your account
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 my-4">
            <div className="grid gap-6">
              <Button onClick={handleGoogleSignIn} type="button">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={userLoginInfo.email}
                onChange={(e) =>
                  setUserLoginInfo({ ...userLoginInfo, email: e.target.value })
                }
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={userLoginInfo.password}
                onChange={(e) =>
                  setUserLoginInfo({ ...userLoginInfo, password: e.target.value })
                }
              />
            </div>

          </CardContent>

          <CardFooter className="flex flex-col space-y-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                SignUp
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );;
};

export default Login;
