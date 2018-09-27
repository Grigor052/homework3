// 1 part
  const f1 = function(a,b,c){
	return a+b+c
};
console.log(f1(25 ,37 ,41));

  // 2 part
  const f2= function(){
	return 25;
};
  console.log(f2(55));

  // 3 part
  const f3 = function(a,b,c){
	const D = a+b-c
};
  console.log(f3())

  // 4 part
  const f4 = function(str1,str2,str3){
	if(str1.length > str2.length && str1.length > str3.length){
		return str1;	
	}else if(str2.length > str3.length && str2.length > str1.length){
		return str2;
	}else{
		return str3;
	}
};
  console.log(f4('Vard','Kakach','Mexak'));

  // 5 part
  const f5 = function(a,b){
	if(a===b){
		return 0;
	}else if(a>b){
    	
      return 1;
    
    }else if(a<b){
    	
      return -1;
    }
};
console.log(f5(100,134));
  
  // 6 part

const f6 = function(a,b){
	return a*b;
};
console.log(f6(23,44));


  // 7 part
  const f7 = function(a,b){
	return a/b
};
console.log(f7(45,77));

 
  // 8 part
  const triangleArea= function(base,height) {

		return f7(f6(base,height),2)

        };
console.log(triangleArea(4,4))

// 9 part
const numLenght=function(a){
  const b = a + '' 
return b.length;	
};
console.log(numLenght(10223));


  //10 part
  const f10=function(string1,string2,number){
    
    if((string1.length + string2.length) > number){
    
      return 1
    
    }else{
    
      return -1
    };
  }  
    
    console.log(f10('Grig','Tovmasyan',12));


    // 11 part
const runStuff=function(string,base,height){

	if(string==='rectangle'){	
      const area = base * height
      return area;
	
    }else if(string==='triangle'){
		return triangleArea(base,height);
	}else{
		return -1;
	}
};

console.log(runStuff("rectangle", 10, 15));

				
