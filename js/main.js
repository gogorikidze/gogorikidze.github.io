let count = 0;
let projectHolder = document.getElementById('projectholder');
let portfolio =[
  {
    image:'img/projects/orb.ge.png',
    name:'Orb Search Engine',
    description: 'Search Engine for free Books in online repositories',
    techused: 'Node,Cheerio,Express,Puppeteer,PlayWright',
    view: 'http://orb.ge/',
    source: 'https://github.com/gogorikidze/Orb'
  },
  {
    image:'img/projects/three.png',
    name:'Three.php',
    description: 'Inspired by three.js, three.php is a software raycater/rasterizer that runs on ordinary webservers',
    techused: 'PHP',
    source: 'https://github.com/gogorikidze/three.php'
  },
  {
    image:'img/projects/magentarine.mp4',
    name:'Magentarine',
    description: 'Magentarine is a tiny JavaScript code editor running on Nashorn Engine',
    techused: 'Java',
    source: 'https://github.com/gogorikidze/Magentarine',
    video: true
  },
  {
    image:'img/projects/leech.png',
    name:'Leechserve',
    description: 'Open Source library for encoding/decoding data into images and then serving it from popular image hosting services',
    techused: 'JavaScript',
    source: 'https://github.com/gogorikidze/leechserve'
  },
  {
    image:'img/projects/faceit.png',
    name:'faceitEloWidget',
    description: 'Widget for streamers who grind faceit elo. It displays skill group and elo',
    techused: 'JavaScript',
    source: 'https://github.com/gogorikidze/faceitEloWidget',
    view: 'https://gogorikidze.github.io/faceitEloWidget/?user=s1mple'
  },
  {
    image:'img/projects/semi.png',
    name:'Semicolon-count-badge',
    description: 'Semicolon count badge from a single file in GitHub repository',
    techused: 'PHP, JavaScript',
    source: 'https://github.com/gogorikidze/Semicolon-count-badge',
    view: 'http://gogorikidze.com/semicolon/'
  },

  //commision
  {
    image:'img/projects/rikulebi.com.ge.png',
    name:'Rikulebi.com.ge',
    description: 'Website setup and Custom WP theme to catalogue the products',
    techused: 'WordPress,PHP,JavaScript',
    view: 'https://rikulebi.com.ge/'
  },
  {
    image:'img/projects/rik3d.png',
    name:'rikul3D symmetric 3d modelling app',
    description: 'Created as rikulebi.com.ge addon to model 3d ballusters',
    techused: 'JavaScript,Three.js',
    view: 'https://gogorikidze.github.io/rikul3d/',
    source: 'https://github.com/gogorikidze/rikul3d'
  },
  {
    image:'img/projects/alpen.png',
    name:'alpen.ge',
    description: 'Greeting card website for alpen',
    techused: 'HTML, JavaScript',
    view: 'https://alpen.ge/',
  }
];
let techcolors={
  JavaScript: 'orange',
  PHP: '#474A8A',
  HTML: '#e34c26',
  Node: '#3C873A',
  Cheerio: '#159957',
  Puppeteer: '#40b5a4',
  CSS: '#264de4',
  WordPress: '#444140',
  'Three.js': '#049EF4'
}
function getTechColor(tech){
  if(techcolors[tech] != undefined){
    return techcolors[tech];
  }else{
    return 'black';
  }
}
portfolio.map(project => {
  let image = `
  <div class="browser">
  	  <div class="browser-navigation-bar">
      <i></i><i></i><i></i>
      <!-- Place your URL into <input> below -->
      <input value="${project.view||'no address'}" disabled />
    	</div>

    <div class="browser-container">
      <img src="${project.image}">
    </div>
  </div>
  `;

  let video = `
  <video class="vid" autoplay loop muted>
    <source src="${project.image}" type="video/mp4" />
  </video>
  `

  let display = image;

  if(project.video) display = video;

  let linksHTML = "<div class='links'>";
  if(project.view != undefined){
    linksHTML += "<a target='_blank' rel='noopener noreferrer' href='"+project.view+"'>View Project</a> ";
  }
  if(project.source != undefined){
    linksHTML += " <a target='_blank' rel='noopener noreferrer' href='"+project.source+"'>View Source</a>";
  }
  linksHTML += "</div>";
  let techused = '';
  project.techused.split(',').map(tech => techused += " <text class='techicon' style='background-color:"+getTechColor(tech)+"'>"+tech+"</text>")

  let projectHTML;
  if(count%2 == 1){
    projectHTML = `
    <div class='project'>${display}
      <div class='info'>
        <div class='name'>${project.name}</div>
        <div class='description'>${project.description}</div>
        <div class='techused'>Technologies used:${techused}</div>
        ${linksHTML}
      </div>
    </div>`
  }else{
    projectHTML = `
    <div class='project'>
      <div class='info'>
        <div class='name'>${project.name}</div>
        <div class='description'>${project.description}</div>
        <div class='techused'>Technologies used:${techused}</div>
        ${linksHTML}
      </div>
      ${display}
    </div>`
  }
  projectHolder.innerHTML += projectHTML;
  count++;
})
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}
document.getElementById("scroll").addEventListener('click', () => {
  scrollTo(document.getElementById("projects"));
});
