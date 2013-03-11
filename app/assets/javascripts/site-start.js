// Add/Remove hover and active classes
$(document).ready(function() {

   // Preload the images
$('#container').waitForImages(function() {
   $('.icon-spinner').fadeOut(500,function(){
      $('.icon-spinner').remove();
   });
   $('#container').fadeIn(1000);
   $(function(){

   var $container = $('#container');

   $container.imagesLoaded( function(){
      $container.isotope({
         itemSelector : '.element'
      });
   });

   var $optionSets = $('#options .option-set'),$optionLinks = $optionSets.find('a');

   $optionLinks.click(function(){
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('selected') ) {
         return false;
      }
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.selected').removeClass('selected');
      $this.addClass('selected');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
         key = $optionSet.attr('data-option-key'),
         value = $this.attr('data-option-value');
         // parse 'false' as false boolean
         value = value === 'false' ? false : value;
         options[ key ] = value;
         if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
         // changes in layout modes need extra logic
         changeLayoutMode( $this, options )
      } else {
      // otherwise, apply new options
      $container.isotope( options );
      }
      return false;
   });

});
});

   $('.nav li a').hover(
      function () {
         $(this).addClass('hover');
      },
      function () {
         $(this).removeClass('hover');
      }
   );

   $('.nav li a').click(
      function () {
         $('.nav li').removeClass('active');
         $(this).parent().addClass('active');
      }
   );

   $('.element').hover(
      function () {
         $(this).children('.plus').addClass('plus-active');
         $(this).children('.dim').addClass('no-dim');
      },
      function () {
         $(this).children('.plus').removeClass('plus-active');
         $(this).children('.dim').removeClass('no-dim');
      }
   );


   // Set up portfolio images
   $('#amara').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-amara1.jpg', caption: "Designed by <a target='_blank' href='http://petersenwest.com'>PetersenWest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://amaradayspa.com'>Visit Site</a>" },
         { url: '/assets/port-amara2.jpg'},
         { url: '/assets/port-amara3.jpg'},
         { url: '/assets/port-amara4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#mountainwestburrito').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-mountainwestburrito1.jpg', caption: "Designed by <a target='_blank' href='http://petersenwest.com'>PetersenWest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://mountainwestburrito.com'>Visit Site</a>" },
         { url: '/assets/port-mountainwestburrito2.jpg'},
         { url: '/assets/port-mountainwestburrito3.jpg'},
         { url: '/assets/port-mountainwestburrito4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#lukemak').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-lukemak1.jpg'},
         { url: '/assets/port-lukemak2.jpg'},
         { url: '/assets/port-lukemak3.jpg'},
         { url: '/assets/port-lukemak4.jpg'},
         { url: '/assets/port-lukemak5.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#father').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-father.jpg', caption: "Three little girls call me daddy." }
      ],
      { ui: 'inside' }
      );
   });

   $('#uoc').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-uoc1.jpg'},
         { url: '/assets/port-uoc2.jpg'},
         { url: '/assets/port-uoc3.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#leavitt').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-leavitt1.jpg'},
         { url: '/assets/port-leavitt2.jpg'},
         { url: '/assets/port-leavitt3.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#tennis').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-tennis1.jpg', caption: "Tennis is a passion of mine. If possible, I'd play everyday." },
         { url: '/assets/port-tennis2.jpg'},
         { url: '/assets/port-tennis3.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#reporttime').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-reporttime1.jpg'},
         { url: '/assets/port-reporttime2.jpg'},
         { url: '/assets/port-reporttime3.jpg'},
         { url: '/assets/port-reporttime4.jpg'},
         { url: '/assets/port-reporttime5.jpg'},
         { url: '/assets/port-reporttime6.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#pizzeria').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-pizzeria1.jpg', caption: "Designed by <a target='_blank' href='http://petersenwest.com'>PetersenWest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://pizzeria712.com'>Visit Site</a>" },
         { url: '/assets/port-pizzeria2.jpg'},
         { url: '/assets/port-pizzeria3.jpg'},
         { url: '/assets/port-pizzeria4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#weber').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-weber.jpg', caption: "I graduated with a BFA from Weber State University." }
      ],
      { ui: 'inside' }
      );
   });

   $('#communal').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-communal1.jpg', caption: "Designed by <a target='_blank' href='http://petersenwest.com'>PetersenWest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://communalrestaurant.com'>Visit Site</a>" },
         { url: '/assets/port-communal2.jpg'},
         { url: '/assets/port-communal3.jpg'},
         { url: '/assets/port-communal4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#glasses').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-glasses.jpg', caption: "I wear weird yellow glasses while working at the computer. It helps my eyes not dry out." }
      ],
      { ui: 'inside' }
      );
   });

   $('#ucb').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-ucb1.jpg'},
         { url: '/assets/port-ucb2.jpg'},
         { url: '/assets/port-ucb3.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#ivu').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-ivu1.jpg'},
         { url: '/assets/port-ivu2.jpg'},
         { url: '/assets/port-ivu3.jpg'},
         { url: '/assets/port-ivu4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#icecream').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-icecream.jpg', caption: "This stuff is my great weakness in life." },
      ],
      { ui: 'inside' }
      );
   });

   $('#codegreen').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-codegreen1.jpg', caption: "<a target='_blank' href='http://codegreeninteractive.com'>Visit Site</a>"},
         { url: '/assets/port-codegreen2.jpg'},
         { url: '/assets/port-codegreen3.jpg'},
         { url: '/assets/port-codegreen4.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#magentomavens').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-magentomavens1.jpg'},
         { url: '/assets/port-magentomavens2.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#torbet').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-torbet1.jpg', caption: "Designed by <a target='_blank' href='http://petersenwest.com'>PetersenWest</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a target='_blank' href='http://torbetlaw.com'>Visit Site</a>" },
         { url: '/assets/port-torbet2.jpg'},
         { url: '/assets/port-torbet3.jpg'}
      ],
      { ui: 'inside' }
      );
   });

   $('#zelda').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-zelda.jpg', caption: "I know where every secret is on the original Zelda game." }
      ],
      { ui: 'inside' }
      );
   });

   $('#ironwood').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-ironwood.jpg', caption: "I have a collection of ironwood sculptures." }
      ],
      { ui: 'inside' }
      );
   });

   $('#books').bind('click', function() {
      Fresco.show([
         { url: '/assets/port-books.jpg', caption: "My favorite book series is The Wheel of Time by Robert Jordan." }
      ],
      { ui: 'inside' }
      );
   });

});