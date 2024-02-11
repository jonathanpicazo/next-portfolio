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
    <div className="bg-dracula-darker-900 max-w-screen fixed inset-0 z-50 flex h-full max-h-screen w-full items-center justify-center">
      <section className="border-dracula-dark w-full max-w-lg cursor-pointer rounded-lg border px-5 py-4 shadow-xl">
        {/* <Header title="Contact Me" /> */}

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
                className="text-dracula-pink mb-2 block text-sm font-medium"
              >
                Please enter the password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-dracula-dark text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500 block w-full rounded-lg p-2.5 text-sm"
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
