
//https://dog.ceo/api/breeds/image/random

const randomImageDiv = document.getElementById('randomImage');
const randomButton = document.getElementById('randomButton');

const fetchRandomImage = () => {
    fetch('https://picsum.photos/300/300')
        .then(response => {
            randomImageDiv.innerHTML = `<img src="${response.url}"/>`;
            console.log('得到圖片')
        })
        .catch(error => console.error('圖片獲取失敗', error));
}


randomButton.onclick = () => fetchRandomImage()