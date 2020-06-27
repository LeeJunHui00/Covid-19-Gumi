google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "X");
  data.addColumn("number", "확진자 수");

  data.addRows([
    [1, 42],
    [2, 125],
    [3, 2021],
    [4, 14557],
    [5, 37449],
    [6, 68922],
    [7, 78255],
    [8, 87167],
    [9, 108349],
    [10, 167384],
    [11, 295345],
    [12, 639784],
    [13, 1137266],
    [14, 1699577],
    [15, 2242924],
    [16, 2795820],
    [17, 3355603],
    [18, 3951049],
    [19, 4556844],
    [20, 5230026],
    [21, 5956169],
    [22, 6798675],
    [23, 7690004],
    [24, 8707276],
    [25, 9472473],
  ]);

  var options = {
    legend: "none",
    colors: ["red"],

    hAxis: {
      title: "Time",
    },
    vAxis: {
      title: "Popularity",
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}
