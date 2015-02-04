I hate some of the easter eggs in google hangouts. Specifically, the ones that come up when you say "woohoo", or "hahahaha", or under many other circumstances. Those things suck.

So I wanted to get rid of them. It turns out it's pretty easy to do so with a user stylesheet. If you get the stylish extension (available for firefox [here](https://addons.mozilla.org/en-US/firefox/addon/stylish/) or for chrome [here](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe)) then you can just add a user style with this code:
```.css
img[src*="chat/babble/ee/anim"] { display: none; }
```
and set it to apply all URLs on the domain `talkgadget.google.com`. If you have a convenient other way of editing the user stylesheet, go for it. The mozilla version looks like this:
```.css
@-moz-document domain("talkgadget.google.com") {
  img[src*="chat/babble/ee/anim"] { display: none; }
}
```

Note, though, that this won't stop other people from seeing those easter eggs! You will still send them. They're just hidden from view for you.
