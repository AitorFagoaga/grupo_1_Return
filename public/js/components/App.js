
function App (){
    return (
        <React.Fragment>
             <h1>Hola</h1>
               <div>
            <section className="new-product" name="new-product">
                <article className="new-product" name="new-product">
                    <img src="/images/users/" width="300px"/>

                    <div className="informacion">
                        <div>
                            <div className="buttonsDeleateAndUpdate">
                                <div className="botonesBorraryEditar">
                                
                                </div>
                                <div className="botonesBorraryEditar">
                                    <a href="/admin/useredit">
                                        <input type="submit" value="Editar" className="botonesBorraryEditar color-editar"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className="descripcion"></span>
                    </div>
                </article>
            </section>
            
        </div>
        
        </React.Fragment>
      );
}
    
module.exports = App;