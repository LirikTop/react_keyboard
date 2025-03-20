import React from 'react';

interface State {
  keyboard: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    keyboard: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ keyboard: event.key });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyboard.length
            ? `The last pressed key is [${this.state.keyboard}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
