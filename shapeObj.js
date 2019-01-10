//Your code

let Rectangle = {
   
   

   
    area: function(){
        
        let a = ;
        
        return a;
    },
    perimeter: function(){
        
        let p = 2 * this.length + 2 * this.width;

        return p;
    }
}

let Square = {
    sideLength: 4,

    perimeter: function(){
        
        let p = this.sideLength * 4;
        
        return p
    },
    area: function(){
        
        let a = this.sidelength * this.sidelength;
        
        return a;
    }
}

let Circle = {
    raduis: 3,
    circumference: function(){
       
        let c = 2* this.raduis * 3.14;

        return c; 
    },
     area: function(){
      
        let a = Math.PI * this.raduis * this.raduis;

        return a; 
    }
}

let Box = {
    
    length: 6,
    width: 6,
    height: 10,

    volume: function(){

        let v = this.length *  this.length *  this.length;
        
        return v

    }

}

let Sphere = {
    
    radius: 8,
    
     volume: function(){

        let v = 4/3 * Math.PI * this.raduis *  this.radius *  this.radius;
        
        return v;
    }

}
//Dont forget about box and sphere





//------------------------------------------------
//copy paste test code when you finish under here
