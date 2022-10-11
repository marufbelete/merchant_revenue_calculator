
const createBlock=(data,result)=>{
    const key=Object.keys(data?.query?.pages)
    const desc=data?.query?.pages[key[0]]
    const blocks=[]
    const trans_block=[]
    const properLength=(str_arr,sign,temp=[])=>{
        if(sign==="lte")
        {
            for(let i=0;i<str_arr.length;i++)
            {
                const prop_block=str_arr.slice(i,i+4)
                if(prop_block.join(" ").length>=40)
                {
                    blocks.push(prop_block.join(" "))
                }
                else{
                  trans_block.push(prop_block.join(" "))
                }
                i=i+2
            }
        }
        else{
            for(let i=0;i<str_arr.length;i++)
            {
                const prop_block=str_arr.slice(i,i+4)
                if(prop_block.join(" ").length>=40)
                {
                    age_arr.push(prop_block.join(" "))
                }
                else{
                  trans_block.push(prop_block.join(" "))
                }
                i=i+3
            }
        }
    }
    if(desc.extract)
       {
       let blocks_arr=desc.extract.includes('\n')?desc.extract.split(/\r?\n/):[desc.extract]
       console.log(blocks_arr)
        if(blocks_arr.length>1)
        {
            console.log(blocks_arr[0].split(" ").length)
            if(blocks_arr[0].split(" ").length<40)
            {
                const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
                properLength(less_threshold,sign="lte")
                const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
                properLength(great_threshold,sign="gte")
                const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
                blocks.push(...within_threshold)
            }
            else if(blocks_arr[0].split(" ").length>200)
            {
                const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
                properLength(great_threshold,sign="gte")
                const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
                properLength(less_threshold,sign="lte")
                const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
                blocks.push(...within_threshold)
            }
            else{
                const within_threshold=blocks_arr.filter(e=>e.split(" ").length>40 && e.split(" ").length<200)
                blocks.push(...within_threshold)
                const great_threshold= blocks_arr.filter(e=>e.split(" ").length>200)
                properLength(great_threshold,sign="gte")
                const less_threshold=blocks_arr.filter(e=>e.split(" ").length<40)
                properLength(less_threshold,sign="lte")
                 
            }
            
           
           
        }
        
        result.blocks=blocks
        result.total_block=result.blocks.length
       }
    return result
}

module.exports={
    createBlock
}