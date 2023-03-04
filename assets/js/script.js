var icon = document.getElementById('share-icon');
var rrss = document.getElementById('social-media');
icon.addEventListener('click', function(){
    icon.classList.toggle('share-btn');
    rrss.classList.toggle('social-media-opacity');
})