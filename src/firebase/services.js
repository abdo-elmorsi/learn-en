import { db, timestamp } from "./firebase";

import {
	collection,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
	orderBy,
} from "firebase/firestore";

class DataServices {
	addItem = (part, newItem) => {
		const createdAt = timestamp;
		return addDoc(collection(db, part), { ...newItem, createdAt });
	};

	updateItem = (part, id, updatedItem) => {
		const ItemDoc = doc(db, part, id);
		updateDoc(ItemDoc, updatedItem);
		return { ...updatedItem, id }
	};

	deleteItem = (part, id) => {
		const ItemDoc = doc(db, part, id);
		return deleteDoc(ItemDoc)
	};

	getAllItems = (part) => {
		return getDocs(collection(db, part), orderBy('createdAt', 'desc'));
	};

	getItem = (id, part) => {
		const ItemDoc = doc(db, part, id);
		return getDoc(ItemDoc);
	};
}

export default new DataServices();



// const BookDataService = {
//   addBooks: (newBook) => {
//     return addDoc(bookCollectionRef, newBook);
//   },

//   updateBook: (id, updatedBook) => {
//     const bookDoc = doc(db, "books", id);
//     return updateDoc(bookDoc, updatedBook);
//   },

//   deleteBook: (id) => {
//     const bookDoc = doc(db, "books", id);
//     return deleteDoc(bookDoc);
//   },

//   getAllBooks: () => {
//     return getDocs(bookCollectionRef);
//   },

//   getBook: (id) => {
//     const bookDoc = doc(db, "books", id);
//     return getDoc(bookDoc);
//   },
// }

// export default BookDataService;