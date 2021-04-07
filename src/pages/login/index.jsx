import React from 'react';
import { Button, Title } from 'components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import firebse from '../../configs/firebase';
import ROUTES from '../../configs/routes';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLoginSubmit = () => {
    firebse
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        alert('succes', res);
        router.push(ROUTES.CATALOG);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  const handleResetPass = () => {
    firebse
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => {
        alert('email has sent', res);

        // Email sent.
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="login">
      <div className="container pt-4 pb-4">
        <Title label="Belgian - Login" />

        <div className="pt-5 pb-5 d-flex flex-column justify-content-center align-items-center w-100">
          <div className="card border hover-overlay" style={{ width: '20rem' }}>
            <div
              className="card-header border-0"
              style={{ background: 'transparent' }}
            >
              <div className="text-center">
                <h3>BELGIAN SHOP</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3 ">
                <p className="form-label">Email:</p>
                <input
                  type="email"
                  className="form-control no-border "
                  placeholder="name@example.com"
                  onChange={({ target }) => setEmail(target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  onChange={({ target }) => setPassword(target.value)}
                ></input>
              </div>
              <p className="text-right">
                <div
                  className=" text-muted"
                  onClick={() => {
                    handleResetPass();
                  }}
                >
                  forgot password?
                </div>
              </p>
              <div className="mb-3">
                <div className="">
                  <Button
                    blue
                    label="login"
                    size="lg"
                    rounded
                    block
                    onClick={() => {
                      handleLoginSubmit();
                    }}
                  />
                </div>
              </div>
              <p className="tw">
                <div className=" text-muted">
                  {' '}
                  Don't Have Account?
                  <span className="ml-1">
                    <Link href={ROUTES.REGISTER}>Signup</Link>
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
