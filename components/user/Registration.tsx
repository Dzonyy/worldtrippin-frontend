import * as React from 'react'
import { User } from '../../types'

type Props = {
  saveUser: (e: React.FormEvent, formData: User) => void
}

const Registration: React.FC<Props> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<User>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveUser(e, formData)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Description</label>
          <input onChange={handleForm} type='text' id='body' />
        </div>
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Zarejestruj się
      </button>
    </form>
  )
}

export default Registration
