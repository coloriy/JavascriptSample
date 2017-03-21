$(function() {
    $('#container').highcharts({
        chart: {
            type: ''
        },
        title: {
            text: ''
        },
        credits: {
            text: ''
        },
        xAxis: {
            
            labels: {
                //align : 'center',
                rotation: 90,
                //staggerLines: 2,
                //step : 2,
                style: {
                    color: '#6D869F',
                    fontWeight: 'bold'
                }
            },
            categories: ['2014年1月', '2014年2月', '2014年3月', '2014年4月', '2014年5月', '2014年6月', '2014年7月', '2014年8月', '2014年9月', '2014年10月', '2014年11月', '2014年12月'],
            
            
        },
        yAxis: {
            min: 0,
            title: {
                text: '项次'
            }
        },
        tooltip: {
        
            formatter: function() {
                                    
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>'
                    //+'Total: '+ this.point.stackTotal;
                
            }
        },
        plotOptions: {
            column: {
                //stacking: 'normal',
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: [{
            name: '已完成',
            type: 'column',
            color: 'blue',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        },
        {
            name: '所有',
            type: 'column',
            color: 'red',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        },{
            name: '已完成',
            type: 'line',
            color: 'blue',
            //linkedTo : 'previous',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        },{
            name: '所有',
            type: 'line',
            color: 'red',
            //linkedTo : 'previous',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }]
    });
});
