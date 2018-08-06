//var DefaultStyle = "height:150px; width:150px; background-color:orange; margin:25px";

var DefaultStyle = "margin:25px; height:0; width:0; border-left:75px solid #FFA500; border-right:75px solid #FFA500; border-top:75px solid #FFA500; border-bottom:75px solid #FFA500";

var DefaultBlueStyle = "margin:25px; height:0; width:0; border-left:75px solid #0000FF; border-right:75px solid #0000FF; border-top:75px solid #0000FF; border-bottom:75px solid #0000FF";

var TriangleStyle = "margin:25px; height:0; width:0; border-left:75px solid transparent; border-right:75px solid transparent; border-top:0; border-bottom:150px solid #FFA500" ;

var CircleStyle =  DefaultStyle + ";border-radius:50%";

var elem = document.getElementById("box");


document.getElementById("button1").addEventListener("click",function(){
        elem.style.borderBottomWidth = "250px";
        elem.style.borderTopWidth = 0;
    });

document.getElementById("button2").addEventListener("click",function()
    {    
        if (elem.style.borderLeftColor == "transparent") 
        {
            elem.style.borderBottomColor = "#0000FF";
        } else 
        {
            elem.style.borderColor = "#0000FF";
        }
    });

document.getElementById("button3").addEventListener("click",function(){
    elem.style.opacity = "0.25";
    });

document.getElementById("button5").addEventListener("click",function()
    {
        if (elem.style.borderLeftColor == "transparent") 
        {
            if (elem.style.borderBottomWidth == "250px")

            {
                if(elem.style.opacity == "0.25")
                {

                    switch (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color"))
                    {
                    //switch (document.getComputedStyle(elem. null)){
                        case 'rgb(0, 0, 255)':
                        
                            elem.style = DefaultBlueStyle + ";border-radius:50%";
                            elem.style.opacity = "0.25";
                            elem.style.borderBottomWidth = "250px";
                            elem.style.borderTopWidth = 0;
                        break;
                        
                        default:
                            elem.style = CircleStyle;
                            elem.style.opacity = "0.25";
                            elem.style.borderBottomWidth = "250px";
                            elem.style.borderTopWidth = 0;
                            //document.getElementById("demo").innerHTML = Boolean(elem.style.borderBottomColor== "#0000FF");
                            //document.getElementById("demo2").innerHTML = Boolean(window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color")=== "rgb(0, 0, 255)");
                    }
                } else 
                {
                    switch (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color"))
                    {                  
                        case 'rgb(0, 0, 255)':                         
                            elem.style = DefaultBlueStyle + ";border-radius:50%";
                            elem.style.borderBottomWidth = "250px";
                            elem.style.borderTopWidth = 0;
                        break;
                            
                        default:
                            elem.style = CircleStyle;
                            elem.style.borderBottomWidth = "250px";
                            elem.style.borderTopWidth = 0;              
                    }
                }
            } else 
            {
                if(elem.style.opacity == "0.25")
                {

                    switch (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color"))
                    {
                        case 'rgb(0, 0, 255)':                     
                            elem.style = DefaultBlueStyle + ";border-radius:50%";
                            elem.style.opacity = "0.25";                            
                        break;
                        
                        default:
                            elem.style = CircleStyle;
                            elem.style.opacity = "0.25";                                      
                    }
                } else 
                {
                    switch (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color"))
                    {                  
                        case 'rgb(0, 0, 255)':                         
                            elem.style = DefaultBlueStyle + ";border-radius:50%";                           
                        break;
                            
                        default:
                            elem.style = CircleStyle;                                           
                    }
                }
            }
        } else 
        {
            elem.style.borderRadius = "50%";          
        }
    });

document.getElementById("button6").addEventListener("click",function()
    {    
        if (elem.style.borderBottomWidth == "250px") 
        {   
            if (elem.style.opacity == "0.25")
            {
                if (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color")=='rgb(0, 0, 255)')
                {
                    elem.style = TriangleStyle;
                    elem.style.borderBottomWidth = "250px";
                    elem.style.opacity = "0.25";
                    elem.style.borderBottomColor = "#0000FF";
                } else
                {
                    elem.style = TriangleStyle;
                    elem.style.borderBottomWidth = "250px";
                    elem.style.opacity = "0.25";
                }
            } else 
            {
                if (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color")=='rgb(0, 0, 255)')
                {
                    elem.style = TriangleStyle;
                    elem.style.borderBottomWidth = "250px";
                    elem.style.borderBottomColor = "#0000FF";
                } else
                {
                    elem.style = TriangleStyle;
                    elem.style.borderBottomWidth = "250px";           
                }
            }
        } else
        {
            if (elem.style.opacity == "0.25")
            {
                if (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color")=='rgb(0, 0, 255)')
                {
                    elem.style = TriangleStyle;
                    elem.style.opacity = "0.25";
                    elem.style.borderBottomColor = "#0000FF";
                } else
                {
                    elem.style = TriangleStyle;
                    elem.style.opacity = "0.25";
                }
            } else 
            {
                if (window.getComputedStyle(elem, null).getPropertyValue("border-bottom-color")=='rgb(0, 0, 255)')
                {
                    elem.style = TriangleStyle;
                    elem.style.borderBottomColor = "#0000FF";
                } else
                {
                    elem.style = TriangleStyle;                   
                }
            }                       
        }       
    });

document.getElementById("button4").addEventListener("click", function(){
    elem.style = DefaultStyle;
    });

