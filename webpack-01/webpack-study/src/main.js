import $ from 'jquery'

import css from '../css/index.css'

$(function() {
    $("li:odd").css("background", "blue");
    $("li:even").css("background", "skyblue")
})