const colors = require('colors')
const fs = require('fs')
const process = require('process')

const argumentos = process.argv;

let tasks = [];

 function readTaskFile(){
    
    fs.readFile(
        'data.json',
        (error,fileContents) =>{
            if(error){
                throw error
            }else {
                tasks = JSON.parse(fileContents)
                console.log(tasks)
                console.clear( )
                
                for (let index = 0; index < tasks.length; index++){
                console.log(
                    tasks[index]['task'].red)}
            }
        }
    )
 }

function writeToTask(taskTowrite) {
    fs.readFile(
        'data.json',
        (error,fileContents) =>{
            if(error){
                throw error
            }else {
                tasks = JSON.parse(fileContents)
                 console.log("added task: ".green+taskTowrite['task'].magenta)
                tasks.push(taskTowrite)

                fs.writeFile(
                    'data.json',
                    JSON.stringify(tasks),
                    (error)=>{
                        if(error){
                            throw error
                        }else {
                            
                        }
                    }
                )

            }
        }
    )

     
}

function deleteTask(num) {
    fs.readFile(
        'data.json', 
        (error,fileContents) => {  
             if(error){
                 throw error
             }else{
                 tasks = JSON.parse(fileContents)
                tasks.splice((num-1),1)
                console.log(tasks)
                
                fs.writeFile(
                    'data.json',
                    JSON.stringify(tasks),
                    (error)=>{
                        if(error){
                            throw error
                        }else {
                            
                        }
                    }
                   
                )
                   
             }
        }
    )
}

function editTask(task,edit) {
    
    fs.readFile(
        'data.json', 
        (error,fileContents) => {  
             if(error){
                 throw error
             }else{
                 tasks = JSON.parse(fileContents)
                tasks = task,edit
                    console.log(tasks)
                    tasks.push(tasks)
                
                    fs.writeFile(
                    'data.json',
                    JSON.stringify(tasks),
                    (error)=>{
                        if(error){
                            throw error
                        }else {
                            
                        }
                    }
                   
                )
                   
             }
        }
    )

}



if (argumentos[2] === "--show"){
    readTaskFile()
}

if (argumentos[2] === "--add"){
    writeToTask( { task:argumentos[3] })
}

if (argumentos[2] === "--delete"){
    deleteTask( argumentos[3] )
}

if (argumentos[2] === "--edit"){
    editTask( argumentos[3],{task:argumentos[4]} )
}


