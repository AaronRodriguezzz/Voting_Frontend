import axios from 'axios';
import { useCallback } from 'react';

type UserRegistration = {
  studentId: string,
  password: string,
  lastName: string,
  firstName: string,
  email: string,
  course: string, 
  section: string
};

export default function useRegistration() {
  const register = useCallback(async (registrationState: UserRegistration) => {

    const infoComplete = Object.values(registrationState)
                               .every(value => typeof value === 'string' && value.trim() !== '');
    
    if(!infoComplete){
      return alert('Complete all the fields first');
    }

    console.log(registrationState);
    try {
      const response = await axios.post('http://localhost:4001/registration', registrationState);

      if (response.status === 200) {
        console.log("User registered successfully!");
      } else {
        console.log("Registration failed.");
      }

    } catch (err) {
      console.error(err);
    }
  }, []);

  return { register };
}