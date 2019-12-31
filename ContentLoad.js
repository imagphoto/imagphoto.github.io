$(window).on(&#39;DOMContentLoaded load resize scroll&#39;, function () {;
  var images = $(&quot;#main-wrapper img[data-src]&quot;);
  // load images that have entered the viewport
  $(images).each(function (index) {
    if (isElementInViewport(this)) {
      $(this).attr(&quot;src&quot;,$(this).attr(&quot;data-src&quot;));
            $(this).removeAttr(&quot;data-src&quot;);
    }
  })
  // if all the images are loaded, stop calling the handler
  if (images.length == 0) {
    $(window).off(&#39;DOMContentLoaded load resize scroll&#39;)
  }
})

// source: http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top &gt;= 0 &amp;&amp;
        rect.left &gt;= 0 &amp;&amp;
        rect.bottom &lt;= $(window).height() &amp;&amp;
        rect.right &lt;= $(window).width()
    );
}
