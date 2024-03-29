import {
    Button,
    Center,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react'
  import React, { useEffect, useRef, useState } from 'react'
  import { FaGoogle } from 'react-icons/fa'
  import DividerWithText from './components/DividerWithText'
  import { useNavigate } from 'react-router-dom'
  import { Card } from './components/Card'
  import { Layout } from './components/Layout'
  // import { useAuth } from './include/Authentication'
  import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
  } from 'firebase/auth'
  import { auth } from './include/Firebase'
  
  export default function SignInpage() {
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast()
    const mounted = useRef(false)
    // const {register} = useAuth();
  
    useEffect(() => {
      mounted.current = true
      return () => {
        mounted.current = false
      }
    }, [])

    function register(email, password) {
      return new Promise((resolve) => {
        resolve(createUserWithEmailAndPassword(auth, email, password));
      })
    }

    function signInWithGoogle() {
      return new Promise((resolve) => {
        const provider = new GoogleAuthProvider()
        resolve(signInWithPopup(auth, provider));
      })
    }
  
    return (
      <Layout>
        <Heading textAlign='center' my={12}>
          Register
        </Heading>
        <Card maxW='md' mx='auto' mt={4}>
          <chakra.form
            onSubmit={async e => {
              e.preventDefault()
              if (!email || !password) {
                toast({
                  description: 'Credentials not valid.',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
                return
              }
              // your register logic here
              setIsSubmitting(true)
              register(email, password)
              .then(response => console.log(response))
              .catch(error => {
                toast({
                  description: error.message,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
              })
              .finally(() => setIsSubmitting(false))
            }}
          >
            <Stack spacing='6'>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id='password'>
                <FormLabel>Password</FormLabel>
                <Input
                  name='password'
                  type='password'
                  autoComplete='password'
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type='submit'
                colorScheme='pink'
                size='lg'
                fontSize='md'
                isLoading={isSubmitting}
              >
                Sign up
              </Button>
            </Stack>
          </chakra.form>
          <Center my={4}>
            <Button variant='link' onClick={() => history('/login')}>
              Login
            </Button>
          </Center>
          <DividerWithText my={6}>OR</DividerWithText>
          <Center>
            <Button
              variant='outline'
              isfullwidth="true"
              colorScheme='red'
              leftIcon={<FaGoogle />}
              onClick={() =>
                signInWithGoogle()
                  .then(user => console.log(user))
                  .catch(e => console.log(e.message))
              }
            >
              Sign in with Google
            </Button>
          </Center>
        </Card>
      </Layout>
    )
  }
  