import './app.css'
import {useState} from 'react'

function App() {
  const [ToDos, setToDos] = useState([])
  const [ToOo, setToDo] = useState('')

  function getDayName() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = daysOfWeek[date.getDay()];
    return dayName;
  }
  const dayName = getDayName();
  console.log("Today is", dayName);

  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2> Whoop, it's {dayName} ☕</h2>
        </div>
        <div className="input">
          <input value={ToOo} onChange={(e)=>{setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
          <i onClick={()=>setToDos([...ToDos,{id:Date.now(), Text:ToOo, status:false}])} className="fas fa-plus"></i>
        </div>
        
            <div className="todos">
      
            {
            ToDos.map((object) => {
              return (
                <div key={object.id} className="todo">
                  <div className="left">
                    <input type="checkbox" checked={object.status} onChange={(e) => {
                      setToDos(ToDos.filter(item => {
                        console.log(e.target.value)
                        console.log(object)
                        if (item.id === object.id) {
                          item.status = e.target.checked
                        }
                        return item
                      }))
                  }} type="checkbox" name="" id="" />
                    <p> {object.Text} </p>
                  </div>
                <div className="right">
                  <i onClick={() => {setToDos(ToDos.filter((item) => item.id !== object.id));}} className="fas fa-times"></i>
              </div>
            </div>)
            })}
          </div>
      </div>
    </>
  )
}

export default App
