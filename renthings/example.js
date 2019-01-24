        class Hello extends React.Component {
            render() {
              return <div>
                          <p>Имя: {this.props.name}</p>
                          <p>Возраст: {this.props.age}</p>
                      </div>;
            }
          }
          ReactDOM.render(
              <Hello name="Tom" age="33" />,
              document.getElementById("app")
          )
          
 
//  <div className="test1" onClick={say_hi}> {this.props.title} Hello123, {this.props.name123} </div>
          
this и context

оберточный div и html5

router

state

REST 
  HTTP-method url
  GET-чтение
  POST-создание
  PUT-обновление
  DELETE-удаление

согласно REST для каждого метода используется строго свой метод

RPC
  {
    class:
      метод:
        парам1:
        парам2:
  }
  на принимающей стороне есть диспетчер, который берет параметры и обращается к методу
  
    на Java
    /servlet
      данные приходят одним куском на точку входа, а на сервере диспетчер разбирает данные
      
JSON-RPC - то же что и RPC для JSON
SOAP - то же что и RPC для XML
