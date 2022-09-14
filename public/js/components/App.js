class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: "",
    };
  }

  componentDidMount(){
    
    let cantidad = document.querySelector(".Cantidad");
    fetch(`/api/listaUsuarios`)
      .then((res) => res.json())
      .then((usuarios) => {
        this.setState = {
          usuarios: usuarios.length,
        };
        return (cantidad.innerText = usuarios.length);
      });
  }




  render() {

    return (
      <div>
        <h1>Usuarios</h1>
        <table className="table table-responsive-md mb-0">
          <thead>
            <tr>
              <th>
                <strong>Cantidad de Usuarios</strong>
                <button onClick={() => this.componentDidMount()}>
               Actualizar
             </button>
              </th>
              
            </tr>
          </thead>
          <tbody className="cartRows">
            <tr>
              <th className="Cantidad">
                <strong>{this.state.usuarios}</strong>
              </th>
            </tr>
            <tr>
                <th>
                <Productos />
                </th>
            </tr>
            <tr>
                <th>
                <Orders />
                </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
