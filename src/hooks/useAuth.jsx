import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firabase/auth'

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
}