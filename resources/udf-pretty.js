$.fn.extend({ addStyle : function(a){ 
    return this.attr("style", (this.attr("style")==undefined ? a : this.attr("style") + " " + a)); 
} });


$.fn.extend({ contentEditable : function(){ 
    return this.on("mousedown", function () { $(this).attr("contenteditable", "true"); })
               .on("focusout",  function () { $(this).removeAttr("contenteditable"); }); 
} });


$.fn.extend({ flash : function(a){  
    const time=100;
    return this.animate({ backgroundColor: "red" }, time, function(){ 
           		$(this).animate({ backgroundColor: "transparent" }, time);
           });
} });
$.fn.extend({ ff : function(a){  
    return this.finish().flash();
} });



$.fn.extend({ pf : function(a, b){ 
    return this.parents(a).find(b); 
} });


$.fn.extend({ style : function(a){ 
     return this.attr("style", a); 
} });


$.fn.extend({ toggleHtml : function(a, b){ 
     return this.html(this.html() != a ? a : b); 
} });


$.fn.extend({ toggleStyle : function(a, b){ 
     return this.attr("style", (this.attr("style") != a ? a : b) ); 
} });


$.fn.extend({ toggleText : function(a, b){ 
     return this.text(this.text() != a ? a : b);
} });


$.fn.extend({ toggleTextRotate90: function () { 
     const a0 = `display: inline-block; transition-duration: 100ms;`; 
     const a = a0 + `transform: rotate(90deg);`; 
     const b = a0 + `transform: rotate(0deg);`; 
     return this.toggleStyle(a, b); 
}});