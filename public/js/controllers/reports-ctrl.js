angular.module('ReportsCtrl', ['ngMaterial']).controller('ReportsController', function($scope, $timeout) {

    $timeout(function() {

     $('#nebraska-spline').highcharts({
            chart: {
                type: 'spline'
            },
            title:{
                text:'Nebraska Plants',
                useHTML : true,
                style: {
                    'font-weight' : 'bold',
                    color : '#000000'
                }
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'
                ],
                tickmarkPlacement: 'on',
                title : {
                    text : 'Month'
                }
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                verticalAlign: 'top',
                itemMarginBottom : 8,
                x:0,
                y: 70
            },

            tooltip:{
                enabled:true
            },
            credits: {
                enabled: false
            },
            background:{color:'transparent'},
            yAxis: {
                offset : 0,
                tickAmount : 5,
                title : {
                    text : 'Crude Oil (bbl)'
                }

            },

            plotOptions: {
                spline : {
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 4
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }},
            exporting: {
                enabled: true
            },
            series: [ {
                name : 'Oil Drilled',
                data: [
                    67200,
                    57090,
                    60500,
                    63060,
                    64200,
                    70300
                ],
                color : '#42A5F5'


            },{
                name :   'Oil Supplied',
                data : [
                    70000,
                    59949,
                    58900,
                    57000,
                    59700,
                    71800
                ],
                color : 'brown'
            }
            ]
        });




        $('#alaska-spline').highcharts({
            chart: {
                type: 'spline'
            },
            title:{
                text:'Alaska Plants',
                useHTML : true,
                style: {
                    'font-weight' : 'bold',
                    color : '#000000'
                }
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'
                ],
                tickmarkPlacement: 'on',
                title : {
                    text : 'Month'
                }
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                verticalAlign: 'top',
                itemMarginBottom : 8,
                x:0,
                y: 70
            },

            tooltip:{
                enabled:true
            },
            credits: {
                enabled: false
            },
            background:{color:'transparent'},
            yAxis: {
                offset : 0,
                tickAmount : 5,
                title : {
                    text : 'Crude Oil (bbl)'
                }

            },

            plotOptions: {
                spline : {
                    lineWidth: 3,
                    states: {
                        hover: {
                            lineWidth: 4
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }},
            exporting: {
                enabled: true
            },
            series: [ {
                name : 'Oil Drilled',
                data: [
                    63060,
                    59700,
                    60500,
                    57000,
                    65200,
                    62800
                ],
                color : '#42A5F5'


            },{
                name :   'Oil Supplied',
                data : [
                    67200,
                    62090,
                    58900,
                    60111,
                    61949,
                    59777
                ],
                color : 'brown'
            }
            ]
        });


        $('#oil-delivered-pie').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Oil Delivered / Agent',
                useHTML : true,
                style: {
                    'font-weight' : 'bold',
                    color : '#000000'
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ' '
                }
            },
            tooltip: {
                enabled: true
            },
            plotOptions: {
                pie: {

                    allowPointSelect: false,
                    shadow: false,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },

            exporting: {
                enabled: true
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                verticalAlign: 'top',
                itemMarginTop :5,
                x: 0,
                y: 60
            },
            series:
                [{
                    type: 'pie',
                    name: 'Oil Delivered Per Agent (bbl)',
                    data: [
                        {name : 'Adeline Brothers', y :	48560},
                        {name : 'Glen Flora Pvt Ltd', y: 95720},
                        {name : 'Richville & Sons',   y: 26430},
                        {name : 'Gem & Loa',y:	72790},
                        {name : 'Miami Distributors',y:	79720},
                        {name : 'Stewartville',y: 97020},
                        {name : 'Harrington',y: 97207}
                        
                        
                    ]

                }
                ]
        });

        $('#oil-supplied-pie').highcharts({
            chart: {
                type: 'column'
            },
            title:{
                text:'Oil Supplied',
                useHTML : true,
                style: {
                    'font-weight' : 'bold',
                    color : '#000000'
                }
            },
            xAxis: {
                title : {
                    text : 'Month'
                },
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'June'
                ],
                tickmarkPlacement: 'on'
            },
            legend: {
                enabled : false
            },
            tooltip:{
                enabled:true
            },
            credits: {
                enabled: false
            },
            background:{color:'transparent'},
            yAxis: {
                tickAmount : 5,
                title : {
                    text : 'Crude Oil (bbl)'
                }

            },

            plotOptions: {
                series: {
                    color: '#42A5F5'
                }
            },
            exporting: {
                enabled: true
            },
            series: [
                {name : "Oil Delivered",
                data: [80900,76700,77700,85700,57600,48200]


            }]
        });


        $('#trailer-tracking-column').highcharts({
            chart: {
                type: 'column'
            },
            title:{
                text:'Trailer Tracking',
                useHTML : true,
                style: {
                    'font-weight' : 'bold',
                    color : '#000000'
                }
            },
            xAxis: {
                categories: [
                    'Reached',
                    'Returning',
                    'Parked',
                    'Being Repaired'
                ],
                tickmarkPlacement: 'on'
            },
            legend: {
                enabled : false
            },

            tooltip:{
                enabled:true
            },
            credits: {
                enabled: false
            },
            background:{color:'transparent'},
            yAxis: {
                tickAmount : 5,
                title : {
                    text : ' '
                }

            },

            plotOptions: {
                series: {
                    color: 'blue'
                }
            },
            exporting: {
                enabled: true
            },
            series: [{
                name : 'count',
                data: [
                    {name : 'Reached', y : 28 },
                    {name : 'Returning', y : 12},
                    {name : 'Parked', y : 3},
                    {name : 'Being Repaired', y : 8, color: "red"}
                ]
            }
            ]
        });

    }, 250);

});