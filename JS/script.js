const arr = [1, 2, 3, -1, -2, -3];

function func(arr){
    const positiveNumberArr = [];

    if(!arr.length){return `Массив пуст`;}
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > 0){
                positiveNumberArr.push(arr[i]);
            }
        }
        for (let z = 0; z < positiveNumberArr.length; z++) {
            if (!positiveNumberArr.length) {
                return null;
            }
            return positiveNumberArr;
        }
}
alert(func(arr));