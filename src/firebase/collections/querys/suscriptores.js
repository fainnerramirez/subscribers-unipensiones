import { db } from '../../firestore/database';
import { collection, query, where, limit, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es');

export const getAllSuscriptors = async () => {

    try {
        const q = query(collection(db, 'suscriptores'));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            let docs = [];
            querySnapshot.docs.forEach((doc, i) => {
                docs.push({ id: doc.id, ...doc.data() })
            });
            return docs;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error al buscar los suscriptores', error);
        return null;
    }    
}