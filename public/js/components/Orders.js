class Orders extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        ordenes: "",
      };
    }
  
  
    componentDidMount(){
      let cantidad = document.querySelector(".Ordenes");
      fetch(`/api/ordenes`)
        .then((res) => res.json())
        .then((ordenes) => {
          this.setState = {
            ordenes: ordenes.length,
          };
          return (cantidad.innerText = ordenes.length);
        });
    }
  
  
  
    render() {
  
      return (
        <div>
          <h1>Ordenes</h1>
          <table className="table table-responsive-md mb-0">
            <thead>
              <tr>
                <th>
                  <strong>Cantidad de Ordenes</strong>
                  <button onClick={() => this.componentDidMount()}>
                   Actualizar
                   </button>
                </th>
              </tr>
            </thead>
            <tbody className="cartRows">
                <th className="Ordenes">
                  <strong>{this.state.ordenes}</strong>
                </th>
                <th>
                  <strong>{this.state.ordenes}</strong>
                </th>
            </tbody>
          </table>
        </div>
      );
    }
  }
  