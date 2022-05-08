
                // $(document).ready(function(){

                //  console.log("Started");

                // });


                $('#btn1').click(function(){

                    $("#contaner").fadeIn();

                });

                $('#btn2').click(function(){
                    $('#contaner').fadeOut(2000,function(){
                        alert("Gone...");
                    });

                })

                $('#btnt').click(function(){

                $('#contaner').fadeToggle();


                })
                $('#btnto').click(function(){

                    $('#contaner').fadeTo(345,0.5,function(){

                        alert("Loaded");
                    });

                    })
 
//
$('#animate').click(function(){

$('#contaner').animate({background:"black"});
});

