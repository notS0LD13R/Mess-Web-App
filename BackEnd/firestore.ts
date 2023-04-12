import app from './firebase-config'
import {
    getFirestore,
    collection,
    getDocs,
    where,
    query,
    DocumentData
} from 'firebase/firestore'

interface MessCut {
    CutDays:[number],
    ID:string
}

 const db=getFirestore(app);
 
 export const fetchDocbyID=async (collectionName:string,ID:string)=>{
    
    const querySnapshot = await getDocs(
        
         query(
             collection(db, collectionName),
             where('ID','==',ID)
         ) 
        );
    
    const docArray:DocumentData[]=[];
    querySnapshot.forEach((doc)=>{
        docArray.push(doc.data())
    })
    return docArray
 }



