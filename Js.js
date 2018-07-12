$('#inpt').on('input', function () {
    var input = GetInput('inpt')
    console.log(input)
    var space = ContainsSpace(input)
    console.log(space)
    if(space){
        document.getElementById('validation').innerHTML = 'Please do not enter a space';
    }
    else{
        document.getElementById('validation').innerHTML = '';
    }
});

function GetInput(id){
    return document.getElementById(id).value;
}

function ContainsSpace(input){
    var space = " ";
    if(input.includes(space)){
       return true;
       }
       else{
       return false;
       }}