/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { setCookie } from 'cookies-next';
import { Button } from '../elements';

type AuthFormProps = {
  password: string;
  setAuthenticated: (authenticated: boolean) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ password, setAuthenticated }) => {
  const [passwordInput, setPasswordInput] = useState('');

  const authenticate = () => {
    if (passwordInput === password) {
      setCookie('authToken', password);
      setAuthenticated(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticate();
  };
  return (
    <div className="max-w-screen fixed inset-0 z-50 flex h-full max-h-screen w-full items-center justify-center bg-dracula-darker-900">
      <section className="w-full max-w-lg cursor-pointer rounded-lg border border-dracula-dark px-5 py-4 shadow-xl">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-dracula-pink"
              >
                Please enter the password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                placeholder="Password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
