let rand = Math.random()
console.log(rand)

        if (rand<0.33){
            let rand1 = Math.random()
                if (rand1<0.33){
                console.log( "Crazy")
                }
                else if (0.33<rand1<0.66){
                console.log( "Amazing")
                }
            
                else  {
                console.log("Fire")
                }
        }
        else if (0.33<rand<0.66){
            let rand2 = Math.random()
                if (rand2<0.33){
                console.log( "Engine")
                }
                else if (0.33<rand2<0.66){
                console.log( "Food")
                }
            
                else  {
                console.log("Garments")
                }
        }
        else{
            let rand3 = Math.random()
                if (rand3<0.33){
                console.log( "Bros")
                }
                else if (0.33<rand3<0.66){
                console.log( "Limited")
                }
            
                else  {
                console.log("Hub")
                }
        }