var slideshow = {
  photoList: ['racoon', 'snake', 'rat'],
  current photoIndex : 0,
  nextPhoto: function(){
    if (this.currentPhotoIndex < this.photoList-1) {
      this.currentPhotoIndex++;
      console.log('currentPhoto is:' + this.photoList[this.currentPhotoIndex]);
    } else {
      console.log ('End of slideshow.')
    }
  },
  prevPhoto: function(){
    if (this.currentPhotoIndex > 0) {
      this.prevPhotoIndex--;
      console.log('currentPhoto is:' + this.photoList[this.currentPhotoIndex]);
    }else{
      console.log('Start sideshow')
    }
  },
  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
}
