import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const initialState = {
    loggued: false
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState )

    const login = async ( name = ' ', types ) => {
      const action = {
        types: types.login,
        payload: {

          id:'ABC',
          name: name
        }
      }

    }
  return (

    <AuthContext.Provider value = {{ 
      ...authState,
      login: login

    }}>
        { children }
    </AuthContext.Provider>

  )
}
