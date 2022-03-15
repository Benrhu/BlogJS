const blogTitle = document.querySelector(".title");
const article = document.querySelector(".article");

const img = document.querySelector(".img");
const imgUpload = document.querySelector(".img-input");
let imgPath;
const publishBtn = document.querySelector(".publish-btn");
const uploadInput = document.querySelector(".img-upload");

img.addEventListener("change", () => {
  uploadImage(img, "img-upload");
});

uploadInput.addEventListener("change", () => {
  uploadImage(img, "image");
});

const uploadImage = (uploadFile, uploadType) => {
  const [file] = uploadFile.files;
  if (file && file.type.includes("image")) {
    const formdata = new FormData();
    formdata.append("image", file);

    fetch("/uploads", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (uploadType === "image") {
          addImage(data, file.name);
        } else {
          imgPath = `${location.origin}/${data}`;
          imgUpload.style.backgroundImage = `url("${imgPath}")`;
        }
      });
  } else {
    alert("Upload image only");
  }
};

const addImage = (pathImage, alt) => {
  let pos = article.selectionStart;
  let insertText = `\r ![${alt}] (${pathImage}) \r`;
  article.value =
    article.value.slice(0, pos) + insertText + article.value.slice(pos);
};

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

publishBtn.addEventListener("click", () => {
  if (article.value.length && blogTitle.value.split(" ").join("-")) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let blogTitle = blogTitle.value.split(" ").join("-");
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += Math.random() * letters.length;
    }

    let docName = `${blogTitle}-${id}`;
    let date = new Date();

    db.collection("blogs")
      .doc(docName)
      .set({
        title: blogTitle,
        article: article,
        img: imgPath,
        publishedDate: `${date.getDate()} 
          ${months[date.getMonth()]} 
          ${date.getFullYear()}`,
      })
      .then(() => {
        console.log("Date entered");
      })
      .catch((err) => {
        console.error(err);
      });
  }
});
