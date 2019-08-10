import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  state = { isSubmitting: false };

  _onSubmit = (data) => {
    this.setState({ isSubmitting: true });
    setTimeout(() => this.setState({ isSubmitting: false }), 1000);
  }

  render() {
    const { isSubmitting } = this.state;
    return (
      <div>
        <LoginForm
          isSubmitting={isSubmitting}
          onSubmit={this._onSubmit}
        />
      </div>
    );
  }
}

export default Login;