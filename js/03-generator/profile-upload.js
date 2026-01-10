const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photo-preview');

photoInput.addEventListener('change', function() {
const file = this.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
    photoPreview.innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.result;
    photoPreview.appendChild(img);
    };
    reader.readAsDataURL(file);
}
});
