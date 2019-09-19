import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SignupForm from '../Forms/signupForm/SignupForm';
import ProfileForm from '../Forms/ProfilForm/ProfilForm';

import './Index.scss';

const Index = () => {
  return (
    <>
      <div className="Container">
        <div className="Container__header">
          <div className="Container__header--title">
            <p>Tempor pariatur id aliqua laboris sint labore.</p>
          </div>
          <div className="Container__header--description">
            Id ipsum non officia occaecat laborum anim esse ullamco.
          </div>
        </div>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => {
              return <Redirect to={'/signup'} />;
            }}
          />
          <Route path="/signup" exact component={SignupForm} />
          <Route path="/profil" exact component={ProfileForm} />
        </Switch>
      </div>
    </>
  );
};

export default Index;
