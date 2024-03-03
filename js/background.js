/*
const images = [
	"1.jpeg",
	"2.jpeg",
	"3.jpeg",
];

//const chosenImage = images[Math.floor(Math.random() * images.length)];
*/

const accessKey = 'xxxxxx';
const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=landscape`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        //const bgImage = document.createElement("img");
        //bgImage.src = data.urls.regular; // API에서 받아온 이미지 URL을 직접 사용
        //document.body.appendChild(bgImage);
			
        document.body.style.backgroundImage = `url('${data.urls.regular}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';

    })
    .catch(error => {
        //const bgImage = document.createElement("img");
        //bgImage.src = "img/default.jpg"; // 오류 발생 시 기본 이미지 사용
        //document.body.appendChild(bgImage);
        document.body.style.backgroundImage = `url('img/default.jpg')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';

        console.error('Error fetching image:', error);
    });