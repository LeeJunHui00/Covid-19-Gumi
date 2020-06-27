google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Popularity"],
    ["KR", 12602],
    ["CN", 85148],
    ["JP", 18197],
    ["TJ", 5691],
    ["KG", 4204],
    ["KZ", 19750],
    ["UZ", 7228],
    ["HK", 1197],
    ["MO", 46],
    ["MN", 216],
    ["TW", 447],
    ["AF", 30451],
    ["BD", 126606],
    ["BT", 70],
    ["IN", 490401],
    ["IR", 215096],
    ["LK", 2010],
    ["MV", 2277],
    ["NP", 11162],
    ["PK", 195745],
    ["BN", 141],
    ["ID", 50187],
    ["KH", 130],
    ["LA", 19],
    ["MM", 293],
    ["MY", 8600],
    ["PH", 33069],
    ["SG", 42736],
    ["TH", 3162],
    ["TL", 24],
    ["VN", 352],
    ["AE", 46563],
    ["AM", 23247],
    ["AZ", 14852],
    ["BH", 24081],
    ["CY", 992],
    ["GE", 919],
    ["IL", 22078],
    ["IQ", 39139],
    ["JO", 1086],
    ["KW", 42788],
    ["LB", 1662],
    ["OM", 34902],
    ["PS", 1557],
    ["QA", 91838],
    ["SA", 170639],
    ["TR", 193115],
    ["YE", 1080],
  ]);

  var options = {
    region: "142",
    colorAxis: { colors: ["FAC8C8", "B94646", "B90000"] },
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}
