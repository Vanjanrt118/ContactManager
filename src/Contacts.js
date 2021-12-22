import Contact from "./Contact"
const Contacts = ({contactState,deleteContack}) => {
    return (
      <>
          {contactState.map(contact=>(
            <Contact id={contact.id} name={contact.name} email={contact.email}  phone={contact.phone} deleteContack={deleteContack}></Contact>

          ))}
      </>
    )
}

export default Contacts
