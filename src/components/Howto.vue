<template>
  <div id="howto">
    <h1>adding stuff to tildetv</h1>
    <p>to add videos to tildetv you can use the command-line tool generously provided by <a href="https://tilde.town/~karlen">~karlen</a>.</p>
    <div class="highlight">
<pre>$ ~karlen/tv/addtotv -h

Usage: addtotv [options] arg

Options:
  -h, --help            show this help message and exit
  -l LINK, --link=LINK  URL to youtube video quoted -l
                        "https://www.youtube.com/watch?v=z7VYVjR_nwE"
  -t TAGS, --tags=TAGS  Tags, comma separated and quoted, e.g. -t "Train, Ice,
                        cold"
  -c CW, --contentwarning=CW
                        Content warning, comma separatedand quoted, e.g -c
                        "Doggo, pupper, Joyce"
  -d DESC, --desc=DESC  Description of the video, quoted "A real angerery
                        pupper writing about pubs"</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'howto'
}
</script>
