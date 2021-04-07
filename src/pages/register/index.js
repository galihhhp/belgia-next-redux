import React from 'react';
import { Button, Title } from 'components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import firebse from '../../configs/firebase';
import Link from 'next/link';
import ROUTES from '../../configs/routes';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

  const router = useRouter();
  const handleSignupSubmit = () => {
    firebse
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('success');
        router.push(ROUTES.LOGIN);
        firebse
          .firestore()
          .collection('users')
          .doc(firebse.auth().currentUser.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
          });
        useEffect(() => {
          firebse.auth();
        }, []);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="signup">
      <div className="container pt-4 pb-4">
        <Title label="Belgian - Register" />

        <div className="pt-5 pb-5 d-flex flex-column justify-content-center align-items-center w-100">
          <div className="card border hover-overlay" style={{ width: '30rem' }}>
            <div
              className="card-header border-0"
              style={{ background: 'transparent' }}
            >
              <div className="text-center">
                <h3>REGISTER</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3 ">
                <p className="form-label">First Name:</p>
                <input
                  type="text"
                  className="form-control no-border "
                  placeholder="Input your first name"
                  onChange={({ target }) => setFirstName(target.value)}
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input your last name"
                  onChange={({ target }) => setLastName(target.value)}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input your address"
                  onChange={({ target }) => setAddress(target.value)}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Input your email"
                  onChange={({ target }) => setEmail(target.value)}
                ></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Input your password"
                  onChange={({ target }) => setPassword(target.value)}
                ></input>
              </div>
              <p className="text-right">
                <div className=" text-muted">
                  Already have an account?
                  <span className="ml-1">
                    <Link href={ROUTES.LOGIN}>Login</Link>
                  </span>
                </div>
              </p>
              <div className="mb-3">
                <div className="">
                  <Button
                    blue
                    label="register"
                    size="lg"
                    rounded
                    block
                    onClick={() => {
                      handleSignupSubmit();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
