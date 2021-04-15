import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firebase.collection('users')
  .doc('0htUvdHzB0zcQ7iNRd47')
  .collection('cc')
  .doc('JtYgOzD1bsnzNJ4M8CYT');

firestore.doc('/users/0htUvdHzB0zcQ7iNRd47/cartItems/JtYgOzD1bsnzNJ4M8CYT');
firebase.collection('/users/0htUvdHzB0zcQ7iNRd47/cartItems');
