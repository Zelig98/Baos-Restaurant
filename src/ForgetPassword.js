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
  import React, { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import { Card } from '../src/components/Card'
  import DividerWithText from '../src/components/DividerWithText'
  import { Layout } from '../src/components/Layout'
  import { auth } from '../src/include/Firebase'
  import { sendPasswordResetEmail } from '@firebase/auth'
  
  export default function ForgotPasswordPage() {
    const history = useNavigate()
    const toast = useToast()
    const [email, setEmail] = useState('')

    function forgotPassword(email) {
        return new Promise((resolve) => {
            resolve(sendPasswordResetEmail(auth, email, {
                url: `http://localhost:3000/login`,
              }));
        })
      }
  
    return (
      <Layout>
        <Heading textAlign='center' my={12}>
          Forgot password
        </Heading>
        <Card maxW='md' mx='auto' mt={4}>
          <chakra.form
            onSubmit={async e => {
              e.preventDefault()
              // your login logic here
              forgotPassword(email)
              .then(response => {
                console.log(response)
                toast({
                    description: "Email sent, check your inbox",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
              })
            .catch(e => {
                console.log(e.message)
                toast({
                    description: e.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            })   
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
              <Button type='submit' colorScheme='pink' size='lg' fontSize='md'>
                Submit
              </Button>
            </Stack>
          </chakra.form>
          <DividerWithText my={6}>OR</DividerWithText>
          <Center>
            <Button variant='link' onClick={() => history('/login')}>
              Login
            </Button>
          </Center>
        </Card>
      </Layout>
    )
  }