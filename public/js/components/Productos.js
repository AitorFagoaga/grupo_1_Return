class Productos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: "",
    };
  }


  componentDidMount(){
    let cantidad = document.querySelector(".Productos");
    fetch(`/api/listaProductos`)
      .then((res) => res.json())
      .then((product) => {
        this.setState = {
          productos: product.length,
        };
        return (cantidad.innerText = product.length);
      });
  }



  render() {

    return (
      <div>
        <h1>Productos</h1>
        <table className="table table-responsive-md mb-0">
          <thead>
            <tr>
              <th>
                <strong>Cantidad de Productos</strong>
                <button onClick={() => this.componentDidMount()}>
                 Actualizar
                 </button>
              </th>
            </tr>
          </thead>
          <tbody className="cartRows">
            <tr>
              <th className="Productos">
                <strong>{this.state.productos}</strong>
              </th>
            </tr>
            <tr>
              <th>
                <strong>{this.state.productos}</strong>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
