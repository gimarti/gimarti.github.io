const defined_resources = {

  "practical-typography": {
    "image": "./img/practicaltypography.png",
    "title": "Practical Typography",
    "titleLink": "https://practicaltypography.com/",
    "author": "Matthew Butterick",
    "attributes": "Online book (free)",
    "description": "This is an excellent introduction to typography that I would recommend to everyone that is not already as seasoned typographer. As you may notice, this website uses typefaces designed by Matthew Butterick."
  },

  "elements-typography": {
    "image": "./img/elements_typography.png",
    "title": "The Elements of Typographic Style",
    "titleLink": "https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style",
    "author": "Robert Bringhurst",
    "attributes": "Book (out of print)",
    "description": "This book is widely regarded as <em>the</em> handbook of typography. While my doctoral thesis is somewhat strongly influenced by Bringhurst, I am not sure whether this book is the most useful reference for beginners. Also, it seems to be difficult to source these days...",
    "frame": true    
  },

  "visual-display": {
    "image": "./img/visual_display.jpg",
    "title": "The Visual Display of Quantitative Information",
    "titleLink": "https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/?_gl=1*1hfrke0*_up*MQ..*_ga*NzE5MzA4NzU4LjE3NjkwMTA1ODA.*_ga_JCT37YWSC9*czE3NjkwMTA1NzkkbzEkZzAkdDE3NjkwMTA1NzkkajYwJGwwJGgw",
    "author": "Edward R. Tufte",
    "attributes": "Book",
    "description": `
      The classic book on data visualization. Its visuals may feel outdated, but it can teach you how to <em>think</em> about the display of quantitative information. After reading it, you will know <em>why</em> the graph on the left is infinitely preferrable to the one on the right.
      <div style="display: flex; gap: 35px; margin-top: 10px; margin-left: 15px">
        <img src="./img/dof_plot_good.png" style="width: 258px; max-width: none; max-height: none;">
        <img src="./img/dof_plot_bad.png" style="width: 250px; max-width: none; max-height: none;">
      </div>
    `,
    "frame": true    
  },

  "buecher-gestalte": {
    "image": "./img/forssman.png",
    "title": "Wie ich Bücher gestalte",
    "titleLink": "https://www.wallstein-verlag.de/9783835315914-wie-ich-buecher-gestalte.html",
    "author": "Friedrich Forssman",
    "attributes": "Book (German)",
    "description": "In this little gem, eminent German typographer Friedrich Forssman spills the beans. Recommended especially to lovers of the printed book.",
    "frame": true    
  },    

  "detail-typografie": {
    "image": "./img/detailtypografie.png",
    "title": "Detailtypografie",
    "titleLink": "https://typografie.de/produkt/detailtypografie/",
    "author": "Ralf de Jong and Friedrich Forssman",
    "attributes": "Book (German)",
    "description": "The definite reference on (micro-)typography. Of interest mainly to fanatics, as well as to those that consider becoming fanatics.",
  },  

  "lese-typografie": {
    "image": "./img/lesetypografie.png",
    "title": "Lesetypografie",
    "titleLink": "https://typografie.de/produkt/lesetypografie/",
    "author": "Friedrich Forssman and Hans Peter Willberg",
    "attributes": "Book (German)",
    "description": "The larger and more serious version of Forssman's <em>Wie ich Bücher gestalte</em>. Inspirational also because of its many beautiful examples.",
  },    

  "how-to-speak": {
    "image": "./img/howtospeak.png",
    "title": "How to Speak",
    "titleLink": "https://www.youtube.com/watch?v=Unzc731iCUY",
    "author": "Patrick Henry Winston",
    "attributes": "Lecture (YouTube)",
    "description": "In this sixty-minute lecture, late MIT professor Patrick Henry Winston gives sound advice on how to give a good talk. You will notice that he convincingly follows his own advice.",
  },  

  "make-it-clear": {
    "image": "./img/makeitclear.jpeg",
    "title": "Make It Clear",
    "titleLink": "https://direct.mit.edu/books/book/4874/Make-It-ClearSpeak-and-Write-to-Persuade-and",
    "author": "Patrick Henry Winston",
    "attributes": "Book (free online version)",
    "description": "This book is essentially the expanded version of Winston's <em>hHow to Speak</em>. Besides speaking, it also covers writing, and much else. I cannot recommend it enough.",
    "frame": true    
  },    

  "trees-maps-theorems": {
    "image": "./img/treesmapstheorems.jpg",
    "title": "Trees, Maps, and Theorems",
    "titleLink": "https://www.principiae.be/X0100.php",
    "author": "Jean-Luc Doumont",
    "attributes": "Book",
    "description": "This book showcases a radical and uncompromising unification of form and function that may not be realistic for those of us with bosses and deadlines. Its aspirational stance is impressive nonetheless. It contains many helpful ideas.",
    "frame": true    
  },      
};

function renderResource(id) {
  const res = defined_resources[id];
  if (!res) return '';

  const frameClass = res.frame ? ' img-framed' : '';  

  return `
    <div class="app_resource">
      <div class="image-container">
        <img src="${res.image}" class="${frameClass}" alt="">
      </div>
      <div class="text-container">
        <div class="title"><a href="${res.titleLink}" target="_blank"><span class="res-title">${res.title},</span> <span class="res-author">by ${res.author}</span></a></div>
        <div class="attributes">${res.attributes}</div>
        <div class="description">${res.description}</div>
      </div>
    </div>
  `;
}

// Auto-render all resource-entry elements when page loads
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.resource-entry').forEach(el => {
    el.innerHTML = renderResource(el.dataset.id);
  });
});