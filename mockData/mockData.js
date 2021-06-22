const temperature = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link href="/Content/css?v=Eswk_2H6Ss2i4k1dsN9Z3XOjPw8JisA8ojhWaoiEJ001" rel="stylesheet"/>

    <script src="/bundles/modernizr?v=inCVuEFe6J4Q07A0AcRsbJic_UE5MwpRMNGcOtk94TE1"></script>

</head>
<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="navbar-brand">MOBILE ALERTS</div>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                        <li><a href="/">Sensors</a></li>
                        <li><a href="/">Action Log</a></li>
                        <li><a href="/Home/Imprint">Imprint</a></li>
                        <li><a href="/Home/Privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container body-content">
        



<h3>Teploměr Measurements</h3>

<p><a href="/Home/SensorsOverview?phoneid=423893573059">Back to Overview</a></p>

<form action="/Home/MeasurementDetails" class="form-inline" id="MeasurementDetails" method="post" role="form">    <div class="well">
        <input id="deviceid" name="deviceid" type="hidden" value="035BA3FD350D" />
        <input id="vendorid" name="vendorid" type="hidden" value="f03df34a-d54d-41aa-871c-66aa9fda4fc3" />
        <input id="appbundle" name="appbundle" type="hidden" value="eu.mobile_alerts.weatherhub" />
        <input id="fromepoch" name="fromepoch" type="hidden" value="" />
        <input id="toepoch" name="toepoch" type="hidden" value="" />
        <input type="hidden" value="1" />

        <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
            <label for="from">From</label>
            <div class="input-group date" id="fromdatetimepicker">
                <input aria-describedby="fromdatetimepicker" class="form-control" id="from" name="from" type="text" value="" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>

        <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
            <label for="to">To</label>
            <div class="input-group date" id="todatetimepicker">
                <input aria-describedby="todatetimepicker" class="form-control" id="to" name="to" type="text" value="" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>

        <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
            <button class="btn btn-default" id="btnprev"><i class="glyphicon glyphicon-arrow-left"></i></button>

            <div id="areapanel" class="btn-group" role="group" data-toggle="buttons" aria-label="...">
                <label class="btn btn-default">
                    <input data-value="area" id="area1" name="area" type="radio" value="day" checked> Day
                </label>
                <label class="btn btn-default">
                    <input data-value="area" id="area2" name="area" type="radio" value="week" > Week
                </label>
                <label class="btn btn-default">
                    <input data-value="area" id="area3" name="area" type="radio" value="month" > Month
                </label>
            </div>

            <button class="btn btn-default" id="btnnext"><i class="glyphicon glyphicon-arrow-right"></i></button>
        </div>

        <button class="btn btn-primary" type="submit" name="command" value="refresh" style="margin-right:20px;"><i class="glyphicon glyphicon-refresh"></i>&nbsp;Refresh</button>

    </div>
<table class="table table-striped">
    <thead>
        <tr>
            <th class="timestamp">Timestamp</th>
            <th class="measurement">Temperature</th>
            <th class="measurement">Humidity</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td class="timestamp">6/8/2021 1:36:12 PM</td>
                <td class="measurement">24.3 C</td>
                <td class="measurement">55.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:29:09 PM</td>
                <td class="measurement">24.9 C</td>
                <td class="measurement">52.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:22:13 PM</td>
                <td class="measurement">26.7 C</td>
                <td class="measurement">50.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:11:46 PM</td>
                <td class="measurement">27.3 C</td>
                <td class="measurement">46.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:04:50 PM</td>
                <td class="measurement">27.0 C</td>
                <td class="measurement">47.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:50:39 PM</td>
                <td class="measurement">25.6 C</td>
                <td class="measurement">47.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:43:36 PM</td>
                <td class="measurement">25.5 C</td>
                <td class="measurement">48.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:36:33 PM</td>
                <td class="measurement">25.8 C</td>
                <td class="measurement">47.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:29:37 PM</td>
                <td class="measurement">26.5 C</td>
                <td class="measurement">47.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:16:14 PM</td>
                <td class="measurement">28.7 C</td>
                <td class="measurement">39.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:10:40 PM</td>
                <td class="measurement">30.7 C</td>
                <td class="measurement">34.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:06:20 PM</td>
                <td class="measurement">32.9 C</td>
                <td class="measurement">35.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:59:35 AM</td>
                <td class="measurement">34.0 C</td>
                <td class="measurement">29.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:55:46 AM</td>
                <td class="measurement">36.3 C</td>
                <td class="measurement">31.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:48:43 AM</td>
                <td class="measurement">35.6 C</td>
                <td class="measurement">30.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:41:41 AM</td>
                <td class="measurement">35.3 C</td>
                <td class="measurement">29.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:38:45 AM</td>
                <td class="measurement">33.4 C</td>
                <td class="measurement">35.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:36:37 AM</td>
                <td class="measurement">31.2 C</td>
                <td class="measurement">39.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:33:55 AM</td>
                <td class="measurement">28.9 C</td>
                <td class="measurement">41.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:29:05 AM</td>
                <td class="measurement">28.9 C</td>
                <td class="measurement">36.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:22:56 AM</td>
                <td class="measurement">31.1 C</td>
                <td class="measurement">34.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:17:54 AM</td>
                <td class="measurement">33.3 C</td>
                <td class="measurement">34.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:10:58 AM</td>
                <td class="measurement">32.8 C</td>
                <td class="measurement">32.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 11:03:50 AM</td>
                <td class="measurement">34.0 C</td>
                <td class="measurement">29.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:56:48 AM</td>
                <td class="measurement">34.1 C</td>
                <td class="measurement">29.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:54:41 AM</td>
                <td class="measurement">36.3 C</td>
                <td class="measurement">30.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:47:39 AM</td>
                <td class="measurement">37.3 C</td>
                <td class="measurement">30.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:40:38 AM</td>
                <td class="measurement">37.4 C</td>
                <td class="measurement">26.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:35:42 AM</td>
                <td class="measurement">36.6 C</td>
                <td class="measurement">32.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:34:47 AM</td>
                <td class="measurement">36.5 C</td>
                <td class="measurement">27.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:28:33 AM</td>
                <td class="measurement">35.7 C</td>
                <td class="measurement">33.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:21:37 AM</td>
                <td class="measurement">35.2 C</td>
                <td class="measurement">32.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:14:27 AM</td>
                <td class="measurement">35.2 C</td>
                <td class="measurement">32.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:07:25 AM</td>
                <td class="measurement">35.5 C</td>
                <td class="measurement">30.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 10:00:22 AM</td>
                <td class="measurement">35.3 C</td>
                <td class="measurement">32.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:53:26 AM</td>
                <td class="measurement">34.3 C</td>
                <td class="measurement">34.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:46:17 AM</td>
                <td class="measurement">34.4 C</td>
                <td class="measurement">36.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:39:14 AM</td>
                <td class="measurement">34.9 C</td>
                <td class="measurement">36.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:32:10 AM</td>
                <td class="measurement">34.4 C</td>
                <td class="measurement">35.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:25:07 AM</td>
                <td class="measurement">34.0 C</td>
                <td class="measurement">37.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:18:03 AM</td>
                <td class="measurement">32.9 C</td>
                <td class="measurement">38.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:11:02 AM</td>
                <td class="measurement">32.7 C</td>
                <td class="measurement">38.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 9:03:59 AM</td>
                <td class="measurement">32.8 C</td>
                <td class="measurement">38.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:56:58 AM</td>
                <td class="measurement">33.5 C</td>
                <td class="measurement">39.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:49:54 AM</td>
                <td class="measurement">32.2 C</td>
                <td class="measurement">39.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:42:58 AM</td>
                <td class="measurement">32.2 C</td>
                <td class="measurement">41.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:28:43 AM</td>
                <td class="measurement">31.3 C</td>
                <td class="measurement">45.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:21:40 AM</td>
                <td class="measurement">30.7 C</td>
                <td class="measurement">43.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:14:37 AM</td>
                <td class="measurement">29.6 C</td>
                <td class="measurement">47.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:07:35 AM</td>
                <td class="measurement">28.9 C</td>
                <td class="measurement">48.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 8:00:39 AM</td>
                <td class="measurement">28.1 C</td>
                <td class="measurement">49.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:53:32 AM</td>
                <td class="measurement">27.4 C</td>
                <td class="measurement">51.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:46:36 AM</td>
                <td class="measurement">26.7 C</td>
                <td class="measurement">50.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:32:27 AM</td>
                <td class="measurement">24.6 C</td>
                <td class="measurement">52.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:25:23 AM</td>
                <td class="measurement">23.4 C</td>
                <td class="measurement">54.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:18:27 AM</td>
                <td class="measurement">23.2 C</td>
                <td class="measurement">56.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 7:04:15 AM</td>
                <td class="measurement">21.7 C</td>
                <td class="measurement">61.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:57:14 AM</td>
                <td class="measurement">20.9 C</td>
                <td class="measurement">63.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:50:10 AM</td>
                <td class="measurement">20.5 C</td>
                <td class="measurement">64.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:43:38 AM</td>
                <td class="measurement">19.9 C</td>
                <td class="measurement">69.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:36:42 AM</td>
                <td class="measurement">19.0 C</td>
                <td class="measurement">71.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:29:35 AM</td>
                <td class="measurement">17.8 C</td>
                <td class="measurement">71.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:22:33 AM</td>
                <td class="measurement">17.2 C</td>
                <td class="measurement">76.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:15:31 AM</td>
                <td class="measurement">16.0 C</td>
                <td class="measurement">77.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:10:06 AM</td>
                <td class="measurement">14.5 C</td>
                <td class="measurement">82.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 6:03:04 AM</td>
                <td class="measurement">13.9 C</td>
                <td class="measurement">84.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:56:01 AM</td>
                <td class="measurement">13.4 C</td>
                <td class="measurement">85.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:48:59 AM</td>
                <td class="measurement">12.5 C</td>
                <td class="measurement">88.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:41:56 AM</td>
                <td class="measurement">12.0 C</td>
                <td class="measurement">89.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:34:53 AM</td>
                <td class="measurement">11.9 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:27:50 AM</td>
                <td class="measurement">11.8 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:20:45 AM</td>
                <td class="measurement">11.8 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:13:49 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 5:06:41 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:59:45 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:52:39 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:45:37 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:38:35 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:31:33 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:24:31 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:17:30 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:10:28 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 4:03:24 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:56:23 AM</td>
                <td class="measurement">11.5 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:49:21 AM</td>
                <td class="measurement">11.4 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:42:16 AM</td>
                <td class="measurement">11.4 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:35:14 AM</td>
                <td class="measurement">11.3 C</td>
                <td class="measurement">92.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:28:12 AM</td>
                <td class="measurement">11.6 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:21:09 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 3:14:13 AM</td>
                <td class="measurement">11.7 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:59:58 AM</td>
                <td class="measurement">11.5 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:53:02 AM</td>
                <td class="measurement">11.5 C</td>
                <td class="measurement">93.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:38:53 AM</td>
                <td class="measurement">11.4 C</td>
                <td class="measurement">90.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:31:50 AM</td>
                <td class="measurement">11.4 C</td>
                <td class="measurement">92.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:24:54 AM</td>
                <td class="measurement">11.0 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:10:41 AM</td>
                <td class="measurement">10.9 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 2:03:45 AM</td>
                <td class="measurement">10.8 C</td>
                <td class="measurement">92.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:42:31 AM</td>
                <td class="measurement">11.4 C</td>
                <td class="measurement">93.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:35:35 AM</td>
                <td class="measurement">11.5 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:28:27 AM</td>
                <td class="measurement">11.9 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:21:24 AM</td>
                <td class="measurement">12.0 C</td>
                <td class="measurement">92.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:14:28 AM</td>
                <td class="measurement">11.9 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 1:00:18 AM</td>
                <td class="measurement">11.0 C</td>
                <td class="measurement">96.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:53:17 AM</td>
                <td class="measurement">10.9 C</td>
                <td class="measurement">96.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:46:14 AM</td>
                <td class="measurement">10.5 C</td>
                <td class="measurement">93.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:39:18 AM</td>
                <td class="measurement">10.3 C</td>
                <td class="measurement">96.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:32:08 AM</td>
                <td class="measurement">10.5 C</td>
                <td class="measurement">95.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:25:07 AM</td>
                <td class="measurement">10.7 C</td>
                <td class="measurement">93.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:18:05 AM</td>
                <td class="measurement">10.8 C</td>
                <td class="measurement">91.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:11:03 AM</td>
                <td class="measurement">11.1 C</td>
                <td class="measurement">94.0%</td>
            </tr>
            <tr>
                <td class="timestamp">6/8/2021 12:03:59 AM</td>
                <td class="measurement">10.9 C</td>
                <td class="measurement">90.0%</td>
            </tr>
    </tbody>
</table>
</form>

        <hr />
        <footer>
            <p>&copy; 2021 - DATA INFORMATION SERVICES GmbH</p>
        </footer>
    </div>

    <script src="/bundles/jquery?v=DilzeZuJxdbQsfc_JOwsWB4VFDhTPM73urYeggaKdL81"></script>

    <script src="/bundles/bootstrap?v=nVPYveeA6w58RVBNc8KhFwRgnYjRXImTjVbPBZuBfrI1"></script>

    
    <script type="text/javascript">
        function addForDetailLevel(date, add, detailLevel) {
            var result = date.clone();

            var minDate = moment.unix(1615334400);
            minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

            switch (detailLevel) {
                case "week":
                    result.add(7 * add, "days");
                    minDate = minDate.startOf('week');
                    break;
                case "month":
                    result.add(1 * add, "months");
                    minDate = minDate.startOf('month');
                    break;
                default:
                    result.add(1 * add, "days");
                    break;
            }

            if (result < minDate)
                result = minDate;

            return result;
        }

        function getFromDateForDetailLevel(fromDate, detailLevel) {
            var result = fromDate.clone();

            var minDate = moment.unix(1615334400);
            minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

            switch (detailLevel) {
                case "week":
                    result = result.startOf('week');
                    minDate = minDate.startOf('week');
                    break;
                case "month":
                    result = result.startOf('month');
                    minDate = minDate.startOf('month');
                    break;
                default:
                    result = result.startOf("day");
                    break;
            }

            if (result < minDate)
                result = minDate;

            return result;
        }

        function getToDateForDetailLevel(fromDate, detailLevel) {
            var result = fromDate.clone();

            switch (detailLevel) {
                case "week":
                    result.add(7, "day");
                    break;
                case "month":
                    result.add(1, "month");
                    break;
                default:
                    result.add(1, "day");
                    break;
            }

            return result;
        }

        function updateDates(from, to) {
            $("#fromdatetimepicker").data("DateTimePicker").date(from);
            $("#todatetimepicker").data("DateTimePicker").date(to);
        }

        $(function () {
            // Align minDate to the beginning of the day in local time to allow the datetimepicker to select the date
            var minDate = moment.unix(1615334400);

            minDate = minDate.subtract(minDate.utcOffset(), 'minutes');
            console.log("Min Date", minDate.format());

            $("#fromdatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });
            $("#todatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });

            // Set from and to with correct timezone offsets
            var from = moment.unix(1623110400);
            from = from.subtract(from.utcOffset(), 'minutes');

            var to = moment.unix(1623196800);
            to = to.subtract(from.utcOffset(), 'minutes');

            updateDates(from, to);

            $('#areapanel :input:radio:checked').parent().addClass('active');

            $("#btnnext,#btnprev").click(function (e) {
                e.preventDefault();

                var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

                var area = $("#areapanel :input[name='area']:checked").val();

                var add = ($(this).attr("id") === "btnnext") ? 1 : -1;

                console.log("Old from date", fromDate.format());

                fromDate = getFromDateForDetailLevel(fromDate, area);

                console.log("Old from date for detail level", area, fromDate.format());

                fromDate = addForDetailLevel(fromDate, add, area);

                console.log("Adjusted from date for detail level", area, fromDate.format());

                var toDate = getToDateForDetailLevel(fromDate, area);

                console.log("Adjusted to date for detail level", area, toDate.format());

                updateDates(fromDate, toDate);

                $("#MeasurementDetails").submit();
            });

            $("#areapanel :input[name='area']").change(function (e) {
                e.preventDefault();

                var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

                console.log("Old from date", fromDate.format());

                var area = $(this).val();

                fromDate = getFromDateForDetailLevel(fromDate, area);

                console.log("From date for detail level", area, fromDate.format());

                var toDate = getToDateForDetailLevel(fromDate, area);

                console.log("To date for detail level", area, toDate.format());

                updateDates(fromDate, toDate);

                $("#MeasurementDetails").submit();
            });

            $("#MeasurementDetails").submit(function (event) {
                var fromPicker = $("#fromdatetimepicker").data("DateTimePicker");
                if (fromPicker.date() != null) {
                    var from = fromPicker.date();
                    from = from.add(from.utcOffset(), 'minutes');
                    $("#fromepoch").val(from.unix());
                }
                else
                    $("#fromepoch").val("");

                var toPicker = $("#todatetimepicker").data("DateTimePicker");
                if (toPicker.date() != null) {
                    var to = toPicker.date();
                    to = to.add(to.utcOffset(), 'minutes');
                    $("#toepoch").val(to.unix());
                }
                else
                    $("#toepoch").val("");
            });
        });
    </script>

</body>
</html>`;

const wind = `<html style="" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
<link href="/Content/css?v=Eswk_2H6Ss2i4k1dsN9Z3XOjPw8JisA8ojhWaoiEJ001" rel="stylesheet">

<script src="/bundles/modernizr?v=inCVuEFe6J4Q07A0AcRsbJic_UE5MwpRMNGcOtk94TE1"></script>

</head>
<body data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed="">
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">MOBILE ALERTS</div>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                    <li><a href="/">Sensors</a></li>
                    <li><a href="/">Action Log</a></li>
                    <li><a href="/Home/Imprint">Imprint</a></li>
                    <li><a href="/Home/Privacy">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container body-content">
    



<h3>Anemometr Measurements</h3>

<p><a href="/Home/SensorsOverview?phoneid=423893573059">Back to Overview</a></p>

<form action="/Home/MeasurementDetails" class="form-inline" id="MeasurementDetails" method="post" role="form">    <div class="well">
    <input id="deviceid" name="deviceid" type="hidden" value="0B2DB139D3D4">
    <input id="vendorid" name="vendorid" type="hidden" value="f03df34a-d54d-41aa-871c-66aa9fda4fc3">
    <input id="appbundle" name="appbundle" type="hidden" value="eu.mobile_alerts.weatherhub">
    <input id="fromepoch" name="fromepoch" type="hidden" value="">
    <input id="toepoch" name="toepoch" type="hidden" value="">
    <input type="hidden" value="1">

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <label for="from">From</label>
        <div class="input-group date" id="fromdatetimepicker">
            <input aria-describedby="fromdatetimepicker" class="form-control" id="from" name="from" type="text" value="">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    </div>

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <label for="to">To</label>
        <div class="input-group date" id="todatetimepicker">
            <input aria-describedby="todatetimepicker" class="form-control" id="to" name="to" type="text" value="">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    </div>

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <button class="btn btn-default" id="btnprev"><i class="glyphicon glyphicon-arrow-left"></i></button>

        <div id="areapanel" class="btn-group" role="group" data-toggle="buttons" aria-label="...">
            <label class="btn btn-default active">
                <input data-value="area" id="area1" name="area" type="radio" value="day" checked=""> Day
            </label>
            <label class="btn btn-default">
                <input data-value="area" id="area2" name="area" type="radio" value="week"> Week
            </label>
            <label class="btn btn-default">
                <input data-value="area" id="area3" name="area" type="radio" value="month"> Month
            </label>
        </div>

        <button class="btn btn-default" id="btnnext"><i class="glyphicon glyphicon-arrow-right"></i></button>
    </div>

    <button class="btn btn-primary" type="submit" name="command" value="refresh" style="margin-right:20px;"><i class="glyphicon glyphicon-refresh"></i>&nbsp;Refresh</button>

        <button class="btn btn-default" type="submit" name="command" value="export"><i class="glyphicon glyphicon-export"></i>&nbsp;Export as CSV</button>
</div>
<table class="table table-striped">
<thead>
    <tr>
        <th class="timestamp">Timestamp</th>
        <th class="measurement">Windspeed</th>
        <th class="measurement">Gust</th>
        <th class="measurement">Wind Direction</th>
    </tr>
</thead>
<tbody>
        <tr>
            <td class="timestamp">6/8/2021 7:44:45 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:37:43 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:30:41 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:23:39 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:16:39 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:09:36 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:02:33 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:55:33 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:48:31 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:41:29 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:34:27 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:27:27 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:20:23 PM</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">4.1 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:13:23 PM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:06:19 PM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:59:19 PM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:52:19 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:45:19 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:38:19 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:31:10 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:24:08 PM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">North</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:17:08 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:10:05 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:03:03 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:56:02 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:49:00 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:42:00 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:34:56 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:27:56 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:20:53 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:13:50 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:06:49 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:59:46 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:52:46 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:45:44 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:38:42 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:31:40 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:24:38 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:17:36 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:10:35 PM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.5 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:03:35 PM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:56:35 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:49:29 PM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:42:29 PM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:35:29 PM</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">1.9 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:28:23 PM</td>
            <td class="measurement">1.8 m/s</td>
            <td class="measurement">3.5 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:21:21 PM</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">2.7 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:14:19 PM</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">2.3 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:07:17 PM</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">2.5 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:00:17 PM</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">2.3 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:53:17 PM</td>
            <td class="measurement">1.6 m/s</td>
            <td class="measurement">2.9 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:46:12 PM</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">3.2 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:39:10 PM</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">2.8 m/s</td>
            <td class="measurement">East-northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:32:10 PM</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">2.7 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:25:06 PM</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">2.6 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:18:03 PM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">2.1 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:11:02 PM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:04:00 PM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">West-northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:56:58 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:49:57 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:42:57 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:35:53 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:28:53 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:21:49 PM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">Northeast</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:14:47 PM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">South-southwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:07:47 PM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">South-southwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:00:44 PM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">South-southwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:53:42 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:46:40 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:39:40 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:32:40 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:25:35 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.8 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:18:35 AM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">2.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:11:35 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 11:04:35 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:57:35 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:50:25 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:43:25 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:36:22 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:29:22 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:22:18 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:15:17 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:08:14 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 10:01:12 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:54:11 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">West-northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:47:11 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">West-northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:40:11 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">West-northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:33:05 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:26:03 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:19:02 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:12:00 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 9:04:58 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:57:56 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:50:54 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:43:53 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:36:50 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:29:50 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:22:47 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:15:47 AM</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:08:44 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 8:01:44 AM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">1.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:54:44 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:47:38 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:40:36 AM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">1.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:33:34 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:26:34 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:19:34 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:12:28 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 7:05:27 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:58:25 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:51:25 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:44:22 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:37:19 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:30:19 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:23:15 AM</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">2.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:16:14 AM</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">1.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:09:12 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 6:02:10 AM</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:55:08 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:48:08 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:41:05 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:34:05 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:27:01 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:20:01 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:13:01 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 5:05:55 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:58:54 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:51:52 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:44:50 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:37:49 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:30:47 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.1 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:23:44 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:16:43 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:09:41 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 4:02:39 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:55:37 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:48:36 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.9 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:41:34 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:34:32 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:27:31 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.2 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:20:28 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:13:27 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 3:06:25 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:59:23 AM</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">1.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:52:23 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:45:23 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.6 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:38:23 AM</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:31:23 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.5 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:24:14 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:17:14 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:10:10 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 2:03:08 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:56:08 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:49:04 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:42:03 AM</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">1.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:35:01 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:27:59 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:20:58 AM</td>
            <td class="measurement">0.1 m/s</td>
            <td class="measurement">0.7 m/s</td>
            <td class="measurement">Northwest</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:13:56 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 1:06:53 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.4 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:59:53 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:52:51 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.2 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:45:48 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:38:47 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:31:45 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:24:45 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:17:41 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.3 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:10:40 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">East</td>
        </tr>
        <tr>
            <td class="timestamp">6/8/2021 12:03:40 AM</td>
            <td class="measurement">0.0 m/s</td>
            <td class="measurement">0.8 m/s</td>
            <td class="measurement">East</td>
        </tr>
</tbody>
</table>
</form>

    <hr>
    <footer>
        <p>© 2021 - DATA INFORMATION SERVICES GmbH</p>
    </footer>
</div>

<script src="/bundles/jquery?v=DilzeZuJxdbQsfc_JOwsWB4VFDhTPM73urYeggaKdL81"></script>

<script src="/bundles/bootstrap?v=nVPYveeA6w58RVBNc8KhFwRgnYjRXImTjVbPBZuBfrI1"></script>


<script type="text/javascript">
    function addForDetailLevel(date, add, detailLevel) {
        var result = date.clone();

        var minDate = moment.unix(1388534400);
        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

        switch (detailLevel) {
            case "week":
                result.add(7 * add, "days");
                minDate = minDate.startOf('week');
                break;
            case "month":
                result.add(1 * add, "months");
                minDate = minDate.startOf('month');
                break;
            default:
                result.add(1 * add, "days");
                break;
        }

        if (result < minDate)
            result = minDate;

        return result;
    }

    function getFromDateForDetailLevel(fromDate, detailLevel) {
        var result = fromDate.clone();

        var minDate = moment.unix(1388534400);
        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

        switch (detailLevel) {
            case "week":
                result = result.startOf('week');
                minDate = minDate.startOf('week');
                break;
            case "month":
                result = result.startOf('month');
                minDate = minDate.startOf('month');
                break;
            default:
                result = result.startOf("day");
                break;
        }

        if (result < minDate)
            result = minDate;

        return result;
    }

    function getToDateForDetailLevel(fromDate, detailLevel) {
        var result = fromDate.clone();

        switch (detailLevel) {
            case "week":
                result.add(7, "day");
                break;
            case "month":
                result.add(1, "month");
                break;
            default:
                result.add(1, "day");
                break;
        }

        return result;
    }

    function updateDates(from, to) {
        $("#fromdatetimepicker").data("DateTimePicker").date(from);
        $("#todatetimepicker").data("DateTimePicker").date(to);
    }

    $(function () {
        // Align minDate to the beginning of the day in local time to allow the datetimepicker to select the date
        var minDate = moment.unix(1388534400);

        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');
        console.log("Min Date", minDate.format());

        $("#fromdatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });
        $("#todatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });

        // Set from and to with correct timezone offsets
        var from = moment.unix(1623110400);
        from = from.subtract(from.utcOffset(), 'minutes');

        var to = moment.unix(1623196800);
        to = to.subtract(from.utcOffset(), 'minutes');

        updateDates(from, to);

        $('#areapanel :input:radio:checked').parent().addClass('active');

        $("#btnnext,#btnprev").click(function (e) {
            e.preventDefault();

            var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

            var area = $("#areapanel :input[name='area']:checked").val();

            var add = ($(this).attr("id") === "btnnext") ? 1 : -1;

            console.log("Old from date", fromDate.format());

            fromDate = getFromDateForDetailLevel(fromDate, area);

            console.log("Old from date for detail level", area, fromDate.format());

            fromDate = addForDetailLevel(fromDate, add, area);

            console.log("Adjusted from date for detail level", area, fromDate.format());

            var toDate = getToDateForDetailLevel(fromDate, area);

            console.log("Adjusted to date for detail level", area, toDate.format());

            updateDates(fromDate, toDate);

            $("#MeasurementDetails").submit();
        });

        $("#areapanel :input[name='area']").change(function (e) {
            e.preventDefault();

            var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

            console.log("Old from date", fromDate.format());

            var area = $(this).val();

            fromDate = getFromDateForDetailLevel(fromDate, area);

            console.log("From date for detail level", area, fromDate.format());

            var toDate = getToDateForDetailLevel(fromDate, area);

            console.log("To date for detail level", area, toDate.format());

            updateDates(fromDate, toDate);

            $("#MeasurementDetails").submit();
        });

        $("#MeasurementDetails").submit(function (event) {
            var fromPicker = $("#fromdatetimepicker").data("DateTimePicker");
            if (fromPicker.date() != null) {
                var from = fromPicker.date();
                from = from.add(from.utcOffset(), 'minutes');
                $("#fromepoch").val(from.unix());
            }
            else
                $("#fromepoch").val("");

            var toPicker = $("#todatetimepicker").data("DateTimePicker");
            if (toPicker.date() != null) {
                var to = toPicker.date();
                to = to.add(to.utcOffset(), 'minutes');
                $("#toepoch").val(to.unix());
            }
            else
                $("#toepoch").val("");
        });
    });
</script>



</body></html>`;

const rain = `<html style="" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
<link href="/Content/css?v=Eswk_2H6Ss2i4k1dsN9Z3XOjPw8JisA8ojhWaoiEJ001" rel="stylesheet">

<script src="/bundles/modernizr?v=inCVuEFe6J4Q07A0AcRsbJic_UE5MwpRMNGcOtk94TE1"></script>

</head>
<body data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed="">
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">MOBILE ALERTS</div>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                    <li><a href="/">Sensors</a></li>
                    <li><a href="/">Action Log</a></li>
                    <li><a href="/Home/Imprint">Imprint</a></li>
                    <li><a href="/Home/Privacy">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container body-content">
    



<h3>Srážkoměr Measurements</h3>

<p><a href="/Home/SensorsOverview?phoneid=423893573059">Back to Overview</a></p>

<form action="/Home/MeasurementDetails" class="form-inline" id="MeasurementDetails" method="post" role="form">    <div class="well">
    <input id="deviceid" name="deviceid" type="hidden" value="08458AC36971">
    <input id="vendorid" name="vendorid" type="hidden" value="f03df34a-d54d-41aa-871c-66aa9fda4fc3">
    <input id="appbundle" name="appbundle" type="hidden" value="eu.mobile_alerts.weatherhub">
    <input id="fromepoch" name="fromepoch" type="hidden" value="">
    <input id="toepoch" name="toepoch" type="hidden" value="">
    <input type="hidden" value="1">

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <label for="from">From</label>
        <div class="input-group date" id="fromdatetimepicker">
            <input aria-describedby="fromdatetimepicker" class="form-control" id="from" name="from" type="text" value="">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    </div>

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <label for="to">To</label>
        <div class="input-group date" id="todatetimepicker">
            <input aria-describedby="todatetimepicker" class="form-control" id="to" name="to" type="text" value="">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    </div>

    <div class="form-group" style="margin-right:20px;margin-top:20px;margin-bottom:20px;">
        <button class="btn btn-default" id="btnprev"><i class="glyphicon glyphicon-arrow-left"></i></button>

        <div id="areapanel" class="btn-group" role="group" data-toggle="buttons" aria-label="...">
            <label class="btn btn-default active">
                <input data-value="area" id="area1" name="area" type="radio" value="day" checked=""> Day
            </label>
            <label class="btn btn-default">
                <input data-value="area" id="area2" name="area" type="radio" value="week"> Week
            </label>
            <label class="btn btn-default">
                <input data-value="area" id="area3" name="area" type="radio" value="month"> Month
            </label>
        </div>

        <button class="btn btn-default" id="btnnext"><i class="glyphicon glyphicon-arrow-right"></i></button>
    </div>

    <button class="btn btn-primary" type="submit" name="command" value="refresh" style="margin-right:20px;"><i class="glyphicon glyphicon-refresh"></i>&nbsp;Refresh</button>

        <button class="btn btn-default" type="submit" name="command" value="export"><i class="glyphicon glyphicon-export"></i>&nbsp;Export as CSV</button>
</div>
<table class="table table-striped">
<thead>
    <tr>
        <th class="timestamp">Timestamp</th>
        <th class="measurement">Rain</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>
</form>

    <hr>
    <footer>
        <p>© 2021 - DATA INFORMATION SERVICES GmbH</p>
    </footer>
</div>

<script src="/bundles/jquery?v=DilzeZuJxdbQsfc_JOwsWB4VFDhTPM73urYeggaKdL81"></script>

<script src="/bundles/bootstrap?v=nVPYveeA6w58RVBNc8KhFwRgnYjRXImTjVbPBZuBfrI1"></script>


<script type="text/javascript">
    function addForDetailLevel(date, add, detailLevel) {
        var result = date.clone();

        var minDate = moment.unix(1388534400);
        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

        switch (detailLevel) {
            case "week":
                result.add(7 * add, "days");
                minDate = minDate.startOf('week');
                break;
            case "month":
                result.add(1 * add, "months");
                minDate = minDate.startOf('month');
                break;
            default:
                result.add(1 * add, "days");
                break;
        }

        if (result < minDate)
            result = minDate;

        return result;
    }

    function getFromDateForDetailLevel(fromDate, detailLevel) {
        var result = fromDate.clone();

        var minDate = moment.unix(1388534400);
        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');

        switch (detailLevel) {
            case "week":
                result = result.startOf('week');
                minDate = minDate.startOf('week');
                break;
            case "month":
                result = result.startOf('month');
                minDate = minDate.startOf('month');
                break;
            default:
                result = result.startOf("day");
                break;
        }

        if (result < minDate)
            result = minDate;

        return result;
    }

    function getToDateForDetailLevel(fromDate, detailLevel) {
        var result = fromDate.clone();

        switch (detailLevel) {
            case "week":
                result.add(7, "day");
                break;
            case "month":
                result.add(1, "month");
                break;
            default:
                result.add(1, "day");
                break;
        }

        return result;
    }

    function updateDates(from, to) {
        $("#fromdatetimepicker").data("DateTimePicker").date(from);
        $("#todatetimepicker").data("DateTimePicker").date(to);
    }

    $(function () {
        // Align minDate to the beginning of the day in local time to allow the datetimepicker to select the date
        var minDate = moment.unix(1388534400);

        minDate = minDate.subtract(minDate.utcOffset(), 'minutes');
        console.log("Min Date", minDate.format());

        $("#fromdatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });
        $("#todatetimepicker").datetimepicker({ locale: 'en', minDate: minDate });

        // Set from and to with correct timezone offsets
        var from = moment.unix(1623110400);
        from = from.subtract(from.utcOffset(), 'minutes');

        var to = moment.unix(1623196800);
        to = to.subtract(from.utcOffset(), 'minutes');

        updateDates(from, to);

        $('#areapanel :input:radio:checked').parent().addClass('active');

        $("#btnnext,#btnprev").click(function (e) {
            e.preventDefault();

            var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

            var area = $("#areapanel :input[name='area']:checked").val();

            var add = ($(this).attr("id") === "btnnext") ? 1 : -1;

            console.log("Old from date", fromDate.format());

            fromDate = getFromDateForDetailLevel(fromDate, area);

            console.log("Old from date for detail level", area, fromDate.format());

            fromDate = addForDetailLevel(fromDate, add, area);

            console.log("Adjusted from date for detail level", area, fromDate.format());

            var toDate = getToDateForDetailLevel(fromDate, area);

            console.log("Adjusted to date for detail level", area, toDate.format());

            updateDates(fromDate, toDate);

            $("#MeasurementDetails").submit();
        });

        $("#areapanel :input[name='area']").change(function (e) {
            e.preventDefault();

            var fromDate = $("#fromdatetimepicker").data("DateTimePicker").date();

            console.log("Old from date", fromDate.format());

            var area = $(this).val();

            fromDate = getFromDateForDetailLevel(fromDate, area);

            console.log("From date for detail level", area, fromDate.format());

            var toDate = getToDateForDetailLevel(fromDate, area);

            console.log("To date for detail level", area, toDate.format());

            updateDates(fromDate, toDate);

            $("#MeasurementDetails").submit();
        });

        $("#MeasurementDetails").submit(function (event) {
            var fromPicker = $("#fromdatetimepicker").data("DateTimePicker");
            if (fromPicker.date() != null) {
                var from = fromPicker.date();
                from = from.add(from.utcOffset(), 'minutes');
                $("#fromepoch").val(from.unix());
            }
            else
                $("#fromepoch").val("");

            var toPicker = $("#todatetimepicker").data("DateTimePicker");
            if (toPicker.date() != null) {
                var to = toPicker.date();
                to = to.add(to.utcOffset(), 'minutes');
                $("#toepoch").val(to.unix());
            }
            else
                $("#toepoch").val("");
        });
    });
</script>



</body></html>`

module.exports = {
    MOCK_TEAMPERATURE: temperature,
    MOCK_WIND: wind,
    MOCK_RAIN: rain
};
