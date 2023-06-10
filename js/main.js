'use strict'

$(document).ready(() => {
    let part1 = $('.part-one');
    let part2 = $('.part-two');
    let but1 = $('.button1');
    let but2 = $('.button2');
    let slide1 = $('.slide1');
    let slide2 = $('.slide2');
    let height;
    let active = false;
    
    
    btn1Click();
    btn2Click();
    blockHide();

    
    function btn1Click() {
        but1.click(function() {
            part1.css("margin-left", "-40%");
            but1.addClass('none');
            but2.removeClass('none');
        });
    }

    function btn2Click() {
        but2.click(function() {
            part1.css("margin-left", "0%");
            but2.addClass('none');
            but1.removeClass('none');
        });
    }

    function blockHide() {
        
        height = part1.height();

        $('.part-one__block1').height(height / 2);
        $('.part-one__block2').height(height);
        $('.part-two__block1').height(height / 1.4);
        $('.part-two__block2').height(height);
        
        let mouseDown = false;
        
        slide1.mousedown(function(){
            mouseDown = true;
        });
        
        part1.mouseleave(function(){
            mouseDown = false;
        });
        
        slide1.mouseup(function(){
            mouseDown = false;
        });
        slide2.mousedown(function(){
            mouseDown = true;
        });
        
        part2.mouseleave(function(){
            mouseDown = false;
        });
        
        slide2.mouseup(function(){
            mouseDown = false;
        });
        
        part1.mousemove(function(e){
            if (!mouseDown) {
                return
            }
            let mouseY = e.pageY;
            let newHeight = (mouseY / height) * 100;
            $('.part-one__block1').height(newHeight + "%");
            $('.part-one__block2').height(newHeight - "%");
        });
        part2.mousemove(function(e){
            if (!mouseDown) {
                return
            }
            let mouseY = e.pageY;
            let newHeight = (mouseY / height) * 100;
            $('.part-two__block1').height(newHeight + "%");
            $('.part-two__block2').height(newHeight - "%");
        });

    }
})