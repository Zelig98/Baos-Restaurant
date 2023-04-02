import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../include/Firebase'
import {
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  logout: () => Promise,
  resetPassword: () => Promise,
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])

  function logout() {
    return signOut(auth)
  }

  const value = {
    currentUser,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}