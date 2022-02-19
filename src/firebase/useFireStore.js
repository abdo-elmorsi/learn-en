import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const useFirestore = (colle) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    onSnapshot(query(collection(db, colle), orderBy('createdAt', 'desc')),
      (snapshot) => {
        setDocs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
  }, [colle]);

  return { docs };
}

export default useFirestore;