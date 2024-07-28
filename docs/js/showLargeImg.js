function showLargeImg(url){
    let modal = document.createElement('div');
    modal.className = 'modal';
    let img = document.createElement('img');
    img.src = url;
    modal.appendChild(img);
    document.body.appendChild(modal);
    // window.open(url);
}