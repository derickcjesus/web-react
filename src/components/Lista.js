import React from "react";

class Lista extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, nome: "Orar", completo: true },
        { id: 2, nome: "Tomar café", completo: false },
        { id: 3, nome: "Comer bolo", completo: false },
        { id: 4, nome: "Tomar aquele banho", completo: false },
      ],
    };
  }

  render() {
    return (
      <ul>
        {React.Children.map(this.props.children, child => child.type == Item ? child : null )}
        {this.state.items.map((item) => (
          <Item key={item.id} completo={item.completo}>
            {item.nome}
          </Item>
        ))}
      </ul>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? "line-through" : "none";

    return (
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    );
  }
}

export {Lista, Item};