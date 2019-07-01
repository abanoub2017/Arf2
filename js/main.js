// Side Menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  } 
  
  // Slider
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  
  // Fixed Menu
  $(document).ready(function(){
      $(".clicktoggle").click(function(){
        $(".menu").toggleClass("translat");
        $(".iconToggel").toggleClass("rotate");
      });
  
  // Stocks Tabel
      $(".test").click(function(){
          $(".stocksTabel").toggleClass("col-md-3 col-md-6");
          $(".stocksDetails").toggleClass("col-md-9 col-md-6");
          $(".display-none").toggle("display-block");
          $(".display-block").toggle("display-none");
        });
  

  // Nice Scroll

    $(".postions , .acount-status ,.order , .alert , .wash-list , .wallet-status , .overview  , .anouncment, .wallet " ).mCustomScrollbar({
       
        axis:"y" // vertical and horizontal scrollbar
    });

       
        // $("  .stockB   ").niceScroll({
        //     cursorwidth: 5,  
        //     cursoropacitymin: 0.0,
        //     cursorcolor: '#f57a20',
        //     cursorborder: 'none',
        //     cursorborderradius: 0,
        //     autohidemode: 'leave',
        //   });  


     //   Charts 
         Highcharts.chart('container', {
          colors: ['#5eff06', '#ff0000', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                 '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
             chart: {
                 backgroundColor: {
                     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                     stops: [
                         [0, 'rgba(156, 156, 156, 0)'],
                         [1, 'rgba(0, 0, 0, 0)']
                     ]
                 },
                 chartHeight :{
                     height:  50
                 },
                 style: {
                     fontFamily: '\'Unica One\', sans-serif'
                 },
                 plotBorderColor: '#606063'
             },
             xAxis: {
                 categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
             },
             yAxis: {
                 title: {
                     text: 'Temperature (°C)'
                 }
             },
             plotOptions: {
                 line: {
                     dataLabels: {
                         enabled: true
                     },
                     enableMouseTracking: false
                 }
             },
             series: [{
                 name: 'Tokyo',
                 data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
             }, {
                 name: 'London',
                 data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
             }],
             responsive: {
              rules: [{
                  condition: {
                      maxWidth: 1000
                  },
                  chartOptions: {
                      legend: {
                          align: 'center',
                          verticalAlign: 'bottom',
                          layout: 'horizontal'
                      }
                  }
              }]
          }
         });
  
         Highcharts.chart('container2', {
          colors: ['#5eff06', '#ff0000', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                 '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
             chart: {
                 backgroundColor: {
                     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                     stops: [
                         [0, 'rgba(156, 156, 156, 0)'],
                         [1, 'rgba(0, 0, 0, 0)']
                     ]
                 },
                 style: {
                     fontFamily: '\'Unica One\', sans-serif',
                     height: '100%',
                 },
                 plotBorderColor: '#606063'
             },
             title: {
              text: 'Highcharts responsive chart',
              style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
             },
             subtitle: {
              text: 'Highcharts responsive chart',
              style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
             },
             xAxis: {
                 categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
             },
             yAxis: {
                 title: {
                     text: 'Temperature (°C)'
                 }
             },
             plotOptions: {
                 line: {
                     dataLabels: {
                         enabled: true
                     },
                     enableMouseTracking: false
                 }
             },
             series: [{
                 name: 'Tokyo',
                 data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
             }, {
                 name: 'London',
                 data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
             }],
             responsive: {
              rules: [{
                  condition: {
                      maxWidth: 1000
                  },
                  chartOptions: {
                      legend: {
                          align: 'center',
                          verticalAlign: 'bottom',
                          layout: 'horizontal'
                      }
                  }
              }]
          }
         });
  
  
  
  
  
  
  
         
    });
  