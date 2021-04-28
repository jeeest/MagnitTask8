let productList={
    'apple':120,
    'banana':600,
    'milk':702,
}

console.log('Old price:')
for (key in productList){
	console.log(key+': '+productList[key]);
}

function NewPrice(prodList) {
    for (key in prodList) {    
        prodList[key]=5*Math.round(prodList[key]*1.15/5);
    }
    return prodList;
}

newProductList=NewPrice(productList);
console.log('\nNew price:')
for (key in newProductList){
	console.log(key+': '+newProductList[key]);
}


