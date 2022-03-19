import {db} from "./firebase";

let blogId = Math.floor(Math.random() * 1000).toString();
let docRef = db.collection("blogs").doc(blogId);

docRef.get().then((doc) => {
    if(doc.exists) {
        setup(doc.data());
    }
})

const setup = (data) => {
    const img = document.querySelector('.img');
    const blogTitle = document.querySelector('.title');
    const tag = document.querySelector('title');
    const publish = document.querySelector('title');
}
