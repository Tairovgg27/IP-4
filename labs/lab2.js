let error= " ";
function proverka(arr) {
    let flag = true;
    if(arr.length > 0) {
        let matrix = arr.split('\n');
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix.length; j++) 
            {
                if(matrix.length != matrix[i].length) 
                {
                    error = "Матрица должна быть квадратной";
                    flag = false;
                    break;
                }
                if(matrix[i][j] != 1 && matrix[i][j] != 0) 
                {
                    error = "Используете только 0 и 1";
                    flag = false;
                    break;
                }
            }
        }
    }
    else  {
        error = "введите данные";
        flag = false;
    }
    return flag;
}
function main() {
    let sym,ref,trans = 0;
    let res=" ";
    let arr = document.getElementById('inp');
    if (proverka(arr.value)) {
        let matrix;
        matrix=arr.value.split('\n');

    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) 
        {
            if (i === j && matrix[i][j]==1)
             ref++;
        }
    }
    if (ref == matrix.length)
            res= "рефлексивная ";
        else 
            res= res+"антирефлексивная ";

   

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) 
        {
            if (matrix[i][j] !== matrix[j][i])
             {
                sym++;
                break;
            }
        }
    }
        if (sym > 0) 
            res = res+ "несимметричная ";
        else 
            res = res+ "симметричная ";

    
    let kos = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) 
        {
            if (matrix[i][j] == matrix[j][i]) 
            {
                kos=false;
                break;
            }
        }
    }
        if (kos == false)
            res = res+ "некососимметричная ";
         else
             res =res+ "кососимметричная ";

                
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = i + 1; j < matrix.length; j++) {
                    if (matrix[i][j] > 0 && i !== j) {
                        for (let jj = i + 2; jj < matrix.length; jj++) 
                    {
                    if (matrix[j][jj] > 0 && matrix[i][jj] > 0) 
                    trans = 1;
                    if (matrix[j][jj] > 0 && !(matrix[i][jj] > 0)) 
                    {
                        trans = -1;
                        break;
                    }
                }
            }
            else{
                trans = -1;
            }
        }
    }
         for (let i = matrix.length - 1; i >= 0; i--) {
                for (let j = i - 1; j >= 0; j--) {
                    if (matrix[i][j] > 0 && i !== j) {
                         for (let jj = i - 2; jj >= 0; jj--)
                 {
                    if ((matrix[j][jj] > 0) && matrix[i][jj] > 0)
                     trans = 1;
                    if (matrix[j][jj] > 0 && !(matrix[i][jj] > 0)) 
                    {
                        trans = -1;
                        break;
                    }
                }
            }
            else{
                trans = -1;
            }
        }
    }
        if (trans > 0) 
         res = res + "транзитивная"
        else 
         res = res + "антитранзитивная"
    
            document.getElementById('output').innerHTML = res+" матрица";
    }
    else{
        alert(error);
    }
}