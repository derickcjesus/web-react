import React from "react";

class RenderName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: '' };
  }

  changeName = (event) => {
      this.setState({nome: event.target.value})
  }

  render() {
    return (
      <>
        Nome: <input type="text" value={this.state.nome} onChange={this.changeName}/>
        <p>Olá, {this.state.nome}</p>
      </>
    );
  }
}

export default RenderName;
