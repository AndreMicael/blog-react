import {useState, useEffect} from 'react';
import {db} from '../firebase/config';
import {collection,query,onSnapshot,where, orderBy, getDocs} from 'firebase/firestore' 
 
export const useFetchDocuments = (docCollection, search = null, uid = null) => {
 
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
 
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)
 
        useEffect(() => {
        
            const getUsers = async() => {
            
            if(cancelled) return 
 
            setLoading(true);
 
            const userCollectionRef = collection(db,docCollection);
            
            try {
                let q ;
                    q= await getDocs(userCollectionRef);
                    setDocuments( q.docs.map((doc) => ({
                        ...doc.data(),
                        id:doc.id,
                    })))
                console.log(documents)
            } catch (error) {
                
            }
 
        }
        getUsers();
        setLoading(false);
    },[])
 
    return {documents,loading,error};
}