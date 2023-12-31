import React from 'react'

function Register() {
  return (
    <section>
      <form action="#">
        <div>
          <input type="text" placeholder='username' />
        </div>
        <div>
          <input type="text" placeholder='First name' />
        </div>
        <div>
          <input type="text" placeholder='Last name' />
        </div>
        <div>
          <input type="email" placeholder='Email Address' />
        </div>
        <div>
          <input type="password" placeholder='password'/>
        </div>

        <button>Agree and join</button>
      </form>
    </section>
  )
}

export default Register