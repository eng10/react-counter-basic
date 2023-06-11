import {React,  useState } from 'react'
import { Link } from 'react-router-dom'

const Validation = () => {
    const [firstName, setFirstName] = useState('') // useState to store First Name
    const [lastName, setLastName] = useState('') // useState to store Last Name
    const [mobile, setMobile] = useState('') // useState to store Mobile Number
    const [age, setAge] = useState('') // useState to store Age
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [password, setPassword] = useState('') // useState to store Password
  return (
    <>
    <div className="main">
      <form>
        {/_ Input Field to insert First Name _/}
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        {/_ Input Field to insert Last Name _/}
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        {/_ Input Field to insert Mobile Number _/}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        />
        {/_ Input Field to insert Age _/}
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        {/_ Input Field to insert Email Address of the user _/}
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {/_ Input Field to insert Password _/}
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <Link to='/'>Home</Link>
    </>
  )
}

export default Validation