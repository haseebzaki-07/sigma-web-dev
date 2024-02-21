console.log('this is promises');


let prom1 = new Promise((resolve,reject)=>{

    let a  = Math.random()
    if(a<0.5){
        reject("No random number was supporting you")


    }
    else{
        setTimeout(() => {
            console.log('Yes i am done');
            resolve("Hzaki")
            
        }, 3000);
    }
   
})

let prom2  = new Promise((resolve,reject)=>{

    let a  = Math.random()
    if(a<0.5){
        reject("No random number was supporting you too")


    }
    else{
        setTimeout(() => {
            console.log('Yes i am done too');
            resolve("Hzaki 2")
            
        }, 1000);
    }
   
})

let p3 = Promise.all([prom1,prom2])
p3.then((a) =>{
    console.log(a)
}).catch(err=>{
    console.log(err);
    
})
