// I'm keeping this around mostly just as a reminder and backup of how to mess with MutationObservers. I've since reimplemented this for use with the Stylish extension (available for chrome and firefox!). See README.md.

var config = {childList: true, subtree: true, attributes: false, characterData: false}
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    length = mutation.addedNodes.length;
    for (var i=0; i<length; i++) {
      var el = mutation.addedNodes[i];
      if (!('tagName' in el)) { continue; }
      var sub = el.getElementsByTagName("img");
      for (var j=0; j<sub.length; j++) {
        if (sub[j].src.indexOf("chat/babble/ee/anim") != -1) {
          sub[j].remove();
        }
      }
    }
  });
});

observer.observe(document.body, config);
