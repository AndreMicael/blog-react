import {db} from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuth = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);

    // Limpeza de memory leak

    const [ cancelled,setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if (cancelled) {
            return;
        }
    }


    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);
        try {
            //Criado usuário
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            //Atualizando perfil
            await updateProfile(user, {
                displayName: data.displayName
            }) 
            setLoading(false);
            return user

        } catch (error){

            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = 'A senha precisa ter pelo menos 6 caracteres.'
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = 'E-mail já cadastrado.'
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setLoading(false);
            setError(systemErrorMessage);

        }

    
    }

    //Logout

    const logout = () => {
        
       checkIfIsCancelled();
        signOut(auth);
      
      
    }

    //Login

    const login = async (data) => {
        checkIfIsCancelled();
    
        setLoading(true);
        setError(false);
    
        try {
          await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
          console.log(error.message);
          const errorMessage = error.message;
          console.log(errorMessage);
         // console.log(typeof error.message);
          //console.log(error.message.includes("user-not"));
    
          let systemErrorMessage = error.code;
    
        //  if (error.message.includes("user-not-found")) {
        //    systemErrorMessage = "Usuário não encontrado.";
        //  } else if (error.message.includes("wrong-password")) {
         //   systemErrorMessage = "Senha incorreta.";
        //  } else {
        //    systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        //  }
    
          console.log(systemErrorMessage);
    
          setError(systemErrorMessage);
        }
    
        console.log(error);
    
        setLoading(false);
      };
    
    useEffect( () => {
        return () => setCancelled(true);
    }, [] )

return {
    auth,
    createUser,
    error, 
    loading,
    logout,
    login,
};

};