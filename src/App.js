
import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
// import fetch from 'node-fetch';
import SideBar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import StudentForm from "./components/StudentForm";
import EditStudent from "./components/EditStudent";


export const StudentContext = React.createContext();
function App() {

//   let [students, setStudents] =  useState([]);

// useEffect(()=>{

//   getData();

// });

// async function getData(){


//   await fetch("https://614eac01b4f6d30017b482dc.mockapi.io/StudentDetail").then(response=>{
//     students =  response.json()}).then(res=>setStudents(res));
  

// }


  // let [students, setStudents] =  useState([{
  //   name: "Karthik",
  //   degree:"B.E",
  //   dept:"Computer Science",
  //   phone:"9478239942",
  //   email:"abc@gmail.com"
   
  //  },
  //  {
  //      name: "Akshara",
  //      degree:"B.Tech",
  //      dept:"Information Technology",
  //      phone:"9478239942",
  //      email:"abc2@gmail.com"
      
  //     },
  //     {
  //      name: "Raji",
  //      degree:"B.E",
  //      dept:"ECE",
  //      phone:"9478239942",
  //      email:"abc1@gmail.com"
      
  //     }
   
  //  ]);


  return (
    // <StudentContext.Provider value={{students, setStudents}}>
      <Router>
        <div style={{ display: "grid", gridTemplateColumns: "18% 82%" }}>
          <div>
            <SideBar />
          </div>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/all-students" element={<AllStudents />} />
              <Route path="/student-form" element={<StudentForm />} />
              <Route path = '/edit-student/:id' element={<EditStudent/>}/>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
      // </StudentContext.Provider>
  );
}

export default App;
