AFRAME.registerComponent('clicked',{
    init:function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('found')
            this.openMovie()
        })
    },
    openMovie:function(){
        
        var M1Button=document.getElementById('button1')
        M1Button.addEventListener('click',()=>{
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
              });
        })
    }
})