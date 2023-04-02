import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../include/Firebase'
import {
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  confirmPasswordReset,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
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

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: `http://localhost:3000/login`,
    })
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    logout,
    forgotPassword,
    resetPassword,
    signInWithGoogle,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}