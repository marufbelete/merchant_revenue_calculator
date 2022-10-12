
const createBlock=(data,result)=>{
    const key=Object.keys(data?.query?.pages)
    const desc=data?.query?.pages[key[0]]
    let blocks=[]
    if(desc?.extract)
    {
    blocks= desc.extract.match(/(.|\n){200,800}(\. |\.\n|\.$)/gs)
    console.log(blocks)
    result.blocks=blocks
    result.total_block=result.blocks.length
 }
 return result
}

module.exports={
    createBlock
}
    // const trans_block=[]
//     const properLength=(str_arr,sign,temp=[])=>{
//         if(sign==="lte")
//         {
//             for(let i=0;i<str_arr.length;i++)
//             {
//                 const prop_block=str_arr.slice(i,i+4)
//                 if(prop_block.join(" ").length>=40)
//                 {
//                     blocks.push(prop_block.join(" "))
//                 }
//                 else{
//                   trans_block.push(prop_block.join(" "))
//                 }
//                 i=i+2
//             }
//         }
//         else{
// console.log("large")
// let chunk=150
//             for(let i=0;i<str_arr.length;i++)
//             {
//                 let breaks_block=true
//                 // (\. |\.\n)
//                 console.log(str_arr[i])
//                 const prop_block=str_arr[i].match(/(.|\n){190,800}(\. |\.\n|\.$)/gs)
//                 while(breaks_block){
//                     // if(breaks_block[j].split(" ").length)
//                     // {}
//                   prop_block.slice(0,chunk)
//                 }
                
//                 blocks.push(prop_block.join(" "))
                
//             }
//         }
//     }
   
    //    const prop_block=str_arr[i]

    //    console.log(blocks_arr)
    //     if(blocks_arr.length>1)
    //     {
    //         console.log(blocks_arr[0].split(" ").length)
    //         if(blocks_arr[0].split(" ").length<40)
    //         {
    //             const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
    //             properLength(less_threshold,sign="lte")
    //             const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
    //             properLength(great_threshold,sign="gte")
    //             const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
    //             blocks.push(...within_threshold)
    //         }
    //         else if(blocks_arr[0].split(" ").length>200)
    //         {
    //             const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
    //             properLength(great_threshold,sign="gte")
    //             const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
    //             properLength(less_threshold,sign="lte")
    //             const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
    //             blocks.push(...within_threshold)
    //         }
    //         else{
    //             const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
    //             blocks.push(...within_threshold)
    //             const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
    //             properLength(great_threshold,sign="gte")
    //             const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
    //             properLength(less_threshold,sign="lte")
                 
    //         }
    //     }
    //     else{
    //         if(blocks_arr[0].split(" ").length<40)
    //         {
    //             properLength(blocks_arr,sign="lte") 
    //         }
    //         else if(blocks_arr[0].split(" ").length>200)
    //         {
    //             properLength(blocks_arr,sign="gte") 
    //         }
    //         else{
    //             blocks.push(...blocks_arr)
    //         }
    //     }
        
    //     result.blocks=blocks
    //     result.total_block=result.blocks.length
  

