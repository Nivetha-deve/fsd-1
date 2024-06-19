import  { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../../apis/auth';

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');

  useEffect(() => {

    const verifyFun = async () => {
      try {
        //Extracting query parameter
        const token = searchParams.get("token");

        if(!token) {
            setMessage("Invalid request: Missing token.");
            return;
        }

        //making API call
        const data = await verifyAccount(token);

        //Handling response
        if (data.code ===1) {
            setMessage("Account successfully verified.");
        } else if (data.code === -1){
            setMessage("the veritication like has expirred");
        } else {
            setMessage ("verification failed.please try again.");
        } 
       } catch (error){
        setMessage("an error occured during verification");
       }
        };
        verifyFun();
    },[searchParams]);
  return (
    <div>
      <h1>Verify Account</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyAccount;
