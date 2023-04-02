const getCatButton = document.getElementById('get-cat-button');
const getGifButton = document.getElementById('get-gif-button');
const catImage = document.getElementById('cat-image');

getCatButton.addEventListener('click', e => {
	fetch('https://cataas.com/cat')
		.then(response => {
			catImage.innerHTML = `<img src="${response.url}"/>`;
		})
		.catch(error => console.error(error));
});

getGifButton.addEventListener('click', e => {
	fetch('https://cataas.com/cat/gif?json=true')
		.then(response => response.json())
		.then(data => {
			const gifUrl = `https://cataas.com${data.url}`;
			catImage.innerHTML = `<img src="${gifUrl}"/>`;
		})
		.catch(error => console.error(error));
});