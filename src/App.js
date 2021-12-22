import Header from "./Header";
import Contacts from "./Contacts";
import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import AboutPage from "./AboutPage";
import Test from "./Test";


function App() {
  const [contactState, setContactState] = useState([
  
  ]);
  useEffect(()=>{
    const fetchContacts=async()=>{
      const response= await fetch('https://jsonplaceholder.typicode.com/users');
      const data= await response.json();
      setContactState(data);
      console.log(data);
    }
    fetchContacts()

  },[])
  const deleteContack = async(id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
    {method:'DELETE'} )

    const filteredContacts = contactState.filter((contact) => contact.id != id);
    setContactState(filteredContacts);
  };
  async function addContact(name, email, phone) {
    let id = contactState.length + 1;
  const res=  await fetch('`https://jsonplaceholder.typicode.com/users/',{method:'POST',headers:{"Content-type":"application/json",  body:JSON.stringify(contactState)
  }})
  const data=await res.json();
    setContactState([
      ...contactState,
      { data },
    ]);
  }
  return (
    <Router>
      <div className="App">
        <Header branding="Contact Manager"></Header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Contacts
                contactState={contactState}
                deleteContack={deleteContack}
              />
            }
          />
        
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/add" element={<AddContact addContact={addContact}></AddContact>}></Route>
         {/* <Route path="/add" element={<AddContact addContact={addContact}></AddContact>}/>*/} 
        </Routes>
        <About></About>
      </div>
 <Test></Test>
    </Router>
  );
}

export default App;
