class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: "",
    };
  }

  postSubscribe() {
    let cantidad = document.querySelector(".Productos");

    let er = fetch(`/api/listaProductos`)
      .then((res) => res.json())
      .then((product) => {
        this.setState = {
          productos: product.length,
        };
        return (cantidad.innerText = product.length);
      });
    return er;
  }

  render() {
    return (
      <div>
        <h1>Productos</h1>
        <button onClick={() => this.postSubscribe()}>
          Calcular cantidad de Productos
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
              <th></th>
              <th className="Productos">
                <strong>{this.state.usuarios}</strong>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
