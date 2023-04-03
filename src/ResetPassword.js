import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { Card } from '../src/components/Card'
  import { Layout } from '../src/components/Layout'
  import { useNavigate, useLocation } from 'react-router-dom'
  import { confirmPasswordReset } from 'firebase/auth'
  import { auth } from '../src/include/Firebase'
  
  // A custom hook that builds on useLocation to parse
  // the query string for you.
  function useQuery() {
    const location = useLocation();
    return new URLSearchParams(location.search)
  }
  
  export default function ResetPasswordPage() {
    const query = useQuery()
    const history = useNavigate()
    const [newPassword, setPassword] = useState('')
    const toast = useToast()
  
    console.log(
        query.get('mode'), 
        query.get('oobCode'), 
        query.get('continueUrl')
    )

    function resetPassword(oobCode, newPassword) {
        return new Promise((resolve) => {
            resolve(confirmPasswordReset(auth, oobCode, newPassword))
        })
      }

    return (
      <Layout>
        <Heading textAlign='center' my={12}>
          Reset password
        </Heading>
        <Card maxW='md' mx='auto' mt={4}>
          <chakra.form
            onSubmit={async e => {
              e.preventDefault()
              // handle reset password
             resetPassword(query.get('oobCode'), newPassword)
             .then(response => {
                console.log(response)
                toast({
                    description: "Password has been changed, you can log in now",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                history('/login')
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
              <FormControl id='password'>
                <FormLabel>New password</FormLabel>
                <Input
                  type='password'
                  autoComplete='password'
                  required
                  value={newPassword}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>
              <Button type='submit' colorScheme='pink' size='lg' fontSize='md'>
                Reset password
              </Button>
            </Stack>
          </chakra.form>
        </Card>
      </Layout>
    )
  }