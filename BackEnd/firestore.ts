import app from './firebase-config'
import {
    getFirestore,
    getDoc,doc, setDoc,
} from 'firebase/firestore'



 const db=getFirestore(app);
 
 export const fetchMessCutbyID=async (collectionName:string,ID:string)=>{
    
    const docSnap = await getDoc(
        doc(db,collectionName,ID)
        );
    return docSnap.exists() ? docSnap.data() : {ID:ID,CutDays:[]}
 }

 export const updateMessCutbyID =
 async (collectionName:string,ID:string,CutDays:number[])=>{
    setDoc(
        doc(db,collectionName,ID),
        {ID:ID,CutDays:CutDays}
        )
 }



