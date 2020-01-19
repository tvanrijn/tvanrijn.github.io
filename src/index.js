import tagCloud from '../node_modules/tagcloud/jquery.tagcloud';
import initTilt from './js/tilt';
import initSr from './js/sr';
import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

var tags = [
  {
    tag: "React.js",
    count: 20
  }, {
    tag: "Redux",
    count: 17
  }, {
    tag: "HTML",
    count: 15
  }, {
    tag: "CSS",
    count: 14
  }, {
    tag: "Jest",
    count: 12
  }, {
    tag: "Node.js",
    count: 13
  }, {
    tag: "Javascript",
    count: 19
  }, {
    tag: "NPM",
    count: 11
  }, {
    tag: "Bootstrap",
    count: 8
  }, {
    tag: "MaterialUI",
    count: 9
  }, {
    tag: "Selenium Webdriver",
    count: 16
  }, {
    tag: "NUnit",
    count: 8
  }, {
    tag: "Specflow",
    count: 7
  }, {
    tag: "Scrum",
    count: 14
  }, {
    tag: "Agile",
    count: 17
  }, {
    tag: "TMap",
    count: 6
  }, {
    tag: "ISTQB",
    count: 6
  }, {
    tag: "C#",
    count: 14
  }, {
    tag: "PHP",
    count: 6
  }, {
    tag: "SQL",
    count: 12
  }, {
    tag: "JQuery",
    count: 12
  }, 
  {
    tag: "Styled Components",
    count: 10
  },
  {
    tag: "React Hooks",
    count: 10
  },
  {
    tag: "ContextApi",
    count: 7
  },
  {
    tag: "GraphQL",
    count: 8
  },
  {
    tag: "Stripe",
    count: 9
  },
  {
    tag: "Firebase",
    count: 7
  },
];

$("#tagcloud").tagCloud(tags);

initSr();
initTilt();
