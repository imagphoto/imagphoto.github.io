
var myLazyLoad = new LazyLoad({
  threshold: 50,
  callback_load: function(e) {
    console.log($(e).attr(&quot;data-original&quot;) + &quot; loaded&quot; );
  }
});
