import app from './firebase-config'
import {
    getFirestore,
    collection,
    getDocs,
    where,
    query
} from 'firebase/firestore'

 const db=getFirestore(app);
 
 export const fetchDoc=async ()=>{
    const querySnapshot = await getDocs(collection(db, "temp"));
    
    querySnapshot.forEach((doc)=>{
        console.log(doc.data())
    })

    return querySnapshot.empty
 }



