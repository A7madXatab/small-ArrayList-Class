class ArrayList
{
    constructor()
    {
        this.array = [...arguments];
        this.length = this.array.length;
    }
    push(el)
    {
        this.array = [...this.array,el];
        this.length = this.array.length
        this.return();
    }
    pop()
    {
        this.array = this.array.slice(0,this.array.length);
        this.length = this.array.length;
        this.return()
    }
    unshift(el)
    {
        this.array = [el,...this.array];
        this.length = this.array.length;
        this.return();
    }
    shift()
    {
       this.array = this.array.slice(1,this.array.length);
       this.length = this.array.length;
       this.return()
    }
    clear(){
        this.array = [];
        this.return();
    }
    concat(arr2){
        return [...this.array,...arr2];
    }
    map(callback)
    {
        let mappedArray=[]
        for(const el of this.array)
         mappedArray.push(callback(el));
         return new ArrayList(...mappedArray);
    }
    filter(callback)
    {
        let filteredArray = [];
        for(const el of this.array)
          if(callback(el))
           filteredArray.push(el);
            
         return new ArrayList(...filteredArray);
    }
    find(callback)
    {
        return this.filter(callback)[0];
    }
    reduce(callback,totallvalue=0)
    {
        let totall = totallvalue;
          for(const el of this.array)
           totall=callback(totall,el);
        return totall;
    }
    return()
    {
       return this.array;
    }
    
}

let a= new ArrayList(2,2,5);
