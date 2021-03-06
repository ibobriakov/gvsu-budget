var fixed_length = 2;
function format_shorten(value) {
    if (value === undefined) {
        return "N/A";
    } else if (value >= 1000000000) {
        return (value / 1000000000).toFixed(fixed_length).toString() + " B";
    } else if (value >= 1000000 && value < 1000000000) {
        return (value / 1000000).toFixed(fixed_length).toString() + " M";
    } else if (value < 1000000 && value >= 1000) {
        return (value / 1000).toFixed(fixed_length).toString() + " K";
    } else if (value < 1 && value != 0) {
        return (value * 100).toFixed(fixed_length).toString();
    } else {
        return value.toFixed(fixed_length).toString();
    }
}


d3.json('/data/mpu-years/mpu-1-years.json', function(error, data){
  var univers = Object.keys(data);
  var btn_group = document.getElementById('year-selector');
  var btn_group2 = document.getElementById('university-selector2');
  var dropdown_menu = document.getElementById('university-selector');
  current_university = 'GVSU';
  current_category = 'Revenues';
  univers.sort();

  for (category in data[current_university]) {
    var b = document.createElement('button');
    var btn = $(b);
    btn.addClass('btn btn-default');
    b.type = 'button';
    b.id = category;
    btn.text(category);
    btn_group.appendChild(b);
  };

  for (university in univers) {
    var b = document.createElement('button');
    var btn = $(b);
    btn.addClass('btn btn-default');
    b.type = 'button';
    b.id = univers[university];
    btn.text(univers[university]);
    btn_group2.appendChild(b);
  }
  $('#'+current_university).addClass('active');
  $('#'+current_category).addClass('active');

  function updateData (category, university) {
    category = current_category;
    university = current_university;
    var sub_data = data[university];
    nv.addGraph(function() {
      var chart = nv.models.stackedAreaChart()
      .interpolate('monotone')
      .x(function(d) { return d[0] })
      .y(function(d) { return d[1] })
      .clipEdge(true)
      .useInteractiveGuideline(true)
      ;

      chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { return d3.time.format('%Y')(new Date(d)) });

      chart.yAxis
      .showMaxMin(false)
      .ticks(4)
      .tickFormat(function(d) { return format_shorten(d);});

      sub_data[category].forEach(function(element, index){
        element["area"] = true;
      });
      d3.select('#years-chart svg')
      .datum(sub_data[category])
      .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  };
  updateData();

  $('#year-selector button').click(function() {
    current_category = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    updateData(category=current_category);
  });

  $('#university-selector2 button').click(function() {
    current_university = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    updateData(university=current_university);
  });

});



d3.json('/data/mpu-years/mpu-sum.json', function(error, data){
  var btn_group = document.getElementById('sum-years-selector');
  current_sum_category = 'Revenues';

  for (category in data) {
    var b = document.createElement('button');
    var btn = $(b);
    btn.addClass('btn btn-default');
    b.type = 'button';
    b.id = category;
    btn.text(category);
    btn_group.appendChild(b);
  };
  $('#'+current_sum_category).addClass('active');

  function updateData (category) {
    category = current_sum_category;
    nv.addGraph(function() {
      var chart = nv.models.lineChart()
      .interpolate('monotone')
      .x(function(d) { return d[0] })
      .y(function(d) { return d[1] })
      .clipEdge(true)
      .useInteractiveGuideline(true);
      // .tooltip(function(key, x, y, e, graph) {
      //   var s = 0;
      //   var xx = e.pointIndex;
      //   for (i in data[current_category]) {
      //     s += data[current_category][i].values[xx][1];
      //   }
      //   // console.log(data[current_category], 'e', e, y);
      //   var p = e.point[1] / s * 100.0;
      //   var res = '<h4>' + x + ' (total ' + formatcurrency(s) + ')</h4> ' + key + '<p> ' + Math.round(p) +'% of total (' + y + ')</p>'
      //   return res;
      // });

      chart.xAxis
      .showMaxMin(false)
      .tickFormat(function(d) { return d3.time.format('%Y')(new Date(d)) });

      chart.yAxis
      .ticks(4)
      .showMaxMin(false)
      .tickFormat(function (d) {
                return format_shorten(d);
            });

      data[category].forEach(function(element, index){
        element["area"] = true;
      });
      data[category].sort(function(a, b){
        var am = mean(a.values),
            bm = mean(b.values);
        if (am > bm) return -1;
        if (bm > am) return 1;
        return 0;
      });
      d3.select('#sum-years-chart svg')
      .datum(data[category])
      .transition().duration(500).call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  };
  updateData();

  $('#sum-years-selector button').click(function() {
    current_sum_category = $(this).text();
    $(this).addClass('active').siblings().removeClass('active');
    updateData(category=current_sum_category);
  });

});

function mean (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; ++i) sum += arr[i][1];
  return sum / arr.length;
}
