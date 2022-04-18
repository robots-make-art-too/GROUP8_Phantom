AFRAME.registerComponent('accepts-clicks', {
    init: function() {
      this.el.addEventListener('touchend', handleClickEvent);
      this.el.addEventListener('click', handleClickEvent);
    },
 
  });
  
  function handleClickEvent() {
    characters.forEach(function(character) {
      var characterMarker = document.querySelector("#" + character.name + "-marker");
      if (characterMarker && characterMarker.object3D.visible) {
          var playerstate = true
        }
      }
    );
  }