<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title>YUI: Complex Application</title>
    <style>
        body {
            visibility: hidden;
        }
    </style>
</head>
<body class="yui-skin-sam">

<div id="top1">
    <div id="top_wrap">
        <div id="logo"></div>
        <div id="info">
        <strong>YUI User</strong>
        <span class="links"><a href="#">Sign Out</a>, <a href="#">Member Center</a>, <a href="#">Classic Mail</a></span>
        </div>
        <div id="searchBox"><span class="links"><a href="http://developer.yahoo.com/yui/" target="_blank">YUI</a> | <a href="http://www.yahoo.com/" target="_blank">Yahoo!</a> | <a href="http://news.yahoo.com/" target="_blank">Yahoo! News</a></span><input type="text" size="20" id="query" value="Search the Web.."><input type="button" id="search" value="Search"></div>
    </div>
</div>
<div id="left1">
    <div id="folder_top">
        <div class="wrap">
            <div id="check_buttons"></div>
        </div>
    </div>
    <div id="folder_list">
        <div class="wrap">
            <ul>
                <li class="inbox selected"><em></em><a href="#">Inbox</a></li>
                <li class="drafts"><em></em><a href="#">Drafts</a></li>
                <li class="sent"><em></em><a href="#">Sent</a></li>
                <li class="spam"><em></em><a href="#">Spam</a></li>
                <li class="trash"><em></em><a href="#">Trash</a></li>
            </ul>
            <ul>
                <li class="contacts"><em></em><a href="http://addressbook.yahoo.com/" target="_blank">Contacts</a></li>
                <li class="calendar"><em></em><a href="http://calendar.yahoo.com/">Calendar</a></li>
                <li class="notepad"><em></em><a href="http://notepad.yahoo.com" target="_blank">Notepad</a></li>
            </ul>
            <ul>
                <li class="ydn-patterns"><em></em><a href="#">ydn-patterns</a></li>
                <li class="ydn-mail"><em></em><a href="#">ydn-mail</a></li>
                <li class="yws-maps"><em></em><a href="#">yws-maps</a></li>
                <li class="ydn-delicious"><em></em><a href="#">ydn-delicious</a></li>
                <li class="yws-flickr"><em></em><a href="#">yws-flickr</a></li>
                <li class="yws-events"><em></em><a href="#">yws-events</a></li>
            </ul>
            <div id="calBox"><span class="icon"></span><em id="calDateStr"><?php echo(date('m/d/Y')); ?></em></div>
            <div id="calContainer"><div id="cal"></div></div>
        </div>
    </div>
</div>
<div id="composeViewEl"></div>

<script type="text/javascript" src="../..//build/yuiloader/yuiloader-min.js"></script> 
<script type="text/javascript" src="assets/js/main.js"></script> 
</body>
</html>
