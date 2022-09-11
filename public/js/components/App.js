class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: "",
    };
  }

  postSubscribe() {
    let cartRows = document.querySelector(".cartRows");
    let cantidad = document.querySelector(".Cantidad");

    let er = fetch(`/api/listaUsuarios`)
      .then((res) => res.json())
      .then((product) => {
        this.setState = {
          usuarios: product.length,
        };
        return (cantidad.innerText = product.length);
      });
    return er;
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        <button onClick={() => this.postSubscribe()}>
          Calcular cantidad de Usuarios
        </button>
        <table className="table table-responsive-md mb-0">
          <thead>
            <tr>
              <th>
                <strong>Cantidad de Usuarios</strong>
              </th>
            </tr>
          </thead>
          <tbody className="cartRows">
            <tr>
              <th className="Cantidad">
                <strong>{this.state.usuarios}</strong>
              </th>
              <th>
                <Productos />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
