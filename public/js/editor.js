const blogTitle = document.querySelector(".title");
const article = document.querySelector(".article");

const img = document.querySelector(".img");
const imgUpload = document.querySelector(".imgInput");
let imgPath;
const publishBtn = document.querySelector(".publish-btn");
const uploadInput = document.querySelector(".imgUpload");

img.addEventListener("change", () => {
  uploadImage(img, "imgUpload");
});

uploadInput.addEventListener("change", () => {
  uploadImage(img, "image");
});

const uploadImage = (uploadFile, uploadType) => {
  const [file] = uploadFile.files;
  if (file && file.type.includes("image")) {
    const formdata = new FormData();
    formdata.append("image", file);

    fetch("/upload", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (uploadType == "image") {
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

publishBtn;
